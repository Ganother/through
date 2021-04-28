var topic = (function () {
'use strict';
var topic = {
    getTopicList: {
        gql: "query TOPIC_LIST($state: Int) {\n      topicList(state: $state) {\n        _id\n        title\n        state\n        desc\n      }\n    }",
        type: 'query'
    },
    getTopicDetail: {
        gql: "query TOPIC_DETAIL($id: String!){\n      topicDetail(id: $id) {\n        _id\n        title\n        state\n        desc\n      }\n    }",
        type: 'query'
    },
    addTopic: {
        gql: " mutation ADD_TOPIC($input: TopicInput){\n      addTopic(input: $input){ \n        _id\n        title\n        state\n        desc\n      }\n    }",
        type: 'mutate'
    },
    updateTopic: {
        gql: " mutation UPDATE_TOPIC($input: TopicInput){\n      updateTopic(input: $input){ \n        _id\n        title\n        state\n        desc\n      }\n    }",
        type: 'mutate'
    }
};


return topic;
})();
