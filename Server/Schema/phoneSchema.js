const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name: String,
  image: String
});

const priceSchema = new Schema({
  amazon: {
    '128GB': String,
    '256GB': String
  },
  flipkart: {
    '128GB': String,
    '256GB': String
  },
  company: {
    '128GB': String,
    '256GB': String
  }
});

const nonTechSpecsSchema = new Schema({
  videography: Boolean,
  goodDisplay: Boolean,
  GoodBatteryLife: Boolean,
  waterResistance: Boolean,
  GreatZoom: Boolean,
  NoteTakingWithSylus: Boolean,
  Multitasking: Boolean,
  FastCharging: Boolean,
  MemoryBackup: Boolean
});

const phoneSchema = new Schema({
  _id: Schema.Types.ObjectId,
  brand: String,
  model: String,
  ram: [String],
  rom: [String],
  storage: [String],
  colors: [colorSchema],
  os: String,
  prices: [priceSchema],
  nonTechSpecs: [nonTechSpecsSchema]
});

const Phone = mongoose.model('Phone', phoneSchema);