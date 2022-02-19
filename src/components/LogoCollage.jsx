import "./LogoCollage.css";

const LogoCollage = () => {
    return (
        <>
        <div className="logoContainer">
            <ul className="logoCollage">
                <li className="reactLogo logoSpinner" />
                <li className="htmlLogo logoSpinner" />
                <li className="mongoLogo logoSpinner" />
                <li className="cssLogo logoSpinner" />
                <li className="mysqlLogo logoSpinner" />
                <li className="javascriptLogo logoSpinner" />
                <li className="vscodeLogo logoSpinner" />
            </ul>
            <div className="reflectContainer">
            <ul className="logoCollageReflect">
                <li className="reactLogo logoSpinner" />
                <li className="htmlLogo logoSpinner" />
                <li className="mongoLogo logoSpinner" />
                <li className="cssLogo logoSpinner" />
                <li className="mysqlLogo logoSpinner" />
                <li className="javascriptLogo logoSpinner" />
                <li className="vscodeLogo logoSpinner" />
            </ul>
            </div>
        </div>
        </>
    );
};

export default LogoCollage;