import Link from "next/link";
import { useRouter } from "next/router";

// Reactstrap
import { 
    Container,
    Dropdown,
    Nav,
    Navbar,
    NavItem,
    NavLink,
} from "react-bootstrap";

import { topNavbarLinks } from "./topNavbarLinks";
import { appBrandName } from "../../config";

// Top navbar links (show both on large and small screens)
export const NavlinkContent = ({ fontColor="white" }) => {
    
    const router = useRouter();

    return topNavbarLinks().map(link => {

        const active = (router.pathname === link.path) ? true : false;

        const navLinkStyle = () => {
            if (active)  {
                return {color: fontColor};
            }
            else {
                return {color: fontColor, opacity: 0.75};
            }
        };

        return (
            <div key={link.key} >
                <Link href={link.path} passHref >
                    <Nav.Link>
                        <span 
                            style={navLinkStyle()}
                            >
                            {link.label}
                        </span>
                    </Nav.Link>
                </Link>
            </div>
        );
    });
};

const AppNavbar = (props) => {

    const blogName = appBrandName();

    const Menu = () => <>
        <Nav className="ms-auto">
            <NavlinkContent />
        </Nav>
    </>;

    return <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
            <Navbar.Brand href="/">{ blogName }</Navbar.Brand>
            <Navbar.Toggle aria-controls="app-navbar-nav" />
            <Navbar.Collapse id="app-navbar-nav" >
                <Menu />
            </Navbar.Collapse>
        </Container>
    </Navbar>
};

export default AppNavbar;