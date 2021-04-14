import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Topic, TopicDocument } from '../schemas/topic.schema'
import { Model } from 'mongoose';
import { TopicInput } from '../../../graphql'
@Injectable()
export class TopicService {
  constructor(@InjectModel('Topic') private topicModel: Model<TopicDocument>) {

  }
  async getTopicDetail(id: string): Promise<Topic> {
    return await this.topicModel.findById(id)
  }

  async getTopicList(state: number): Promise<Topic[]> {
    const query: any = {}
    if (!isNaN(state)) {
      query.state = state
    }
    return await this.topicModel.find(query).exec()
  }

  async addTopic(topic: TopicInput): Promise<Topic> {
    return await this.topicModel.create(topic)
  }

  async updateTopic(topic: TopicInput): Promise<Topic> {
    const updated = await this.topicModel.updateOne({ _id: topic._id }, topic)
    if (updated) {
      const list = await this.topicModel.find({ _id: topic._id }).exec()
      if (list.length) {
        return list[0]
      } else {
        return null
      }
    } else {
      return null
    }
  }
}
