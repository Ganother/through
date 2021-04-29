import {
    Args,
    Info,
    Mutation,
    Query,
    Resolver,
    Subscription,
} from '@nestjs/graphql';
import { ArticleService } from './article.service'
import { Article, ArticleInput } from '../../../graphql'
import { auth } from '../middleware/auth'
@Resolver()
export class ArticleResolver {
    constructor(
        private readonly articleService: ArticleService
    ) { }

    @Query('articleDetail')
    async getDetail(@Args('id') id: string, @Args('state') state: number) {
        return this.articleService.getArticle(state, id)
    }

    @Query('articleList')
    async getList(@Args('state') state: number, @Args('topicID') topicID: string) {
        return this.articleService.getArticleList(state, topicID)
    }


    @Mutation('addArticle')
    @auth({errorPass: true})
    async addArticle(@Args('input') article: ArticleInput) {
        return this.articleService.addArticle(article)
    }

    @Mutation('updateArticle')
    @auth()
    async updateArticle(@Args('input') article: ArticleInput) {
        console.log(article)
        return this.articleService.updateArticle(article)
    }
}