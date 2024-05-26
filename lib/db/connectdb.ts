import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const connectToDatabase = async () => {
	try {
		if (!uri) return console.log("No mongoDB URI");
		const connect = await mongoose.connect(uri);
		console.log(`MongoDB connect: ${connect.connection.host}`);
	} catch (error) {
		console.log(`Error in ConnectDB catch: ${error}`);
	}
};

export default connectToDatabase;
