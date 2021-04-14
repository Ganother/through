export default {
  getArticleList: {
    gql: `query ARTICLE_LIST($topic: String, $state: Int) {
      articleList(topic: $topic, state: $state) {
        _id
        user
        context
        state
      }
    }`,
    type: 'query'
  },
  getArticleDetail: {
    gql: `query ARTICLE_DETAIL($id: String!){
      articleDetail(id: $id) {
        _id
        user
        context
        state
      }
    }`,
    type: 'query'
  },
  addAricle: {
    gql: ` mutation ADD_ARTICLE($input: ArticleInput){
      addArticle(input: $input){ 
        _id
        user
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