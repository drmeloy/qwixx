import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  wins: number;
  losses: number;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wins: { type: Number, required: true },
  losses: { type: Number, required: true }
});

export default mongoose.model<IUser>('User', userSchema);