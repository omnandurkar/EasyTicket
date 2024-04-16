import { model, Schema } from "mongoose";

const bookingSchema = new Schema({
  name: String,
  phone: String,
  email :String,
  from : String,
  to : String,
  date : String,
  trainName: String
  // gender: String,
  // seat: String
})

const Booking = model("booking", bookingSchema);
export default Booking;

