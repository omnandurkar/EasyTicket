import { model, Schema } from "mongoose";

const BookplaneSchema = new Schema({
    from : String,
    to :String,
    date : Date
    
})

const Bookplane = model("Bookplane", BookplaneSchema);

export default Bookplane;