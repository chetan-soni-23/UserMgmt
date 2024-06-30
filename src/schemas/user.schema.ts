import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as mongooseUniqueValidator from 'mongoose-unique-validator';
import * as validator from 'validator';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  
  @Prop({type: mongoose.Schema.Types.ObjectId, auto: true})
  _id: string;
  @Prop({ required: true, minlength: 3 })
  name: string;

  @Prop({
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: 'Invalid email address',
    },
  })
  email: string;

  @Prop({
    required: true,
    minlength: 4,
    maxlength: 1000,
    validate: {
      validator: (value: string) =>
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value),
      message: 'password too weak',
    },
  })
  password: string;

  @Prop({ required: false })
  phone?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongooseUniqueValidator);
