interface Module {
  [key: string]: any
}

import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import { ElMessage } from 'element-plus';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ), 
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// const files = import.meta.glob('./gqls/*.ts')
// import * as gqls_1 from './gqls/article'
// import * as gqls_2 from './gqls/topic'
// const files = {
//   './gqls/article': gqls_1,
//   './gqls/topic': gqls_2
// }
const files = (<any>require).context("./gqls", false, /\.ts$/);
console.log(files)
const m: Module = {}
enum Method {
  query = 'query',
  mutate = 'mutate'
}
enum MethodOptionName {
  query = 'query',
  mutate = 'mutation'
}
m.fetch = <T extends Method>(gqlName: string, type: T, variables: any): Promise<any> => new Promise((resolve, reject) => {
  const methods: string[] = [Method.query, Method.mutate]
  if (!methods.includes(type)) {
    throw new Error('没有这样的请求类型' + type)
  }
  m.client[type]({
    [MethodOptionName[type]]: gql`${gqlName}`,
    variables
  }).then((data: any) => {
    resolve(data)
  }).catch((err: Error) => {
    // ElMessage({
    //   message: err.message,
    //   type: 'error'
    // })
    reject(err)
  })
})
m.init = () => new Promise(async (resolve, reject) => {
  const cache = new InMemoryCache();

  m.client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    uri: '/api',

    // Provide some optional constructor fields
    name: 'sylvanas',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
  files.keys().forEach((key: any) => {
    // const inters = files[key as keyof typeof files]
    // console.log(inters)
    const inters = files(key).default
    console.log(inters)
    const map: Module = {}
    const k = key.replace(/(\.\/|\.ts|gqls\/)/g, "")
    m[k] = JSON.parse(JSON.stringify(inters))
    for (const name in m[k]) {
      const gql = m[k][name].gql
      const type = m[k][name].type
      m[k][name] = ((gql, type) => {
        return (variables: any) => {
          return m.fetch(gql, type, variables)
        }
      })(gql, type)
    }
  });
  resolve(null)
})


export default m