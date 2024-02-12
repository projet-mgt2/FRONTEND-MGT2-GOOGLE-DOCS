import { Get, Login } from '../baseApi';

async function login({username, password}) {
  return Login('/User/login', {username, password});
}

async function getAllUsers() {
  return Get('/Users');
}

async function signup({first_name, last_name, email, password}) {
  return Login('/User/signup', {first_name, last_name, email, password});
}

const apiUser = {
  login,
  signup,
  getAllUsers,
}

export default apiUser;