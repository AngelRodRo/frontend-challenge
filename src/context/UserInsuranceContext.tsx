import { createContext, useCallback, useState } from "react";
import { SelectedPlan } from "../models/Plan";
import { User } from "../models/User";

export interface UserInsuranceContextValues {
    user?: Partial<User>,
    selectedPlan?: SelectedPlan,

    updateUser: (user: Partial<User>) => void,
    updateSelectedPlan: (user: SelectedPlan) => void
}

interface UserInsuranceContextProviderProps {
    children: React.ReactNode
}


const initialValues: UserInsuranceContextValues = {
    user: {
        name: '',
        lastName: '',
        birthDay: '',
        dni: '',
        phone: ''
    },
    updateSelectedPlan: () => {},
    updateUser: () => {}
}


export const UserInsuranceContextProvider: React.FC<UserInsuranceContextProviderProps> = ({ children }) => {

    const [user, setUser] = useState<Partial<User>>({
        name: '',
        lastName: '',
        birthDay: '',
        dni: '',
        phone: '',
    });
    const [selectedPlan, setPlan] = useState<SelectedPlan>();

    const updateUser = useCallback((userInfo: Partial<User>) => {
        setUser({ ...user, ...userInfo });
    }, [user]);

    const updateSelectedPlan = useCallback((plan: SelectedPlan) => {
        setPlan(plan);
    }, []);


    return (
        <UserInsuranceContext.Provider value={{ user, updateUser, selectedPlan, updateSelectedPlan }}>
            {children}
        </UserInsuranceContext.Provider>
    )
}



export const UserInsuranceContext = createContext<UserInsuranceContextValues>(initialValues);