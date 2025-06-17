// lib/mongoose.ts
import mongoose from 'mongoose';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Type the global object properly
const globalForMongoose = globalThis as unknown as {
  mongoose?: MongooseCache;
};

const cached: MongooseCache = globalForMongoose.mongoose || { conn: null, promise: null };

export const connectToDatabase = async (
  MONGODB_URI = process.env.MONGODB_URI
) => {
  if (cached.conn) {
    console.log('📦 Using existing database connection');
    return cached.conn;
  }

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI);

  cached.conn = await cached.promise;

  // Update the global cache
  globalForMongoose.mongoose = cached;

  console.log('🚀 Connected to MongoDB successfully');

  return cached.conn;
};