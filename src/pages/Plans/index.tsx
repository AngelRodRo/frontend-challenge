import { useQuery } from "@tanstack/react-query";
import { useCallback, useContext, useMemo, useState } from "react";

import styles from './styles.module.scss';

import { useNavigate } from "react-router-dom";
import { getPlans } from "../../api/plans";
import { getUserInfo } from "../../api/user";
import { BackButton } from "../../components/BackButton";
import { Card } from "../../components/Card";
import { Icon, IconName } from "../../components/Icon";
import { Navigation } from "../../components/Navigation";
import { PlanCard } from "../../components/PlanCard";
import { UserInsuranceContext } from "../../context/UserInsuranceContext";
import { SelectedPlan } from "../../models/Plan";
import { routes } from "../../router/routes";
interface Props {

}

const useGetAPIDataInfo = () => {
    const { data: user } = useQuery({
        queryKey: ['userData'],
        queryFn: () => getUserInfo()
    });

    const isUserInfoAvailable = useMemo(() => !!user?.name, [user]);

    const { data: plans } = useQuery({
        queryKey: ['plansData'],
        queryFn: () =>
          getPlans(),
        enabled: isUserInfoAvailable
    });

    return { user, plans }
}

function calculateAge(dateString: string): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(dateString);

    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const planNameIconMap: { [key: string]: IconName }  = {
    "Plan en Casa": IconName.housePlan,
    "Plan en Casa y Clínica": IconName.houseClinicPlan
};

const recommendedPlansMap: { [key: string]: boolean }  = {
    "Plan en Casa y Clínica": true
};


const PlansPage: React.FC<Props> = () => {
    const { updateSelectedPlan, updateUser } = useContext(UserInsuranceContext);
    const { user, plans } = useGetAPIDataInfo();
    const navigate = useNavigate();
    const [isForMeCardSelected, setIsForMeCardSelected] = useState(false);
    const [isForSomeoneElseSelected, setIsForSomeoneElseSelected] = useState(false);

    const userAge = useMemo(() => user && calculateAge(user.birthDay), [user]);

    const handleSelectionIsForMeCard = (val: boolean) => {
        setIsForMeCardSelected(val);
        if (val === true) {
            setIsForSomeoneElseSelected(false);
        }
    };

    const handleSelectionIsForSomeoneElseCard = (val: boolean) => {
        setIsForSomeoneElseSelected(val);
        if (val === true) {
            setIsForMeCardSelected(false);
        }
    }

    const filteredPlans = useMemo(() => {
        if (!userAge) return [];
        const plansByAge = plans?.filter(plan => plan.age >= userAge);

        if (isForSomeoneElseSelected) {
            return plansByAge?.map(plan => ({ ...plan, price: plan.price - (plan.price * 0.05) }))
        }

        return plansByAge;
    }, [isForSomeoneElseSelected, plans, userAge]);

    const handleSelectedPlan = useCallback((plan: SelectedPlan) => {
        if (user) {
            updateUser(user);
        }
        updateSelectedPlan(plan);
        navigate(routes.Summary);
    }, [navigate, updateSelectedPlan, updateUser, user]);

    return (
        <div className={styles.PlanPage}>
            <Navigation />
            <div className={styles.PlanPage__content}>
                <div className={styles.PlanPage__backBtn}>
                    <BackButton text="Volver" onBack={() => navigate(-1)} />
                </div>
                <div className={styles.PlanPage__optionsSection}>
                    <h1 className={styles.PlanPage__title}>
                        {user?.name} ¿Para quién deseas <br /> cotizar?
                    </h1>
                    <p className={styles.PlanPage__subtitle}>Selecciona la opción que se ajuste más a tus necesidades. </p>

                    <div className={styles.PlanPage__options}>
                        <Card className={styles.PlanPage__option} selectable selected={isForMeCardSelected} onSelected={handleSelectionIsForMeCard}>
                            <Icon name={IconName.forMePlan} />
                            <h2 className={styles.PlanPage__optionTitle}>Para mi</h2>
                            <p className={styles.PlanPage__optionDescription}>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
                        </Card>
                        <Card className={styles.PlanPage__option} selectable selected={isForSomeoneElseSelected} onSelected={handleSelectionIsForSomeoneElseCard}>
                            <Icon name={IconName.forSomeoneelsePlan} />
                            <h2 className={styles.PlanPage__optionTitle}>Para alguien mas</h2>
                            <p className={styles.PlanPage__optionDescription}>Realiza una cotización para uno de tus familiares o cualquier persona.</p>
                        </Card>
                    </div>
                </div>
                <div className={styles.PlanPage__plansSection}>
                    {
                        (isForMeCardSelected || isForSomeoneElseSelected) && (
                            <div className={styles.PlanPage__plans}>
                                {filteredPlans && filteredPlans.map((plan, idx) => <PlanCard key={idx} recommended={recommendedPlansMap[plan.name]} iconName={planNameIconMap[plan.name] ?? IconName.housePlan} {...plan} onSelected={handleSelectedPlan} />)}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PlansPage;