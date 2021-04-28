var article = (function () {
'use strict';
var article = {
    getArticleList: {
        gql: "query ARTICLE_LIST($topic: String, $state: Int) {\n      articleList(topic: $topic, state: $state) {\n        _id\n        user\n        context\n        state\n      }\n    }",
        type: 'query'
    },
    getArticleDetail: {
        gql: "query ARTICLE_DETAIL($id: String!){\n      articleDetail(id: $id) {\n        _id\n        user\n        context\n        state\n      }\n    }",
        type: 'query'
    },
    addAricle: {
        gql: " mutation ADD_ARTICLE($input: ArticleInput){\n      addArticle(input: $input){ \n        _id\n        user\n        context\n        state\n      }\n    }",
        type: 'mutate'
    },
    updateArticle: {
        gql: " mutation UPDATE_ARTICLE($input: ArticleInput){\n      updateArticle(input: $input){ \n        _id\n        user\n        context\n        state\n      }\n    }",
        type: 'mutate'
    }
};


return article;
})();
