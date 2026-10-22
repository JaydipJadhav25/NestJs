import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { userRoles } from '../../../user.types.js';

// this is class of document types
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true, unique: true })
    email: string;
    @Prop({ required: true })
    password: string;
    @Prop({ default: userRoles.Student })
    roles: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
