import Sprite from '../../assets/img/sprite.svg'
import classes from "./features.module.scss";

const Feature = ({title, icon, children}) => {
    return (
        <div className={classes.feature}>
            <svg className={classes.feature__icon}>
                <use xlinkHref={`${Sprite}#${icon}`}/>
            </svg>
            {/*<IconGlobal/>*/}
            <h4 className="heading-4 heading-4--dark">{title}</h4>
            <p className={classes.feature__text}>{children}</p>
        </div>)
};

export function Features() {
    return <>
        <section className={classes.features}>
            <Feature title={"World's best luxury homes"} icon={"icon-global"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
            </Feature>
            <Feature title={"Only the best properties"} icon={"icon-trophy"}>
                Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum
                sed a eligendi aut quia.
            </Feature>
            <Feature title={"All homes in in top locations"} icon={"icon-map-pin"}>
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem
                consequatur harum.
            </Feature>

            <Feature title={"New home in one week"} icon={"icon-key"}>
                Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit.
            </Feature>
            <Feature title={"Top 1% realtors"} icon={"icon-presentation"}>
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
                necessitatibus pariatur voluptatibus.
            </Feature>
            <Feature title={"Secure payments on nexter"} icon={"icon-lock"}>
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem
                consequatur harum.
            </Feature>
        </section>
    </>;
}
