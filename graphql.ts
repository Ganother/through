
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface ArticleInput {
    id?: string;
    user?: string;
    context?: string;
    secret: string;
    title?: string;
    topicID?: string;
    state?: number;
}

export interface DialogItemInput {
    name?: string;
    text?: string;
}

export interface DialogInput {
    level: number;
    context: DialogItemInput[];
    charactor: string[];
    secret?: string;
}

export interface TopicInput {
    _id?: string;
    title?: string;
    desc?: string;
    state?: number;
    secret?: string;
}

export interface UserInput {
    name?: string;
}

export interface Article {
    _id?: string;
    user?: string;
    context?: string;
    title?: string;
    topicID?: string;
    state?: number;
}

export interface IQuery {
    articleDetail(id: string): Article | Promise<Article>;
    articleList(state?: number, topic?: string): Article[] | Promise<Article[]>;
    dialogDetail(level?: number): Dialog | Promise<Dialog>;
    dialogList(state?: number): Dialog[] | Promise<Dialog[]>;
    topicList(state?: number): Topic[] | Promise<Topic[]>;
    topicDetail(id?: string): Topic | Promise<Topic>;
    user(name: string): User | Promise<User>;
}

export interface IMutation {
    addArticle(input?: ArticleInput): Article | Promise<Article>;
    updateArticle(input?: ArticleInput): Article | Promise<Article>;
    addDialog(input?: DialogInput): Dialog | Promise<Dialog>;
    updateDialog(input?: DialogInput): Dialog | Promise<Dialog>;
    addTopic(input?: TopicInput): Topic | Promise<Topic>;
    updateTopic(input?: TopicInput): Topic | Promise<Topic>;
    createUser(name?: string): User | Promise<User>;
}

export interface Dialog {
    _id?: string;
    level?: number;
    context?: DialogItem[];
    charactor?: string[];
    state?: number;
}

export interface DialogItem {
    name?: string;
    text?: string;
}

export interface Topic {
    _id?: string;
    title?: string;
    desc?: string;
    state?: number;
}

export interface User {
    _id?: string;
    level?: number;
    name?: string;
}
