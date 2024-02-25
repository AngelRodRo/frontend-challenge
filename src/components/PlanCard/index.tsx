import { Plan } from "../../models/Plan";
import { Badge } from "../Badge";
import { Button, ButtonVariants } from "../Button";
import { Card } from "../Card";
import { Icon, IconName } from "../Icon";
import styles from './styles.module.scss';

interface Props extends Plan {
    recommended?: boolean,
    iconName: IconName,
    onSelected: (plan: Pick<Plan, "name" | "price">) => void
}

export const PlanCard: React.FC<Props> = ({ name, recommended, price, iconName, description, onSelected }) => {
    return (
        <Card className={styles.PlanCard}>
            <div style={{ position: 'relative', flex: 1 }}>
                {recommended && <Badge className={styles.PlanCard__recommended} text="Plan Recomendado" />}
                <div className={styles.PlanCard__info}>
                    <div className={styles.PlanCard__name}>
                        <h2 className={styles.PlanCard__title}>
                            {name}
                        </h2>
                        <div style={{display: 'flex', flexDirection: 'column' }}>
                            <span className={styles.PlanCard__priceLabel}>Costo del Plan</span>
                            <span className={styles.PlanCard__price}>
                                ${price} al mes
                            </span>
                        </div>
                    </div>
                    <div>
                        <Icon name={iconName} />
                    </div>
                </div>
                <hr style={{ borderColor: 'gray', width: "100%", marginTop: 24 }} />
                <ul>
                    {
                        description.map((item, idx) => {
                            return <li className={styles.PlanCard__descriptionItem} key={idx}>{item}</li>
                        })
                    }
                </ul>
            </div>
            <div style={{ marginTop: '40px' }}>
                <Button variant={ButtonVariants.primary} onClick={() => onSelected({ name, price })}>Seleccionar Plan</Button>
            </div>
        </Card>
    )
}