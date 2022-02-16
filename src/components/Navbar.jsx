import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import "../App.css";

const Navbar = () => {
    return (
        <>
        <Router>
        <div className="navbarContainer">
            <Link to="/" className="navLink navbarMenuItem">Home</Link>
            <Link to="/aboutme" className="navLink navbarMenuItem">About Me</Link>
            <Link to="/projects" className="navLink navbarMenuItem">Projects</Link>
            <div className="navbarMenuItem"><div /></div>
            <div className="navbarMenuItem"><div /></div>
            <div className="navbarMenuItem"><div /></div>
            <div className="navbarMenuItem socialLinkContainer">
                <a href="https://github.com/DavidH1982" target='_blank' rel="noreferrer" className="socialLink navLink githubLink"></a>
                <a href="www.linkedin.com/in/david-houghton-79515716a" target='_blank' rel="noreferrer" className="socialLink navLink linkedinLink"></a>
            </div>
        </div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/aboutme">
                <Aboutme />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
        </Switch>
        </Router>
        </>
    );
};

export default Navbar;