import classes from "./stories.module.scss"
import storyImg1 from "./../../assets/img/story-1.jpeg"
import storyImg2 from "./../../assets/img/story-2.jpeg"

const Stories = () => <>
    <div className={classes.story__pictures}>
        <img src={storyImg1} alt="Couple with new house" className={classes.story__img__1}/>
        <img src={storyImg2} alt="New house" className={classes.story__img__2}/>
    </div>

    <div className={classes.story__content}>
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
        <p className={classes.story__text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
            voluptatibus. Quidem consequatur harum volupta!
        </p>
        <button className="btn">Find your own home</button>
    </div>
</>;

export default Stories;
