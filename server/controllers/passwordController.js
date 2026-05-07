import Password from '../models/Password.js';

export const addPassword = async (req, res) => {
  const { website, username, password } = req.body;
  if (!website || !username || !password) return res.status(400).json({ message: 'All fields are required' });
  const item = await Password.create({ website, username, password, userId: req.user.id });
  res.status(201).json(item);
};

export const getPasswords = async (req, res) => {
  const data = await Password.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(data);
};

export const deletePassword = async (req, res) => {
  const deleted = await Password.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted successfully' });
};
