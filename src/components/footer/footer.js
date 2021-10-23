import classes from "./footer.module.scss";

function FooterLink({title, to}) {
    return <li><a href={to} className={classes.nav__link}>{title}</a></li>;
}

const Footer = () => (
    <footer className={classes.footer}>
        <ul className={classes.nav}>
            <FooterLink title={"Find your dream home"} to={"/#"}/>
            <FooterLink title={"Request proposal"} to={"/#"}/>
            <FooterLink title={"Download home planner"} to={"/#"}/>
            <FooterLink title={"Contact us"} to={"/#"}/>
            <FooterLink title={"Submit your property"} to={"/#"}/>
            <FooterLink title={"Come work with us!"} to={"/#"}/>
        </ul>
        <p className={classes.copyright}>
            &copy; Design: Jonas Schmedtmann, React version: Michael Zdolski
        </p>
    </footer>);

export default Footer;
