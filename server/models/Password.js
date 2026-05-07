import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
  website: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model('Password', passwordSchema);
