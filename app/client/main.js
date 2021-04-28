(function () {
'use strict';


/// <reference path="../scene.d.ts" />
var script$a = vendor.d({
    name: 'IndexScene',
    props: {},
    components: {},
    setup: function () {
        var routes = vendor.u();
        var navShow = vendor.r(false);
        var needHeader = vendor.c(function () {
            return routes.name.indexOf('start') == -1;
        });
        return { needHeader: needHeader, navShow: navShow };
    },
    mounted: function () { },
    methods: {
        toggleNav: function () {
            this.navShow = !this.navShow;
        }
    }
});

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAAB4CAYAAAA9vSSqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCNDU5MzBGQTREMUIxMUU4OURGMkRFNEZGRjRGRjVCRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNDk0RUM3RTk1REExMUVCODFBRkU5NUY5NzhBQjQ3OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNDk0RUM3RDk1REExMUVCODFBRkU5NUY5NzhBQjQ3OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjdBOTNFRjhCQ0MxMUU4OEVBREIxQjlGMTQ3NTYwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjdBOTNGMDhCQ0MxMUU4OEVBREIxQjlGMTQ3NTYwOSIvPiA8L3JkZjpEZXNjcmlw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";

const _hoisted_1$9 = { class: "scene-wrapper" };
const _hoisted_2$8 = /*#__PURE__*/vendor.e("img", {
  src: img,
  alt: "",
  class: "main-logo"
}, null, -1 /* HOISTED */);
const _hoisted_3$8 = /*#__PURE__*/vendor.f("432434232333333333 ");
const _hoisted_4$4 = /*#__PURE__*/vendor.e("div", { class: "nav-content" }, null, -1 /* HOISTED */);

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = vendor.a("router-view");

  return (vendor.o(), vendor.b("section", _hoisted_1$9, [
    vendor.w(vendor.e("header", {
      class: ['main-header', {'header-nav-open': _ctx.navShow}]
    }, [
      _hoisted_2$8,
      vendor.e("i", {
        class: "nav-btn",
        onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.toggleNav && _ctx.toggleNav(...args)))
      }),
      _hoisted_3$8,
      _hoisted_4$4
    ], 2 /* CLASS */), [
      [vendor.v, _ctx.needHeader]
    ]),
    vendor.e(_component_router_view)
  ]))
}

script$a.render = render$a;
script$a.__file = "client/src/scenes/Index.vue";

var script$9 = vendor.d({
    name: "App",
    components: {
        Scene: script$a,
    },
    mounted: function () {
    },
});

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = vendor.a("router-view");

  return (vendor.o(), vendor.b(_component_router_view))
}

script$9.render = render$9;
script$9.__file = "client/src/App.vue";

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

var gqls_1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': article
});

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

var gqls_2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': topic
});

var files = {
    './gqls/article': gqls_1,
    './gqls/topic': gqls_2
};
// const files =  (<any>require).context("./gqls", false, /\.ts$/);
var m = {};
var Method;
(function (Method) {
    Method["query"] = "query";
    Method["mutate"] = "mutate";
})(Method || (Method = {}));
var MethodOptionName;
(function (MethodOptionName) {
    MethodOptionName["query"] = "query";
    MethodOptionName["mutate"] = "mutation";
})(MethodOptionName || (MethodOptionName = {}));
m.fetch = function (gqlName, type, variables) { return new Promise(function (resolve, reject) {
    var _a;
    var methods = [Method.query, Method.mutate];
    if (!methods.includes(type)) {
        throw new Error('没有这样的请求类型' + type);
    }
    m.client[type]((_a = {},
        _a[MethodOptionName[type]] = vendor.g(templateObject_1 || (templateObject_1 = vendor._(["", ""], ["", ""])), gqlName),
        _a.variables = variables,
        _a)).then(function (data) {
        resolve(data);
    }).catch(function (err) {
        vendor.h({
            message: err.message,
            type: 'error'
        });
        reject(err);
    });
}); };
m.init = function () { return new Promise(function (resolve, reject) { return vendor.i(void 0, void 0, void 0, function () {
    var cache, key, inters, k, name_1, gql_1, type;
    return vendor.j(this, function (_a) {
        cache = new vendor.I();
        m.client = new vendor.A({
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
        for (key in files) {
            inters = files[key];
            console.log(inters);
            k = key.replace(/(\.\/|\.ts|gqls\/)/g, "");
            m[k] = JSON.parse(JSON.stringify(inters));
            for (name_1 in m[k]) {
                gql_1 = m[k][name_1].gql;
                type = m[k][name_1].type;
                m[k][name_1] = (function (gql, type) {
                    return function (variables) {
                        return m.fetch(gql, type, variables);
                    };
                })(gql_1, type);
            }
        }
        resolve(null);
        return [2 /*return*/];
    });
}); }); };
var templateObject_1;

/// <reference path="../scene.d.ts" />
var script$8 = vendor.d({
    name: 'IndexScene',
    props: {},
    components: {},
    setup: function () {
        var routes = vendor.u();
        var navShow = vendor.r(false);
        var needHeader = vendor.c(function () {
            return routes.name.indexOf('start') == -1;
        });
        return { needHeader: needHeader, navShow: navShow };
    },
    mounted: function () { },
    methods: {
        toggleNav: function () {
            this.navShow = !this.navShow;
        }
    }
});

const _hoisted_1$8 = { class: "scene-wrapper" };
const _hoisted_2$7 = /*#__PURE__*/vendor.e("img", {
  src: img,
  alt: "",
  class: "main-logo"
}, null, -1 /* HOISTED */);
const _hoisted_3$7 = /*#__PURE__*/vendor.f("432434232333333333 ");
const _hoisted_4$3 = /*#__PURE__*/vendor.e("div", { class: "nav-content" }, null, -1 /* HOISTED */);

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = vendor.a("router-view");

  return (vendor.o(), vendor.b("section", _hoisted_1$8, [
    vendor.w(vendor.e("header", {
      class: ['main-header', {'header-nav-open': _ctx.navShow}]
    }, [
      _hoisted_2$7,
      vendor.e("i", {
        class: "nav-btn",
        onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.toggleNav && _ctx.toggleNav(...args)))
      }),
      _hoisted_3$7,
      _hoisted_4$3
    ], 2 /* CLASS */), [
      [vendor.v, _ctx.needHeader]
    ]),
    vendor.e(_component_router_view)
  ]))
}

script$8.render = render$8;
script$8.__file = "client/src/scenes/index.vue";

var SceneManager = /** @class */ (function () {
    function SceneManager() {
        this._sceneList = {};
        this._mainSceneEvent = {};
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new SceneManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    SceneManager.prototype.bindMainScene = function (funcs) {
        this._mainSceneEvent = funcs;
    };
    SceneManager.prototype.register = function (config) {
        this._sceneList[config.name] = {
            name: config.name,
            keepAlive: config.keepAlive,
            show: false,
            init: false
        };
    };
    SceneManager.prototype.loadScene = function (name, data) {
        if (!this._sceneList[name]) {
            console.warn('没有注册此场景，请检查');
            return this;
        }
        this._sceneList[name].init = true;
        this._sceneList[name].show = true;
        if (this._mainSceneEvent.onLoadOne && typeof this._mainSceneEvent.onLoadOne === 'function') {
            this._mainSceneEvent.onLoadOne(this._sceneList[name], data);
        }
        return this;
    };
    return SceneManager;
}());

var script$7 = vendor.d({
    name: 'Start',
    props: {},
    setup: function () {
        var count = vendor.r(0);
        return { count: count };
    },
    methods: {
        toStory: function () {
            SceneManager.instance.loadScene('Story');
        },
        toThrough: function () {
            SceneManager.instance.loadScene('Through');
        },
    },
});

const _hoisted_1$7 = { class: "start-wrapper" };
const _hoisted_2$6 = /*#__PURE__*/vendor.e("img", {
  src: img,
  alt: "",
  class: "logo"
}, null, -1 /* HOISTED */);
const _hoisted_3$6 = /*#__PURE__*/vendor.f("穿行");

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vendor.a("router-link");

  return (vendor.o(), vendor.b("section", _hoisted_1$7, [
    _hoisted_2$6,
    vendor.k(" <div class=\"btn\" @click=\"toStory\">故事</div> "),
    vendor.e(_component_router_link, {
      class: "main-btn",
      to: {name: 'scene-through'}
    }, {
      default: vendor.l(() => [
        _hoisted_3$6
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

script$7.render = render$7;
script$7.__file = "client/src/scenes/Start.vue";

var script$6 = vendor.d({
    name: "Story",
    props: {},
    setup: function () {
        var count = vendor.r(0);
        return { count: count };
    },
});

const _withId$1 = /*#__PURE__*/vendor.n("data-v-d02f3dc4");

vendor.p("data-v-d02f3dc4");
const _hoisted_1$6 = { class: "start-wrapper" };
vendor.m();

const render$6 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vendor.o(), vendor.b("section", _hoisted_1$6, " 故事模式 "))
});

script$6.render = render$6;
script$6.__scopeId = "data-v-d02f3dc4";
script$6.__file = "client/src/scenes/Story.vue";

var state = {
    'preConfirm': 0,
    'online': 1,
    'offline': 2
};

var script$5 = vendor.d({
    name: 'Through',
    props: {},
    setup: function (props) {
        var topic = vendor.q({
            _id: '',
            title: '',
        });
        var articles = vendor.r([]);
        function getTopic() {
            m.topic.getTopicList({ state: state.online }).then(function (data) {
                if (data.data.topicList && data.data.topicList.length) {
                    var t = data.data.topicList[0];
                    topic._id = t._id;
                    topic.title = t.title;
                    getArticles();
                }
            });
        }
        function getArticles() {
            m.article.getArticleList({ state: state.online, }).then(function (data) {
                if (data.data.articleList && data.data.articleList.length) {
                    articles.value = data.data.articleList;
                }
            });
        }
        vendor.s(function () {
            getTopic();
        });
        return { topic: topic };
    },
    methods: {
        addArticle: function () {
            SceneManager.instance.loadScene('Edit', { topicId: this.topic._id });
        }
    }
});

const _hoisted_1$5 = { class: "through-wrapper" };
const _hoisted_2$5 = /*#__PURE__*/vendor.e("div", { class: "main-title" }, "穿行", -1 /* HOISTED */);
const _hoisted_3$5 = { class: "topic-title" };
const _hoisted_4$2 = /*#__PURE__*/vendor.f("添加路程");

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vendor.a("router-link");

  return (vendor.o(), vendor.b("section", _hoisted_1$5, [
    _hoisted_2$5,
    vendor.e("div", _hoisted_3$5, "目的地#" + vendor.t(_ctx.topic.title) + "#", 1 /* TEXT */),
    vendor.e(_component_router_link, {
      class: "main-btn",
      to: {name:'scene-edit', query: {'topicId': _ctx.topic._id}}
    }, {
      default: vendor.l(() => [
        _hoisted_4$2
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["to"])
  ]))
}

script$5.render = render$5;
script$5.__file = "client/src/scenes/Through.vue";

var script$4 = vendor.d({
    name: 'Edit',
    props: {},
    data: function () {
        return {
            title: '',
            user: ''
        };
    },
    setup: function (props) {
        vendor.r([]);
        var editor;
        var content = vendor.r('');
        vendor.s(function () {
            editor = new vendor.E('#editor');
            console.log(editor.config);
            editor.config.menus = [
                'head',
                'bold',
                'list',
                'justify',
                'undo', // 撤销
            ];
            editor.config.onchange = function (html) {
                content.value = html;
            };
            editor.create();
        });
        return { editor: editor, content: content };
    },
    methods: {
        onEditorBlur: function () { },
        onEditorFocus: function () { },
        onEditorReady: function () { },
        submit: function () {
            this.$cpop({ title: '', desc: '' });
            if (!this.title) {
                return;
            }
            if (!this.user) {
                return;
            }
        }
    },
});

const _hoisted_1$4 = { class: "edit-wrapper" };
const _hoisted_2$4 = /*#__PURE__*/vendor.e("div", { class: "main-title" }, "添加路程", -1 /* HOISTED */);
const _hoisted_3$4 = /*#__PURE__*/vendor.e("div", {
  class: "editor",
  id: "editor"
}, null, -1 /* HOISTED */);

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vendor.o(), vendor.b("section", _hoisted_1$4, [
    _hoisted_2$4,
    _hoisted_3$4,
    vendor.w(vendor.e("input", {
      type: "text",
      name: "title",
      id: "title",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.title = $event)),
      placeholder: "请输入标题"
    }, null, 512 /* NEED_PATCH */), [
      [vendor.x, _ctx.title]
    ]),
    vendor.w(vendor.e("input", {
      type: "text",
      name: "user",
      id: "user",
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (_ctx.user = $event)),
      placeholder: "请输入昵称"
    }, null, 512 /* NEED_PATCH */), [
      [vendor.x, _ctx.user]
    ]),
    vendor.e("div", {
      class: "sub-btn",
      onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.submit && _ctx.submit(...args)))
    }, "提交路程")
  ]))
}

script$4.render = render$4;
script$4.__file = "client/src/scenes/Edit.vue";

var script$3 = vendor.d({
    name: 'manager',
    props: {},
    components: {},
    data: function () {
        return {
            topicInput: { title: '', desc: '' },
            secret: '',
            topicDialogVisible: false,
        };
    },
    setup: function () {
        var articles = vendor.r([]);
        var dialogs = vendor.r([]);
        var topics = vendor.r([]);
        var curTab = vendor.r('article');
        function getData(key) {
            var dataApi, dataSet, oriKey;
            if (key == 'article') {
                dataApi = m.article.getArticleList;
                dataSet = articles;
                oriKey = ['articleList'];
            }
            else if (key == 'dialog') {
                dataApi = m.dialog.getDialogList;
                dataSet = dialogs;
                oriKey = ['dialogList'];
            }
            else {
                dataApi = m.topic.getTopicList;
                dataSet = topics;
                oriKey = ['topicList'];
            }
            dataApi().then(function (data) {
                console.log(data);
                dataSet.value = data.data[oriKey];
            });
        }
        vendor.s(function () {
            getData(curTab.value);
        });
        return { articles: articles, dialogs: dialogs, curTab: curTab, getData: getData, topics: topics };
    },
    methods: {
        changeTab: function (key) {
            this.curTab = key;
            this.getData(key);
        },
        addTopic: function () {
            m.topic
                .addTopic({
                input: Object.assign({ secret: this.secret, state: state.online }, this.topicInput),
            })
                .then(function (data) {
                console.log(data);
            });
        },
    },
});

const _hoisted_1$3 = { class: "manager-wrapper" };
const _hoisted_2$3 = /*#__PURE__*/vendor.f("让我来管理下这些没人看的东西");
const _hoisted_3$3 = /*#__PURE__*/vendor.f("话题列表");
const _hoisted_4$1 = /*#__PURE__*/vendor.f("文章列表");
const _hoisted_5$1 = /*#__PURE__*/vendor.f("对话列表");
const _hoisted_6$1 = /*#__PURE__*/vendor.f("看看详情 ");
const _hoisted_7$1 = /*#__PURE__*/vendor.f("添加话题");
const _hoisted_8 = /*#__PURE__*/vendor.f("看看详情 ");
const _hoisted_9 = {
  key: 2,
  class: "dialog-manager"
};
const _hoisted_10 = /*#__PURE__*/vendor.f("看看详情 ");
const _hoisted_11 = { class: "dialog-footer" };
const _hoisted_12 = /*#__PURE__*/vendor.f("取 消");
const _hoisted_13 = /*#__PURE__*/vendor.f("确 定");

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_header = vendor.a("el-header");
  const _component_el_input = vendor.a("el-input");
  const _component_el_button = vendor.a("el-button");
  const _component_el_col = vendor.a("el-col");
  const _component_router_link = vendor.a("router-link");
  const _component_el_row = vendor.a("el-row");
  const _component_el_card = vendor.a("el-card");
  const _component_el_main = vendor.a("el-main");
  const _component_el_container = vendor.a("el-container");
  const _component_el_dialog = vendor.a("el-dialog");

  return (vendor.o(), vendor.b("section", _hoisted_1$3, [
    vendor.e(_component_el_container, null, {
      default: vendor.l(() => [
        vendor.e(_component_el_header, null, {
          default: vendor.l(() => [
            _hoisted_2$3
          ]),
          _: 1 /* STABLE */
        }),
        vendor.e(_component_el_input, {
          modelValue: _ctx.secret,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.secret = $event)),
          placeholder: "请开始吟唱咒语"
        }, null, 8 /* PROPS */, ["modelValue"]),
        vendor.e(_component_el_main, null, {
          default: vendor.l(() => [
            vendor.e(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = $event => (_ctx.changeTab('topic')))
            }, {
              default: vendor.l(() => [
                _hoisted_3$3
              ]),
              _: 1 /* STABLE */
            }),
            vendor.e(_component_el_button, {
              onClick: _cache[3] || (_cache[3] = $event => (_ctx.changeTab('article')))
            }, {
              default: vendor.l(() => [
                _hoisted_4$1
              ]),
              _: 1 /* STABLE */
            }),
            vendor.e(_component_el_button, {
              onClick: _cache[4] || (_cache[4] = $event => (_ctx.changeTab('dialog')))
            }, {
              default: vendor.l(() => [
                _hoisted_5$1
              ]),
              _: 1 /* STABLE */
            }),
            (_ctx.curTab == 'article')
              ? (vendor.o(), vendor.b(_component_el_card, {
                  key: 0,
                  class: "article-manager"
                }, {
                  default: vendor.l(() => [
                    (vendor.o(true), vendor.b(vendor.F, null, vendor.y(_ctx.articles, (item) => {
                      return (vendor.o(), vendor.b(_component_el_row, {
                        key: item._id
                      }, {
                        default: vendor.l(() => [
                          vendor.e(_component_el_col, { span: 8 }, {
                            default: vendor.l(() => [
                              vendor.f(vendor.t(item.user), 1 /* TEXT */)
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1024 /* DYNAMIC_SLOTS */),
                          vendor.e(_component_el_col, { span: 8 }, {
                            default: vendor.l(() => [
                              vendor.f(vendor.t(item.context), 1 /* TEXT */)
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1024 /* DYNAMIC_SLOTS */),
                          vendor.e(_component_el_col, { span: 8 }, {
                            default: vendor.l(() => [
                              vendor.e(_component_router_link, {
                                to: {
                  name: 'manager-article-detail',
                  params: { id: item._id },
                }
                              }, {
                                default: vendor.l(() => [
                                  vendor.e(_component_el_button, { type: "primary" }, {
                                    default: vendor.l(() => [
                                      _hoisted_6$1
                                    ]),
                                    _: 1 /* STABLE */
                                  })
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1024 /* DYNAMIC_SLOTS */)
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1024 /* DYNAMIC_SLOTS */))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _: 1 /* STABLE */
                }))
              : vendor.k("v-if", true),
            (_ctx.curTab == 'topic')
              ? (vendor.o(), vendor.b(_component_el_card, {
                  key: 1,
                  class: "topic-manager"
                }, {
                  default: vendor.l(() => [
                    vendor.e(_component_el_button, {
                      type: "primary",
                      onClick: _cache[5] || (_cache[5] = $event => (_ctx.topicDialogVisible = true))
                    }, {
                      default: vendor.l(() => [
                        _hoisted_7$1
                      ]),
                      _: 1 /* STABLE */
                    }),
                    (vendor.o(true), vendor.b(vendor.F, null, vendor.y(_ctx.topics, (item) => {
                      return (vendor.o(), vendor.b(_component_el_row, {
                        key: item._id
                      }, {
                        default: vendor.l(() => [
                          vendor.e(_component_el_col, { span: 8 }, {
                            default: vendor.l(() => [
                              vendor.f(vendor.t(item.title), 1 /* TEXT */)
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1024 /* DYNAMIC_SLOTS */),
                          vendor.e(_component_el_col, { span: 8 }, {
                            default: vendor.l(() => [
                              vendor.f(vendor.t(item.desc), 1 /* TEXT */)
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1024 /* DYNAMIC_SLOTS */),
                          vendor.e(_component_el_col, { span: 8 }, {
                            default: vendor.l(() => [
                              vendor.e(_component_el_button, { type: "primary" }, {
                                default: vendor.l(() => [
                                  _hoisted_8
                                ]),
                                _: 1 /* STABLE */
                              })
                            ]),
                            _: 1 /* STABLE */
                          })
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1024 /* DYNAMIC_SLOTS */))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _: 1 /* STABLE */
                }))
              : vendor.k("v-if", true),
            (_ctx.curTab == 'dialog')
              ? (vendor.o(), vendor.b("div", _hoisted_9, [
                  (vendor.o(true), vendor.b(vendor.F, null, vendor.y(_ctx.dialogs, (item) => {
                    return (vendor.o(), vendor.b(_component_el_row, {
                      key: item._id
                    }, {
                      default: vendor.l(() => [
                        vendor.e(_component_el_col, { span: 8 }, {
                          default: vendor.l(() => [
                            vendor.f(vendor.t(item.user), 1 /* TEXT */)
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1024 /* DYNAMIC_SLOTS */),
                        vendor.e(_component_el_col, { span: 8 }, {
                          default: vendor.l(() => [
                            vendor.f(vendor.t(item.context), 1 /* TEXT */)
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1024 /* DYNAMIC_SLOTS */),
                        vendor.e(_component_el_col, { span: 8 }, {
                          default: vendor.l(() => [
                            vendor.e(_component_router_link, {
                              to: {
                  name: 'manager-dialog-detail',
                  params: { id: item._id },
                }
                            }, {
                              default: vendor.l(() => [
                                vendor.e(_component_el_button, { type: "primary" }, {
                                  default: vendor.l(() => [
                                    _hoisted_10
                                  ]),
                                  _: 1 /* STABLE */
                                })
                              ]),
                              _: 2 /* DYNAMIC */
                            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1024 /* DYNAMIC_SLOTS */)
                      ]),
                      _: 2 /* DYNAMIC */
                    }, 1024 /* DYNAMIC_SLOTS */))
                  }), 128 /* KEYED_FRAGMENT */))
                ]))
              : vendor.k("v-if", true)
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    vendor.e(_component_el_dialog, {
      title: "添加话题",
      modelValue: _ctx.topicDialogVisible,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (_ctx.topicDialogVisible = $event)),
      width: "30%"
    }, {
      footer: vendor.l(() => [
        vendor.e("span", _hoisted_11, [
          vendor.e(_component_el_button, {
            onClick: _cache[8] || (_cache[8] = $event => (_ctx.topicDialogVisible = false))
          }, {
            default: vendor.l(() => [
              _hoisted_12
            ]),
            _: 1 /* STABLE */
          }),
          vendor.e(_component_el_button, {
            type: "primary",
            onClick: _ctx.addTopic
          }, {
            default: vendor.l(() => [
              _hoisted_13
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"])
        ])
      ]),
      default: vendor.l(() => [
        vendor.e(_component_el_row, null, {
          default: vendor.l(() => [
            vendor.e(_component_el_col, null, {
              default: vendor.l(() => [
                vendor.e(_component_el_input, {
                  modelValue: _ctx.topicInput.title,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (_ctx.topicInput.title = $event)),
                  placeholder: "输入一个标题"
                }, null, 8 /* PROPS */, ["modelValue"])
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        }),
        vendor.e(_component_el_row, null, {
          default: vendor.l(() => [
            vendor.e(_component_el_col, null, {
              default: vendor.l(() => [
                vendor.e(_component_el_input, {
                  modelValue: _ctx.topicInput.desc,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (_ctx.topicInput.desc = $event)),
                  placeholder: "输入一个介绍"
                }, null, 8 /* PROPS */, ["modelValue"])
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"])
  ]))
}

script$3.render = render$3;
script$3.__file = "client/src/managers/index.vue";

var script$2 = vendor.d({
    name: 'manager',
    props: {},
    components: {},
    setup: function () {
        var routes = vendor.u();
        var title = vendor.r('');
        var context = vendor.r('');
        var user = vendor.r('');
        var state$1 = vendor.r(0);
        var secret = vendor.r('');
        var stateText = vendor.c(function () {
            for (var key in state) {
                if (state[key] == state$1.value) {
                    return key;
                }
            }
            return '暂无';
        });
        function getData(data) {
            title.value = data.title;
            context.value = data.context;
            user.value = data.user;
            state$1.value = data.state;
        }
        vendor.s(function () {
            m.article
                .getArticleDetail({ id: routes.params.id })
                .then(function (data) {
                getData(data.data.articleDetail);
            });
        });
        return { title: title, context: context, user: user, state: state$1, stateText: stateText, secret: secret, getData: getData };
    },
    methods: {
        changeState: function (state) {
            var _this = this;
            var id = this.$route.params.id;
            var loadingInstance = vendor.W.service({ fullscreen: true });
            m.article
                .updateArticle({
                input: { id: id, state: state, secret: this.secret },
            })
                .then(function (data) {
                _this.getData(data.data.updateArticle);
                loadingInstance.close();
            }).catch(function (err) {
                loadingInstance.close();
            });
        },
        publish: function () {
            this.changeState(state.online);
        },
        del: function () {
            this.changeState(state.offline);
        },
    },
});

const _hoisted_1$2 = { class: "manager-wrapper" };
const _hoisted_2$2 = /*#__PURE__*/vendor.f("发布文章");
const _hoisted_3$2 = /*#__PURE__*/vendor.f("删除文章");

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = vendor.a("el-input");
  const _component_el_header = vendor.a("el-header");
  const _component_el_col = vendor.a("el-col");
  const _component_el_row = vendor.a("el-row");
  const _component_el_card = vendor.a("el-card");
  const _component_el_button = vendor.a("el-button");
  const _component_el_main = vendor.a("el-main");
  const _component_el_container = vendor.a("el-container");

  return (vendor.o(), vendor.b("section", _hoisted_1$2, [
    vendor.e(_component_el_container, null, {
      default: vendor.l(() => [
        vendor.e(_component_el_input, {
          modelValue: _ctx.secret,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.secret = $event)),
          placeholder: "请开始吟唱咒语"
        }, null, 8 /* PROPS */, ["modelValue"]),
        vendor.e(_component_el_header, null, {
          default: vendor.l(() => [
            vendor.f(vendor.t(_ctx.title), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }),
        vendor.e(_component_el_main, null, {
          default: vendor.l(() => [
            vendor.e(_component_el_row, null, {
              default: vendor.l(() => [
                vendor.e(_component_el_col, { span: 12 }, {
                  default: vendor.l(() => [
                    vendor.f(vendor.t(_ctx.user), 1 /* TEXT */)
                  ]),
                  _: 1 /* STABLE */
                }),
                vendor.e(_component_el_col, { span: 12 }, {
                  default: vendor.l(() => [
                    vendor.f(vendor.t(_ctx.stateText), 1 /* TEXT */)
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              _: 1 /* STABLE */
            }),
            vendor.e(_component_el_card, null, {
              default: vendor.l(() => [
                vendor.e("div", { innerHTML: _ctx.context }, null, 8 /* PROPS */, ["innerHTML"])
              ]),
              _: 1 /* STABLE */
            }),
            vendor.e(_component_el_button, {
              type: "warning",
              onClick: _ctx.publish
            }, {
              default: vendor.l(() => [
                _hoisted_2$2
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onClick"]),
            vendor.e(_component_el_button, {
              type: "danger",
              onClick: _ctx.del
            }, {
              default: vendor.l(() => [
                _hoisted_3$2
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onClick"])
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

script$2.render = render$2;
script$2.__file = "client/src/managers/articleDetail.vue";

var script$1 = vendor.d({
    name: 'manager',
    props: {},
    components: {},
    setup: function () {
        var articles = vendor.r([]);
        vendor.s(function () {
            console.log(2333222);
            m.article.getArticleList().then(function (data) {
                console.log(data);
                articles.value = data.data.articleList;
            });
        });
        return { articles: articles };
    },
});

const _withId = /*#__PURE__*/vendor.n("data-v-485cc3a1");

vendor.p("data-v-485cc3a1");
const _hoisted_1$1 = { class: "manager-wrapper" };
const _hoisted_2$1 = /*#__PURE__*/vendor.f("让我来管理下这些没人看的东西");
const _hoisted_3$1 = /*#__PURE__*/vendor.f("文章列表");
const _hoisted_4 = /*#__PURE__*/vendor.f("对话列表");
const _hoisted_5 = /*#__PURE__*/vendor.f("看看详情 ");
const _hoisted_6 = { class: "dialog-manager" };
const _hoisted_7 = /*#__PURE__*/vendor.f("看看详情 ");
vendor.m();

const render$1 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_el_header = vendor.a("el-header");
  const _component_el_button = vendor.a("el-button");
  const _component_el_col = vendor.a("el-col");
  const _component_router_link = vendor.a("router-link");
  const _component_el_row = vendor.a("el-row");
  const _component_el_card = vendor.a("el-card");
  const _component_el_main = vendor.a("el-main");
  const _component_el_container = vendor.a("el-container");

  return (vendor.o(), vendor.b("section", _hoisted_1$1, [
    vendor.e(_component_el_container, null, {
      default: _withId(() => [
        vendor.e(_component_el_header, null, {
          default: _withId(() => [
            _hoisted_2$1
          ]),
          _: 1 /* STABLE */
        }),
        vendor.e(_component_el_main, null, {
          default: _withId(() => [
            vendor.e(_component_el_button, null, {
              default: _withId(() => [
                _hoisted_3$1
              ]),
              _: 1 /* STABLE */
            }),
            vendor.e(_component_el_button, null, {
              default: _withId(() => [
                _hoisted_4
              ]),
              _: 1 /* STABLE */
            }),
            vendor.e(_component_el_card, { class: "article-manager" }, {
              default: _withId(() => [
                (vendor.o(true), vendor.b(vendor.F, null, vendor.y(_ctx.articles, (item) => {
                  return (vendor.o(), vendor.b(_component_el_row, {
                    key: item._id
                  }, {
                    default: _withId(() => [
                      vendor.e(_component_el_col, { span: 8 }, {
                        default: _withId(() => [
                          vendor.f(vendor.t(item.user), 1 /* TEXT */)
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1024 /* DYNAMIC_SLOTS */),
                      vendor.e(_component_el_col, { span: 8 }, {
                        default: _withId(() => [
                          vendor.f(vendor.t(item.context), 1 /* TEXT */)
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1024 /* DYNAMIC_SLOTS */),
                      vendor.e(_component_el_col, { span: 8 }, {
                        default: _withId(() => [
                          vendor.e(_component_router_link, { to: { name: 'manager-article-detail' } }, {
                            default: _withId(() => [
                              vendor.e(_component_el_button, { type: "primary" }, {
                                default: _withId(() => [
                                  _hoisted_5
                                ]),
                                _: 1 /* STABLE */
                              })
                            ]),
                            _: 1 /* STABLE */
                          })
                        ]),
                        _: 1 /* STABLE */
                      })
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */))
                }), 128 /* KEYED_FRAGMENT */))
              ]),
              _: 1 /* STABLE */
            }),
            vendor.e("div", _hoisted_6, [
              (vendor.o(true), vendor.b(vendor.F, null, vendor.y(_ctx.dialogs, (item) => {
                return (vendor.o(), vendor.b(_component_el_row, {
                  key: item._id
                }, {
                  default: _withId(() => [
                    vendor.e(_component_el_col, { span: 8 }, {
                      default: _withId(() => [
                        vendor.f(vendor.t(item.user), 1 /* TEXT */)
                      ]),
                      _: 2 /* DYNAMIC */
                    }, 1024 /* DYNAMIC_SLOTS */),
                    vendor.e(_component_el_col, { span: 8 }, {
                      default: _withId(() => [
                        vendor.f(vendor.t(item.context), 1 /* TEXT */)
                      ]),
                      _: 2 /* DYNAMIC */
                    }, 1024 /* DYNAMIC_SLOTS */),
                    vendor.e(_component_el_col, { span: 8 }, {
                      default: _withId(() => [
                        vendor.e(_component_router_link, { to: { name: 'manager-dialog-detail' } }, {
                          default: _withId(() => [
                            vendor.e(_component_el_button, { type: "primary" }, {
                              default: _withId(() => [
                                _hoisted_7
                              ]),
                              _: 1 /* STABLE */
                            })
                          ]),
                          _: 1 /* STABLE */
                        })
                      ]),
                      _: 1 /* STABLE */
                    })
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    })
  ]))
});

script$1.render = render$1;
script$1.__scopeId = "data-v-485cc3a1";
script$1.__file = "client/src/managers/dialogDetail.vue";

var routes = [
    {
        path: "/",
        name: "scene",
        redirect: '/start',
        children: [
            { path: 'start', name: 'scene-start', component: script$7 },
            { path: 'story', name: 'scene-story', component: script$6 },
            { path: 'through', name: 'scene-through', component: script$5 },
            { path: 'edit', name: 'scene-edit', component: script$4 }
        ],
        component: script$8,
    },
    {
        path: "/manager",
        name: "manager",
        component: script$3,
    },
    {
        path: "/manager/detail/article/:id",
        name: "manager-article-detail",
        component: script$2,
    },
    {
        path: "/manager/detail/dialog/:id",
        name: "manager-dialog-detail",
        component: script$1,
    },
];

var components = [
    vendor.Y,
    vendor.Z,
    vendor.z,
    vendor.B,
    vendor.C,
    vendor.D,
    vendor.S,
    vendor.G,
    vendor.H,
    vendor.X,
    vendor.J,
    vendor.K,
    vendor.L,
    vendor.M,
    vendor.N,
    vendor.O,
    vendor.P,
    vendor.Q,
    vendor.R,
    vendor.T,
    vendor.U,
    vendor.V,
    vendor.$,
    vendor.a0,
    vendor.a1,
    vendor.a2,
    vendor.a3,
    vendor.a4,
    vendor.a5,
];
var plugins = [
    vendor.W,
    vendor.h,
];
var elementPlus = {
    components: components,
    plugins: plugins
};

var script = vendor.d({
    name: 'CommonPopup',
    props: {
        title: { type: String, default: '提示' },
        desc: { type: String, default: '' }
    },
    data: function () {
        return {
            visible: true
        };
    },
    setup: function (props) {
    },
    methods: {
        closePop: function () {
            this.visible = false;
        }
    }
});

const _hoisted_1 = { class: "common-popup" };
const _hoisted_2 = { class: "popup-title" };
const _hoisted_3 = { class: "popup-desc" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vendor.w((vendor.o(), vendor.b("div", _hoisted_1, [
    vendor.e("div", _hoisted_2, vendor.t(_ctx.title), 1 /* TEXT */),
    vendor.e("div", _hoisted_3, vendor.t(_ctx.desc), 1 /* TEXT */),
    vendor.e("div", {
      class: "popup-btn",
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.closePop && _ctx.closePop(...args)))
    }, "关闭")
  ], 512 /* NEED_PATCH */)), [
    [vendor.v, _ctx.visible]
  ])
}

script.render = render;
script.__file = "client/src/plugins/c-popup/index.vue";

var CommonPop = function (options) {
    var container = document.getElementById('commonPop') || document.createElement('div');
    container.id = 'commonPop';
    var vm = vendor.e(script, options);
    vendor.a6(vm, container);
    document.body.appendChild(container);
};
var Cpop = {
    install: function (app) {
        app.config.globalProperties.$cpop = CommonPop;
    }
};

function initApp() {
    return vendor.i(this, void 0, void 0, function () {
        var router, app;
        return vendor.j(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, m.init()];
                case 1:
                    _a.sent();
                    router = vendor.a7({ routes: routes, history: vendor.a8() });
                    app = vendor.a9(script$9).use(router);
                    elementPlus.components.forEach(function (component) {
                        app.component(component.name, component);
                    });
                    elementPlus.plugins.forEach(function (plugin) {
                        app.use(plugin);
                    });
                    app.use(Cpop);
                    // app.use(VueQuillEditor)
                    app.mount('#app');
                    return [2 /*return*/];
            }
        });
    });
}
initApp();
})();
