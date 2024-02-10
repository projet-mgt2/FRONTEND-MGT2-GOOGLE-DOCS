import Cookies from "js-cookie";

function CurrentUserInfo() {
    try {
      const tokenParts = Cookies.get('token').split('.');

      const payload = JSON.parse(atob(tokenParts[1]));
      
      return payload;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
};

function isJWT(token) {
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]+$/;
  return jwtRegex.test(token);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  CurrentUserInfo,
  isJWT,
};