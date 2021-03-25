import mongoose from 'mongoose';

const {Schema} = mongoose;

const workout = new Schema({
    username: String,
    
    notes: String,
})