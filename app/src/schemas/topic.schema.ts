import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TopicDocument = Topic & Document;

@Schema()
export class Topic extends Document {
  @Prop()
  title: string;

  @Prop()
  desc: string;


  @Prop()
  state: number

  @Prop({
      default: Date.now
  })
  time?: Date;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
