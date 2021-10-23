import classes from "./realtors.module.scss";

const Realtor = ({name, sold, avatar}) => {
    const avatarURL = require(`./../../assets/img/${avatar}`).default;
    return (
        <>
            <img src={avatarURL} alt={name} className={classes.realtors__img}/>
            <div>
                <h4 className="heading-4 heading-4--light">{name}</h4>
                <p className={classes.realtors__sold}>{`${sold} houses sold`}</p>
            </div>
        </>)
};

export const Realtors = () => (
    <div className={classes.realtors}>
        <h3 className="heading-3">Top 3 Realtors</h3>
        <div className={classes.realtors__list}>

            <Realtor name={"Erik Feinmann"} sold={245} avatar={'realtor-1.jpeg'}/>
            <Realtor name={"Kim Yellow"} sold={212} avatar={'realtor-2.jpeg'}/>
            <Realtor name={"Toby Smith"} sold={198} avatar={'realtor-3.jpeg'}/>
        </div>
    </div>);
