// models/MensKurta.js
import mongoose from 'mongoose';

const sizeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }
});

const mensKurtaSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  hoverImageUrl: { type: String }, // Optional attribute
  brand: { type: String, required: true },
  title: { type: String, required: true },
  color: { type: String, required: true },
  discountedPrice: { type: Number, required: true },
  price: { type: Number, required: true },
  discountPercent: { type: Number, required: true },
  size: [sizeSchema],
  quantity: { type: Number, required: true },
  topLevelCategory: { type: String, required: true },
  secondLevelCategory: { type: String, required: true },
  thirdLevelCategory: { type: String, required: true },
  description: { type: String, required: true }
});

const MensKurta = mongoose.model('MensKurta', mensKurtaSchema);

export default MensKurta;
