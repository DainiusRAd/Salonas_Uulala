import Admin from '../models/adminModel.js';
import bcrypt from 'bcrypt';

export async function adminRegister(req, res) {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email: email });
    if (admin) {
      return res.status(400).json({ message: 'Toks administratorius jau yra' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });
    await newAdmin.save();

    return res.status(201).json({ message: 'Registracija sėkminga' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Administratorius nerastas' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Neteisingas slaptažodis' });
    }

    return res.status(200).json({ message: 'Prisijungimas sėkmingas' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
