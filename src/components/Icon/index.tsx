import { lazy } from 'react';

const PhoneIcon = lazy(() => import('../../assets/icons/GlTelephoneSolid.svg?react'));
const RimacLogoIcon = lazy(() => import('../../assets/icons/logo.svg?react'));
const HousePlanIcon = lazy(() => import('../../assets/icons/IcHomeLight.svg?react'));
const HouseClinicPlanIcon = lazy(() => import('../../assets/icons/IcHospitalLight.svg?react'));
const ForMePlanIcon = lazy(() => import('../../assets/icons/IcProtectionLight.svg?react'));
const ForSomeoneelsePlanIcon = lazy(() => import('../../assets/icons/IcAddUserLight.svg?react'));
const UserIcon = lazy(() => import('../../assets/icons/glFamily.svg?react'));
const GreenCheckIcon =lazy(() => import('../../assets/icons/green-check.svg?react'));


interface Props {
    name: IconName
}

export enum IconName {
    phone = 'phone',
    rimacLogo = 'rimacLogo',
    forMePlan = 'forMePlan',
    forSomeoneelsePlan = 'forSomeelsePlan',
    housePlan = 'housePlan',
    user = 'user',
    houseClinicPlan = 'houseClinicPlan',
    greenCheck = 'greenCheck'
}

const iconDictionary: { [k in IconName]: JSX.Element } = {
    [IconName.phone]: <PhoneIcon />,
    [IconName.rimacLogo]: <RimacLogoIcon />,
    [IconName.forMePlan]: <ForMePlanIcon />,
    [IconName.forSomeoneelsePlan]: <ForSomeoneelsePlanIcon />,
    [IconName.housePlan]: <HousePlanIcon />,
    [IconName.user] : <UserIcon />,
    [IconName.houseClinicPlan]: <HouseClinicPlanIcon />,
    [IconName.greenCheck]: <GreenCheckIcon />
}

export const Icon: React.FC<Props> = ({ name }) => {
    return <>{iconDictionary[name]}</>;
};