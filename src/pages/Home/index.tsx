import { Badge } from "../../components/Badge";

import familyImgSmall from "../../assets/images/family-136w.png";
import familyImgLarge from "../../assets/images/family-480w.png";

import { useMemo } from "react";
import { Form } from "../../components/Form";
import styles from './styles.module.scss';

interface Props {

}

const HomePage: React.FC<Props> = () => {

    const renderedHomeInfo = useMemo(( ) => {
        return (
            <>
                <Badge text="Seguro Salud Flexible"/>
                <h1 className={styles.Home__title}>Creado para ti y tu familia</h1>
            </>
        )
    }, []);

    return (
        <section className={styles.Home}>
            <div className={styles.Home__heroSection}>
                <div className={styles.Home__info}>
                    {renderedHomeInfo}
                </div>
                    <img
                        className={styles.Home__heroImage}
                        srcSet={`${familyImgSmall} 136w, ${familyImgLarge} 480w`}
                        src={familyImgLarge}
                        sizes="
                        (max-width: 400px) 136px,
                        480px"
                        alt="Family"
                    />
            </div>
            <hr className={styles.Home__divider} />
            <div className={styles.Home__formSection}>
                <div className={styles.Home__formDescription}>
                    {renderedHomeInfo}
                </div>
                <Form className={styles.Home__form} />
            </div>
        </section>
    );
};

export default HomePage;