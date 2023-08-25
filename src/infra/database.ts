import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect('mongodb+srv://root:root@cluster0.ywbppom.mongodb.net/hero-tickets');
    console.log('Connect database success!');

  } catch (error) {
    console.log("Error connect mongo", error);
  }
}
