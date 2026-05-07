import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const signToken = (user) => jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ message: 'All fields are required' });
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'User already exists' });
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed });
  return res.status(201).json({ token: signToken(user), user: { id: user._id, username: user.username, email: user.email } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) return res.status(401).json({ message: 'Invalid credentials' });
  return res.json({ token: signToken(user), user: { id: user._id, username: user.username, email: user.email } });
};
