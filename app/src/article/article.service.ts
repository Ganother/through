import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from '../schemas/article.schema'
import { Model } from 'mongoose';
import { ArticleInput } from '../../../graphql'

@Injectable()
export class ArticleService {
    constructor(@InjectModel('Article') private articleModel: Model<ArticleDocument>) {

    }

    async getArticle(id: string) {
        return await this.articleModel.findById(id)
    }

    async getArticleList(state: number, topicID: string) {
        const query: any = {}
        if (!isNaN(state)) {
          query.state = state
        }
        if(topicID){
            query.topicID = topicID
        }
        return await this.articleModel.find(query).sort({ time: 'desc' }).limit(10).exec()
    }

    async addArticle(input: ArticleInput) {
        return await this.articleModel.create(Object.assign({ state: 1 }, input))
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
