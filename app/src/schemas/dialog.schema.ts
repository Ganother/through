import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DialogDocument = Dialog & Document;

@Schema()
export class Dialog extends Document {
  @Prop()
  level: number;

  @Prop([raw({
    name: {type: String},
    text: {type: String}
  })])
  context: Record<string, any>[];

  @Prop([String])
  charactor: string[]
}

export const DialogSchema = SchemaFactory.createForClass(Dialog);
