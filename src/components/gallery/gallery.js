import classes from "./gallery.module.scss"

const GalleryItem = ({id}) => {
    const imgURL = require(`./../../assets/img/gal-${id}.jpeg`).default;
    return (
        <figure className={`${classes.gallery__item} ${classes[`gallery__item__${id}`]}`}>
            <img src={imgURL}
                 alt={`Gallery item ${id} `}
                 className={classes.gallery__img}/>
        </figure>)
};

export function Gallery() {
    return <section className={classes.gallery}>
        <GalleryItem id={1}/>
        <GalleryItem id={2}/>
        <GalleryItem id={3}/>
        <GalleryItem id={4}/>
        <GalleryItem id={5}/>
        <GalleryItem id={6}/>
        <GalleryItem id={7}/>
        <GalleryItem id={8}/>
        <GalleryItem id={9}/>
        <GalleryItem id={10}/>
        <GalleryItem id={11}/>
        <GalleryItem id={12}/>
        <GalleryItem id={13}/>
        <GalleryItem id={14}/>

        {/*<figure className="gallery__item gallery__item--2"><img src="img/gal-2.jpeg" alt="Gallery image 2"*/}
        {/*                                                        className="gallery__img"/></figure>*/}

    </section>;
}
