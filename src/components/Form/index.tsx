import cn from 'classnames';
import { useNavigate } from "react-router-dom";

import { Button, ButtonVariants } from '../Button';
import { Input } from '../Input';
import { InputWithDropdown } from '../InputWithDropdown';
import { Link } from '../Link';

import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserInsuranceContext, type UserInsuranceContextValues } from '../../context/UserInsuranceContext';
import { User } from '../../models/User';
import { routes } from '../../router/routes';
import { Checkbox } from '../Checkbox';
import styles from './styles.module.scss';
interface Props extends React.FormHTMLAttributes<HTMLFormElement> {

}

interface FormViewModel extends User {
    privacyPolicy: boolean;
    comercialPolicy: boolean;
}

export const Form: React.FC<Props> = ({ className, ...props }) => {
    const { updateUser } = useContext<UserInsuranceContextValues>(UserInsuranceContext);
    const navigate = useNavigate();

    const form = useForm<FormViewModel>(
        {
            defaultValues: {
                dni: '',
                phone: '',
                privacyPolicy: false,
                comercialPolicy: false
            }
        }
    );

    const { errors } = form.formState

    const onHandleSubmit = (data: FormViewModel) => {
        updateUser(data)
        navigate(routes.Plans);
    }

    return (
        <form {...props} onSubmit={form.handleSubmit(onHandleSubmit)} className={cn(styles.Form, className)}>
            <p className={styles.Form__text}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</p>
            <div className={styles.Form__input}>
                <InputWithDropdown label="Nro. de Documento" { ...form.register("dni", { required: true }) } />
                {errors.dni && <span>DNI es requerido</span>}
            </div>
            <div className={styles.Form__input}>
                <Input label="Celular" { ...form.register("phone", { required: true }) } />
                {errors.phone && <span>Celular es requerido</span>}
            </div>
            <div className={styles.Form__terms}>
                <Checkbox className={styles.Form__checkbox} label='Acepto lo Política de Privacidad' { ...form.register("privacyPolicy", { required: true }) }  />
                <Checkbox className={styles.Form__checkbox} label='Acepto la Política Comunicaciones Comerciales' { ...form.register("comercialPolicy", { required: true }) }/>
                {errors.comercialPolicy || errors.privacyPolicy ? <span>Acepte los terminos y condiciones</span> : null}
                <div className={styles.Form__link}>
                    <Link href='#'>Aplican Términos y Condiciones.</Link>
                </div>
            </div>
            <Button className={styles.Form__submitButton} fullWidth type="submit" variant={ButtonVariants.secondary}>Cotiza aqui</Button>
        </form>
    );
};