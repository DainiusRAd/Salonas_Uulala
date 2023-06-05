import axios from 'axios';

const DB_ENDPOINT = 'https://full-stack-backend-irxzagg7d-ryckutis.vercel.app';

export async function registerAdmin(email, password) {
  try {
    const resp = await axios.post(`${DB_ENDPOINT}/admin/register`, {
      email,
      password,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error registering admin');
  }
}

export async function loginAdmin(email, password) {
  try {
    const resp = await axios.post(`${DB_ENDPOINT}/admin/sign-in`, {
      email,
      password,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error logging in');
  }
}
