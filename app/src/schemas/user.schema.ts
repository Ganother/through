import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
    @Prop()
    name: string;

    @Prop()
    level: number;

    @Prop({
        default: Date.now,
        type: Date
    })
    time?: Date
}

export const UserSchema = SchemaFactory.createForClass(User);
