import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  marks: { type: Number, required: true, min: 0, max: 100 },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
