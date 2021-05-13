import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from '../schemas/article.schema'
import { Model } from 'mongoose';
import { ArticleInput } from '../../../graphql'
import stateConfig from '../../../config/state'
import { ApolloError } from 'apollo-server-errors';
@Injectable()
export class ArticleService {
    constructor(@InjectModel('Article') private articleModel: Model<ArticleDocument>) {

    }

    async getArticle(state: number, id: string) {
        const query: any = {}
        if (!isNaN(state)) {
            query.state = state
        }
        query._id = id
        const result = await this.articleModel.find(query).exec()
        if (result.length) {
            return result[0]
        } else {
            throw new ApolloError('没有这个id的文', '-3001')
        }
    }

    async getArticleList(state: number, topicID: string) {
        const query: any = {}
        if (!isNaN(state)) {
            query.state = state
        }
        if (topicID) {
            query.topicID = topicID
        }
        return await this.articleModel.find(query).sort({ time: 'desc' }).limit(10).exec()
    }

    async addArticle(input: any) {
        if (!input.title) {
            throw new ApolloError('请填写标题', '-2001')
        }
        if (!input.user) {
            throw new ApolloError('请填写昵称', '-2002')
        }
        if (input.secret && !input.checkedAuthFalse) {
            return await this.articleModel.create(Object.assign({ state: stateConfig.online }, input))
        } else {
            return await this.articleModel.create(Object.assign({ state: stateConfig.offline }, input))
        }
    }

    async updateArticle(input: ArticleInput) {
        const _id = input.id
        delete input.id
        const updated = await this.articleModel.updateOne({ _id }, input)
        if (updated) {
            return await this.articleModel.findById(_id).exec()

        } else {
            return null
        }
    }
}
