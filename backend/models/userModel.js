import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: false,
  },
  lastName: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model('users', userSchema);
