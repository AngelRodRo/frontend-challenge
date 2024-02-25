export interface Plan {
    name: string;
    price: number;
    description: string[];
    age: number;
}

export type SelectedPlan = Pick<Plan, "name" | "price">