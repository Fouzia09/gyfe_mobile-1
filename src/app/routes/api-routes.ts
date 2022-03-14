const ROOT_URI = 'https://127.0.0.1:8000/api';

export const API_ROUTE = {
  logon: `${ROOT_URI}/login`,
  users: `${ROOT_URI}/users`,
  restaurants: `${ROOT_URI}/restaurants`,
  rooms: `${ROOT_URI}/rooms`,
  comments: `${ROOT_URI}/comments`,
  favorites: `${ROOT_URI}/favorites`,
  currentUser: `${ROOT_URI}/currentuser`
};
