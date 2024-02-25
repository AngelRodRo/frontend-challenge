import axios from "axios";
import { Plan } from "../models/Plan";

const API_HOST = import.meta.env.FRONTEND_CHALLENGE_API_HOST ?? "https://rimac-front-end-challenge.netlify.app/api";

export const getPlans= async (): Promise<Plan[]> => {
    return axios.get<{ list: Plan[] }>(`${API_HOST}/plans.json`).then(res => res.data).then(data => data.list);
}