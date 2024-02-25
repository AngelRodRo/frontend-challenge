import { useCallback, useContext, useMemo } from "react";
import styles from './styles.module.scss';

import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb, Step } from "../../components/Breadcrumb";
import { UserInsuranceContext } from "../../context/UserInsuranceContext";
import { routes } from "../../router/routes";
import { StepperProgress } from "../StepperProgress";

interface Props {

}

export const Navigation: React.FC<Props> = () => {
    const { selectedPlan } = useContext(UserInsuranceContext);

    const navigate = useNavigate();
    const location = useLocation();

    const steps: Step[] = useMemo(() => [
        {
            index: 0,
            text: 'Planes y coberturas',
            path: routes.Plans
        },
        {
            index: 1,
            text: 'Resumen',
            path: routes.Summary,
            disabled: !selectedPlan
        }
    ], [selectedPlan]);

    const activeStepIndex = useMemo(() => steps.findIndex((step) => step.path === location.pathname), [location.pathname, steps]);

    const handleSelectStep = useCallback((path: string) => {
        navigate(path);
    }, [navigate]);

    const handleBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (< >
        <StepperProgress className={styles.Navigation__stepper} activeIndex={activeStepIndex} steps={steps} onBack={handleBack} />
        <Breadcrumb className={styles.Navigation__breadcrumb} activeIndex={activeStepIndex} steps={steps} onStepSelected={handleSelectStep}/>
    </>);
};