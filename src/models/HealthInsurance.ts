import { User } from "./User";

export interface UserInsuranceInfo extends User {
    selectedPlan: string
}