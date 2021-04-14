export default {
  getTopicList: {
    gql: `query TOPIC_LIST($state: Int) {
      topicList(state: $state) {
        _id
        title
        state
        desc
      }
    }`,
    type: 'query'
  },
  getTopicDetail: {
    gql: `query TOPIC_DETAIL($id: String!){
      topicDetail(id: $id) {
        _id
        title
        state
        desc
      }
    }`,
    type: 'query'
  },
  addTopic: {
    gql: ` mutation ADD_TOPIC($input: TopicInput){
      addTopic(input: $input){ 
        _id
        title
        state
        desc
      }
    }`,
    type: 'mutate'
  },
  updateTopic: {
    gql: ` mutation UPDATE_TOPIC($input: TopicInput){
      updateTopic(input: $input){ 
        _id
        title
        state
        desc
      }
    }`,
    type: 'mutate'
  }
}