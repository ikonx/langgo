import axios from "axios";

const API_URL = "http://localhost:3000/";
export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  nativeLg: string;
  address: string;
  created_at: any;
  translations: any[];
}

const api = {
  user: {
    get: (user: any) => axios.post(API_URL + user.id),
    post: (user: User) => axios.post(API_URL + "user"),
    delete: (user: User) => axios.delete(API_URL + user.id),
  },
  filter: {},
  translationCard: {},
  url: API_URL
};

export default api;
