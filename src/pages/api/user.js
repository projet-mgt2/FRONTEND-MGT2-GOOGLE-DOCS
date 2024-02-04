import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const USERNAME = 'user';
const PASSWORD = 'user';

const login = async (userData) => {
  try {
    const credentials = `${USERNAME}:${PASSWORD}`;
    const encodedCredentials = btoa(credentials);

    const response = (await axios.post(`${BASE_URL}/User`, userData),  {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login };