import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeMenu from '../theme-menu/ThemeSwitcher';

import { FaFacebookSquare } from 'react-icons/fa';
import { IoInvertMode } from 'react-icons/fa';

import { IconContext } from "react-icons";
import LanguageChangerBlock from '../languageChanger/languageChanger';

import navbar from '../../assets/text/navbar';

function NavScrollExample({ lan }) {
    return (
        <div className='container'>
            <Navbar expand="lg" className={`bg-body-tertiary`}>
                <Container fluid>
                    <Navbar.Brand href="#" className={"me-2"}>
                        <img
                            src="title-logo.jpg"
                            width="40" height="39"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                        takvim.tj
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">{navbar.get(lan).PrayTime}</Nav.Link>
                            <Nav.Link href="#action2">{navbar.get(lan).News}</Nav.Link>
                        </Nav>

                        <Navbar.Collapse className="justify-content-end">

                            <Nav.Link href="https://www.facebook.com/takvim.tj" className="me-2">
                                <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: 30 }}>
                                    <div>
                                        <FaFacebookSquare />
                                    </div>
                                </IconContext.Provider>
                            </Nav.Link>

                            <LanguageChangerBlock className="me-2" lan={lan} />

                            <ThemeMenu className="me-lg-2"/>

                        </Navbar.Collapse>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavScrollExample;