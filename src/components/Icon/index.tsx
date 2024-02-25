import { lazy } from 'react';
const PhoneIcon = lazy(() => import('../../assets/icons/GlTelephoneSolid.svg?react'));
const RimacLogoIcon = lazy(() => import('../../assets/icons/logo.svg?react'));
const HousePlanIcon = lazy(() => import('../../assets/icons/IcHomeLight.svg?react'));
const HouseClinicPlanIcon = lazy(() => import('../../assets/icons/IcHospitalLight.svg?react'));
interface Props {
    name: IconName
}

export enum IconName {
    phone = 'phone',
    rimacLogo = 'rimacLogo',
    housePlan = 'housePlan',
    houseClinicPlan = 'houseClinicPlan'
}

const iconDictionary: { [k in IconName]: JSX.Element } = {
    [IconName.phone]: <PhoneIcon />,
    [IconName.rimacLogo]: <RimacLogoIcon />,
    [IconName.housePlan]: <HousePlanIcon />,
    [IconName.houseClinicPlan]: <HouseClinicPlanIcon />,
    
}

export const Icon: React.FC<Props> = ({ name }) => {
    return <>{iconDictionary[name]}</>;
};