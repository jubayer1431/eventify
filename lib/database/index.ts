import mongoose from 'mongoose';
const cached = (global as any).mongoose || {conn: null, promise: null};
const MONGODB_URI = process.env.MONGODB_URI;
// create databaseConnection function
export async function databaseConnection() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable !'
    );
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: 'Eventify',
    };
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}