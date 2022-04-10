import { Container } from "react-bootstrap";
import { appBrandName, githubLink } from "../../config";
import { NavlinkContent } from "../AppNavbar";
import Copy from "./Copy";
import GithubLink from "./GithubLink";

const Footer = () => <footer>
    <Container 
        className="d-flex justify-content-evenly align-items-center my-2"
        style={{ fontSize: "0.75rem" }}
        >
        <Copy appBrandName={ appBrandName() } />
        <GithubLink link={ githubLink() } />

        <div className="d-flex">
            <NavlinkContent fontColor={"black"} />
        </div>
    </Container>
</footer>;

export default Footer;