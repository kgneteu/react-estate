import classes from "./homes.module.scss";
import Sprite from '../../assets/img/sprite.svg'

function SVGIcon({icon, className=null}) {
    return <svg className={className?className:''}>
        <use xlinkHref={`${Sprite}#${icon}`}/>
    </svg>;
}

function House({houseData}) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });
    const houseImg=require(`./../../assets/img/${houseData.img}`).default;
    return <>
        <div className={classes.home}>
            <img src={houseImg} alt="House 1" className={classes.home__img}/>
            <SVGIcon icon={'icon-heart-full'} className={classes.home__like}/>


            <h5 className={classes.home__name}>{houseData.title}</h5>
            <div className={classes.home__location}>
                <SVGIcon icon={'icon-map-pin'}/>
                <p>{houseData.location}</p>
            </div>
            <div className={classes.home__rooms}>
                <SVGIcon icon={'icon-profile-male'}/>
                <p>{houseData.rooms} rooms</p>
            </div>
            <div className={classes.home__area}>
                <SVGIcon icon={'icon-expand'}/>
                <p>{houseData.area} m<sup>2</sup></p>
            </div>
            <div className={classes.home__price}>
                <SVGIcon icon={'icon-key'}/>
                <p>{formatter.format(houseData.price)}</p>
            </div>
            <button className={`btn ${classes.home__btn}`}>Contact realtor</button>
        </div>
    </>;
}

export const Homes = () =>
    <section className={classes.homes}>

        <House houseData={
            {
                title: 'Beautiful Family House',
                location: 'USA',
                rooms: 5,
                price: 1200000,
                area: 325,
                img: 'house-1.jpeg'
            }
        }/>

        <House houseData={
            {
                title: 'Modern Glass Villa',
                location: 'Canada',
                rooms: 6,
                price: 2750000,
                area: 450,
                img: 'house-2.jpeg'
            }
        }/>

        <House houseData={
            {
                title: 'Cozy Country House',
                location: 'UK',
                rooms: 4,
                price: 850000,
                area: 250,
                img: 'house-3.jpeg'
            }
        }/>

        <House houseData={
            {
                title: 'Large Rustical Villa',
                location: 'Portugal',
                rooms: 6,
                price: 1950000,
                area: 480,
                img: 'house-4.jpeg'
            }
        }/>

        <House houseData={
            {
                title: 'Majestic Palace House',
                location: 'Germany',
                rooms: 18,
                price: 9500000,
                area: 4230,
                img: 'house-5.jpeg'
            }
        }/>
        <House houseData={
            {
                title: 'Modern Family Apartment',
                location: 'Italy',
                rooms: 3,
                price: 600000,
                area: 180,
                img: 'house-5.jpeg'
            }
        }/>

    </section>;
