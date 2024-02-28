import mongoose from "mongoose";

const {Schema} = mongoose

const evenSchema = new Schema({
    startDate: String,
    endDate: String,
    startTime:String,
    endTime:String,
    location:String,
    title:String,
    img:String,
    desc:String,
    contactPerson:String,
    contactPersonEmail:String,
    images:[{
        type:String
    }]
},{timestamps:true})

export const Event = mongoose.models.events || mongoose.model('events',evenSchema)