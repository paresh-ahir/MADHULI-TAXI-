import dns from "dns";
import { MongoClient } from "mongodb";

const globalCache = globalThis;

const options = {
  // One Next.js process for this taxi desk. A page render and an
  // enquiry rarely overlap, so 10 connections cover a burst without
  // holding a large idle pool on Atlas.
  maxPoolSize: 10,
  minPoolSize: 0,
  serverSelectionTimeoutMS: 8000,
};

async function connectClient(uri) {
  const client = new MongoClient(uri, options);
  try {
    return await client.connect();
  } catch (error) {
    await client.close().catch(() => {});
    const srvRefused = String(error && error.message).includes("querySrv");
    if (!srvRefused || dns.getServers().includes("8.8.8.8")) throw error;
    // Node on this Windows machine refuses the Atlas SRV lookup on the
    // system resolver. Public DNS resolves the same record.
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
    return new MongoClient(uri, options).connect();
  }
}

export function getClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is missing");
  if (!globalCache.__madhuliMongo) {
    globalCache.__madhuliMongo = connectClient(uri).catch((error) => {
      globalCache.__madhuliMongo = undefined;
      throw error;
    });
  }
  return globalCache.__madhuliMongo;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db(process.env.MONGODB_DB || "madhuli");
}
