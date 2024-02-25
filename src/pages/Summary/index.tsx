import { useContext } from "react";
import { Card } from "../../components/Card";
import { UserInsuranceContext } from "../../context/UserInsuranceContext";

import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { Icon, IconName } from "../../components/Icon";
import { Navigation } from "../../components/Navigation";
import styles from "./styles.module.scss";

interface Props {}

const SummaryPage: React.FC<Props> = () => {
  const { user, selectedPlan } = useContext(UserInsuranceContext);
  const navigate = useNavigate();

  return (
    <div className={styles.Summary}>
      <Navigation />
      <hr />
      <div className={styles.Summary__content}>
        <div>
          <BackButton text="Volver" onBack={() => navigate(-1)} />
        </div>
        <h1 className={styles.Summary__title}>Resumen del seguro</h1>
        <Card className={styles.Summary__card}>
          <h3 className={styles.Summary__subtitle}>PRECIOS CALCULADOS PARA:</h3>
          <p>
            {user && (
              <p className={styles.Summary__user}>
                <Icon name={IconName.user} />
                <span style={{ marginLeft: 12 }}>
                  {user.name} {user.lastName}
                </span>
              </p>
            )}
          </p>
          <hr />

          <div>
            <h3 className={styles.Summary__label}>Responsable de pago</h3>
            <p className={styles.Summary__text}>DNI: {user?.dni}</p>
            <p className={styles.Summary__text}>Celular: {user?.phone}</p>
          </div>

          <div style={{ marginTop: 16 }}>
            <h3 className={styles.Summary__label}>Plan elegido</h3>
            <p className={styles.Summary__text}>{selectedPlan?.name}</p>
            <p className={styles.Summary__text}>
              Costo del Plan: ${selectedPlan?.price} al mes
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SummaryPage;
