import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const USERNAME = 'user';
const PASSWORD = 'user';

export async function login(userData) {
  try {
    const credentials = `${USERNAME}:${PASSWORD}`;
    const encodedCredentials = btoa(credentials);

    const { data } = await axios.post(`${BASE_URL}/Login`, userData, {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export async function signup(userData) {
  try {
    const credentials = `${USERNAME}:${PASSWORD}`;
    const encodedCredentials = btoa(credentials);

    const { data } = await axios.post(`${BASE_URL}/User`, userData, {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
    login,
    signup,
};