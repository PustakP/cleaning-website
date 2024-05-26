import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  try {
    if (!uri) return console.log("No mongoDB URI");
    await mongoose.connect(uri)
  } catch (error) {
    console.log(`Error in ConnectDB catch: ${error}`);
    
  }
};

export default connectToDatabase;
