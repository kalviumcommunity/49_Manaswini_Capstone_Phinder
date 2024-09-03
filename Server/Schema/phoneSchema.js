const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const priceSchema = new mongoose.Schema({
  amazon: {
    "256GB": { type: Number, required: true },
    "512GB": { type: Number, required: true },
  },
  flipkart: {
    "256GB": { type: Number, required: true },
    "512GB": { type: Number, required: true },
  },
  company: {
    "256GB": { type: Number, required: true },
    "512GB": { type: Number, required: true },
  },
});

const nonTechSpecsSchema = new mongoose.Schema({
  videography: { type: Boolean, default: false },
  goodDisplay: { type: Boolean, default: false },
  goodBatteryLife: { type: Boolean, default: false },
  waterResistance: { type: Boolean, default: false },
  greatZoom: { type: Boolean, default: false },
  noteTakingWithSylus: { type: Boolean, default: false },
  multitasking: { type: Boolean, default: false },
  fastCharging: { type: Boolean, default: false },
  memoryBackup: { type: Boolean, default: false },
});

const smartphoneSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  brand: { type: String },
  model: { type: String },
  ram: { type: [String] },
  rom: { type: [String] },
  storage: { type: [String] },
  colors: { type: [colorSchema] },
  os: { type: String },
  prices: { type: priceSchema },
  nonTechSpecs: { type: nonTechSpecsSchema },
});

const Smartphone = mongoose.model('Smartphone', smartphoneSchema);

module.exports = Smartphone;
