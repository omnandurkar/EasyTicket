import { model, Schema } from "mongoose";

const BooktrainSchema = new Schema({
    from : String,
    to :String,
    date : Date
    
})

const BookTrain = model("BookTrain", BooktrainSchema);

export default BookTrain;