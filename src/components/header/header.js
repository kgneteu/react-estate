import classes from "./header.module.scss";
import logoBBC from "./../../assets/img/logo-bbc.png"
import logoForbes from "./../../assets/img/logo-forbes.png"
import logoTech from "./../../assets/img/logo-techcrunch.png"
import logoBi from "./../../assets/img/logo-bi.png"
import logo from "./../../assets/img/logo.png"

export const Header = () => (
    <header className={classes.header}>
        <img src={logo} alt="Nexter logo" className={classes.header__logo}/>
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className={`btn ${classes.header__btn}`}>View our properties</button>
        <div className={classes.header__seenon_text}>Seen on</div>
        <div className={classes.header__seenon_logos}>
            <img src={logoBBC} alt="BBC"/>
            <img src={logoForbes} alt="Forbes"/>
            <img src={logoTech} alt="Tech Crunch"/>
            <img src={logoBi} alt="BI"/>
        </div>
    </header>);
