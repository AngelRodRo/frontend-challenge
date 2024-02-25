import { createContext, useCallback, useState } from "react";
import { SelectedPlan } from "../models/Plan";
import { User } from "../models/User";

export interface UserInsuranceContextValues {
    user?: User,
    selectedPlan?: SelectedPlan,

    updateUser: (user: User) => void,
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

    const [user, setUser] = useState<User>();
    const [selectedPlan, setPlan] = useState<SelectedPlan>();

    const updateUser = useCallback((userInfo: User) => {
        setUser(userInfo);
    }, []);

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