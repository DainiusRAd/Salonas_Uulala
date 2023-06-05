import User from '../models/userModel.js';
import mongoose from 'mongoose';

export async function getAllUsers(req, res) {
  try {
    const users = await User.find({}, { __v: 0 });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function register(req, res) {
  try {
    const { firstName, lastName, email, phone, registrationDate } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: 'User already exists with entered email' });
    }

    const newUser = new User({
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      email,
      phone,
      registrationDate,
    });
    await newUser.save();

    return res.status(201).json({ message: 'registration successful' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function updateUserData(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid user id (non-Object)' });
    }

    const { firstName, lastName, email, phone, registrationDate } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, email, phone, registrationDate },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { __v, ...userData } = user.toObject();

    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteUserById(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid user id (non-Object)' });
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json('User removed successfully');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
