import mongoose from 'mongoose';

 const connectDB = async () => {
  //  Try Catch Error Handleing to mongodb database connection
  try {
    const collection = await mongoose.connect(
      `${process.env.DATABASE_URL}/webnuxtshop`
    );
    console.log(`Mongodb Connected : ${collection.connection.host}`);
  } catch (error) {
    console.log('Database Connection Faild', error);
    process.exit(1);
  }
};

export default connectDB