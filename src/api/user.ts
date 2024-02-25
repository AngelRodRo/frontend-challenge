import axios from "axios";
import { User } from "../models/User";

const API_HOST =
  import.meta.env.FRONTEND_CHALLENGE_API_HOST ??
  "https://rimac-front-end-challenge.netlify.app/api";

type UserApiInfo = Pick<User, "name" | "lastName" | "birthDay">;

export const getUserInfo = async (): Promise<UserApiInfo> => {
  return axios
    .get<UserApiInfo>(`${API_HOST}/user.json`)
    .then((res) => res.data);
};
