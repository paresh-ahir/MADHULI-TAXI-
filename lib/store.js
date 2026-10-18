import fs from "fs";
import path from "path";
import { getDb } from "@/lib/mongo";

function clean(doc) {
  if (!doc) return null;
  const copy = { ...doc };
  delete copy._id;
  delete copy.pricePerKm;
  return copy;
}

let carsReady;

async function carsCollection() {
  const db = await getDb();
  const cars = db.collection("cars");
  if (!carsReady) {
    carsReady = (async () => {
      await cars.createIndex({ id: 1 }, { unique: true });
      if ((await cars.countDocuments()) > 0) return;
      const file = path.join(process.cwd(), "data", "cars.json");
      const seed = JSON.parse(fs.readFileSync(file, "utf8"));
      if (!Array.isArray(seed) || seed.length === 0) return;
      await cars.insertMany(seed.map((car) => {
        const doc = { ...car, _id: car.id };
        delete doc.pricePerKm;
        return doc;
      }));
    })().catch((error) => {
      carsReady = undefined;
      throw error;
    });
  }
  await carsReady;
  return cars;
}

let inquiriesReady;

async function inquiriesCollection() {
  const db = await getDb();
  const inquiries = db.collection("inquiries");
  if (!inquiriesReady) {
    inquiriesReady = inquiries.createIndex({ createdAt: -1 }).catch((error) => {
      inquiriesReady = undefined;
      throw error;
    });
  }
  await inquiriesReady;
  return inquiries;
}

export async function readCars() {
  const cars = await carsCollection();
  const docs = await cars.find({}).sort({ name: 1 }).toArray();
  return docs.map(clean);
}

export async function activeCars() {
  const cars = await readCars();
  return cars.filter((car) => car.active !== false);
}

export async function insertCar(car) {
  const cars = await carsCollection();
  await cars.insertOne({ ...car, _id: car.id });
  return car;
}

export async function replaceCar(id, car) {
  const cars = await carsCollection();
  const result = await cars.replaceOne({ id }, { ...car, _id: id, id });
  return result.matchedCount > 0;
}

export async function deleteCar(id) {
  const cars = await carsCollection();
  await cars.deleteOne({ id });
}

export async function readInquiries() {
  const inquiries = await inquiriesCollection();
  const docs = await inquiries.find({}).sort({ createdAt: -1 }).toArray();
  return docs.map(clean);
}

export async function insertInquiry(item) {
  const inquiries = await inquiriesCollection();
  await inquiries.insertOne({ ...item, _id: item.id });
  return item;
}

export async function updateInquiryStatus(id, status) {
  const inquiries = await inquiriesCollection();
  const result = await inquiries.findOneAndUpdate(
    { id },
    { $set: { status } },
    { returnDocument: "after" }
  );
  return clean(result);
}

export async function deleteInquiry(id) {
  const inquiries = await inquiriesCollection();
  await inquiries.deleteOne({ id });
}
