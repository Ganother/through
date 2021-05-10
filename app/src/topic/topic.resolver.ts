import {
  Args,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { TopicService } from './topic.service'
import { Topic, TopicInput } from '../../../graphql'
import { auth } from '../middleware/auth'
@Resolver()
export class TopicResolver {
  constructor(
      private readonly topicService: TopicService
  ) { }

  @Query('topicDetail')
  async getDetail(@Args('id') id: string) {
      return this.topicService.getTopicDetail(id)
  }

  @Query('topicList')
  async getList(@Args('state') state: number) {
      return this.topicService.getTopicList(state)
  }


  @Mutation('addTopic')
  @auth()
  async addTopic(@Args('input') Topic: TopicInput) {
      return this.topicService.addTopic(Topic)
  }


  @Mutation('updateTopic')
  @auth()
  async updateTopic(@Args('input') Topic: TopicInput) {
      return this.topicService.updateTopic(Topic)
  }
}