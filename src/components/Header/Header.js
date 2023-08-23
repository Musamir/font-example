import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import navbar from '../../assets/text/navbar';
import {IconContext} from 'react-icons';
import {FaFacebookSquare} from 'react-icons/fa';
import LanguageChangerBlock from '../languageChanger/languageChanger';
import ThemeMenu from '../theme-menu/ThemeSwitcher';

import titleLogo from '../../assets/icon/title-logo.jpg'
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <Navbar expand="lg" className={`bg-body-tertiary`}>
            <Container >
                <Navbar.Brand href="#" className={"me-2"}>
                    <Link to={'/'} className='navbar-brand'>
                        <img
                            src={titleLogo}
                            width="40" height="39"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                        takvim.tj
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to={'/'} className='nav-link active'>
                            {navbar.get(props.lan).PrayTime}
                        </Link>
                        <Link to={'news'} className='nav-link'>
                            {navbar.get(props.lan).News}
                        </Link>
                        <Link to={'ramadan'} className='nav-link'>
                            {navbar.get(props.lan).Ramadan}
                        </Link>

                        <Link to={'about'} className='nav-link'>
                            {navbar.get(props.lan).About}
                        </Link>
                    </Nav>

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link href="https://www.facebook.com/takvim.tj" className="me-2">
                            <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: 30 }}>
                                <div>
                                    <FaFacebookSquare />
                                </div>
                            </IconContext.Provider>
                        </Nav.Link>

                        <LanguageChangerBlock className="me-2" lan={props.lan} />

                        <ThemeMenu className="me-lg-2"/>

                    </Navbar.Collapse>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
}

export default Header;