import cn from "classnames";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ObjectSchema, bool, object, string } from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonVariants } from "../Button";
import { Input } from "../Input";
import { InputWithDropdown } from "../InputWithDropdown";
import { Link } from "../Link";

import {
  UserInsuranceContext,
  type UserInsuranceContextValues,
} from "../../context/UserInsuranceContext";
import { User } from "../../models/User";
import { routes } from "../../router/routes";
import { Checkbox } from "../Checkbox";
import styles from "./styles.module.scss";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

interface IFormInput extends Pick<User, "phone" | "dni"> {
  privacyPolicy: boolean;
  comercialPolicy: boolean;
}

const ErrorMessage:React.FC<{ children: React.ReactNode }> = ({ children }) =>{
  return (
    <div style={{ color: 'red'}}>
      {children}
    </div>
  );
}

const validationSchema: ObjectSchema<IFormInput> = object({
  phone: string()
    .matches(/^\d{9}$/, {
      message: "El número de teléfono no es válido",
    })
    .required(),
  dni: string()
    .matches(/^\d{8}$/, {
      message: "El DNI debe tener exactamente 8 dígitos numéricos",
    })
    .required(),
  privacyPolicy: bool().oneOf([true], "").required("Required"),
  comercialPolicy: bool().oneOf([true], "").required("Required"),
});

export const Form: React.FC<Props> = ({ className, ...props }) => {
  const { updateUser } =
    useContext<UserInsuranceContextValues>(UserInsuranceContext);
  const navigate = useNavigate();

  const form = useForm<IFormInput>({
    defaultValues: {
      dni: "",
      phone: "",
      privacyPolicy: false,
      comercialPolicy: false
    },
    resolver: yupResolver(validationSchema),
  });

  const { errors, } = form.formState;
  console.log(form.watch());

  const onHandleSubmit = (data: IFormInput) => {
    updateUser({ dni: data.dni, phone: data.phone });
    navigate(routes.Plans);
  };

  return (
    <form
      {...props}
      onSubmit={form.handleSubmit(onHandleSubmit)}
      className={cn(styles.Form, className)}
    >
      <p className={styles.Form__text}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </p>
      <div className={styles.Form__input}>
        <InputWithDropdown
          options={['DNI']}
          label="Nro. de Documento"
          {...form.register("dni")}
        />
        {errors.dni && <ErrorMessage>{errors.dni.message}</ErrorMessage>}
      </div>
      <div className={styles.Form__input}>
        <Input label="Celular" {...form.register("phone")} />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </div>
      <div className={styles.Form__terms}>
        <Checkbox
          className={styles.Form__checkbox}
          label="Acepto lo Política de Privacidad"
          {...form.register("privacyPolicy")}
        />
        <Checkbox
          className={styles.Form__checkbox}
          label="Acepto la Política Comunicaciones Comerciales"
          {...form.register("comercialPolicy")}
        />
        {errors.comercialPolicy || errors.privacyPolicy ? (
          <ErrorMessage>Acepte los terminos y condiciones antes de continuar</ErrorMessage>
        ) : null}
        <div className={styles.Form__link}>
          <Link href="#">Aplican Términos y Condiciones.</Link>
        </div>
      </div>
      <Button
        className={styles.Form__submitButton}
        type="submit"
        variant={ButtonVariants.secondary}
      >
        Cotiza aqui
      </Button>
    </form>
  );
};
