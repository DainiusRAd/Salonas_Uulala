import axios from 'axios';

const DB_ENDPOINT = 'https://full-stack-backend-irxzagg7d-ryckutis.vercel.app';

export async function fetchUsers() {
  try {
    const resp = await axios.get(DB_ENDPOINT + '/users');
    return resp.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createUser(userData) {
  try {
    const resp = await axios.post(DB_ENDPOINT + '/register', userData);
    return resp.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating user');
  }
}

export async function updateUser(userId, userData) {
  try {
    const resp = await axios.put(
      `${DB_ENDPOINT}/user-update/${userId}`,
      userData
    );
    return resp.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error updating user');
  }
}

export async function deleteUser(userId) {
  try {
    await axios.delete(DB_ENDPOINT + `/user-delete/${userId}`);
  } catch (error) {
    console.log(error);
  }
}
