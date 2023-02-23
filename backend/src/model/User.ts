import mongoose, { Document, Model, Schema  } from "mongoose"

export class UserAttributes {
    name: string
    surename: string
    email: string
    password: string
    age: number
    weight: number
    goal: string
    finishedExercices: number
    daysCount: number
    subscription: string
    created_at?: Date
    updated_at?: Date
    confirmation_token?: number
}

export type UserDocument = Document & UserAttributes

type UserModel = Model<UserDocument>

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        surename: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        goal:{
            type: String,
            required: true
        },
        finishedExercices:{
            type: Number,
            required: true
        },
        daysCount:{
            type: Number,
            required: true
        },
        subscription:{
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            required: true
        },
        updated_at: {
            type: Date,
            required: false
        },
        confirmation_token: {
            type: Number,
            required: false
        }
    }
)
export default mongoose.model<UserDocument, UserModel>("Users", UserSchema)