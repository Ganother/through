export default {
  getArticleList: {
    gql: `query ARTICLE_LIST($topic: String, $state: Int) {
      articleList(topic: $topic, state: $state) {
        _id
        user
        title
        context
        state
      }
    }`,
    type: 'query'
  },
  getArticleDetail: {
    gql: `query ARTICLE_DETAIL($state: Int, $id: String!){
      articleDetail(state: $state, id: $id) {
        _id
        user
        title
        context
        state
      }
    }`,
    type: 'query'
  },
  addArticle: {
    gql: ` mutation ADD_ARTICLE($input: ArticleInput){
      addArticle(input: $input){ 
        _id
        user
        title
        context
        state
      }
    }`,
    type: 'mutate'
  },
  updateArticle: {
    gql: ` mutation UPDATE_ARTICLE($input: ArticleInput){
      updateArticle(input: $input){ 
        _id
        user
        context
        state
      }
    }`,
    type: 'mutate'
  }
}