export interface Plan {
    name: string;
    price: string;
    description: string[];
    age: number;
}

export type SelectedPlan = Pick<Plan, "name" | "price">