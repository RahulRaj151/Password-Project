import bcrypt from 'bcryptjs';
import Student from '../models/Student.js';

export const registerStudent = async (req, res) => {
  const { name, registrationNumber, marks, address, email, password } = req.body;
  if ([name, registrationNumber, marks, address, email, password].some((v) => v === undefined || v === '')) return res.status(400).json({ message: 'All fields are required' });
  const hashed = await bcrypt.hash(password, 10);
  const student = await Student.create({ name, registrationNumber, marks, address, email, password: hashed });
  res.status(201).json({ id: student._id, name: student.name });
};

export const studentAggregation = async (_req, res) => {
  const groupCounts = await Student.aggregate([
    { $project: { marks: 1, range: { $switch: { branches: [ { case: { $lte: ['$marks', 40] }, then: '0-40' }, { case: { $and: [{ $gt: ['$marks', 40] }, { $lte: ['$marks', 70] }] }, then: '41-70' }, { case: { $and: [{ $gt: ['$marks', 70] }, { $lte: ['$marks', 100] }] }, then: '71-100' } ], default: 'Unknown' } } } },
    { $group: { _id: '$range', count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ]);
  const sortedStudents = await Student.aggregate([{ $project: { name: 1, marks: 1 } }, { $sort: { marks: -1 } }]);
  res.json({ groupCounts, sortedStudents });
};
