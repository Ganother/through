import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article extends Document {
    @Prop()
    user: string;

    @Prop()
    context: string;

    @Prop()
    title: string;

    @Prop()
    topicID: string;

    @Prop()
    state: number

    @Prop({
        default: Date.now
    })
    time?: Date;


}

export const ArticleSchema = SchemaFactory.createForClass(Article);
