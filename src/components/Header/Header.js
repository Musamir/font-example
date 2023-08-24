import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import navbar from '../../assets/text/navbar';
import {IconContext} from 'react-icons';
import LanguageChangerBlock from '../languageChanger/languageChanger';
import ThemeMenu from '../theme-menu/ThemeSwitcher';

import titleLogo from '../../assets/icon/title-logo.jpg'
import {Link} from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function Header(props) {

    let expand = props.lan === "en" ? "md":"lg"

    return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary" >
            <Container>
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
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton/>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
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

                        <Nav className="justify-content-end flex-grow-1 pe-3 d-flex justify-content-center">
                            <Nav.Link href="https://www.facebook.com/takvim.tj">
                                <IconContext.Provider value={{ color: "dark", className: "global-class-name", size: 30 }}>
                                        <BsFacebook />
                                </IconContext.Provider>
                            </Nav.Link>

                            <LanguageChangerBlock lan={props.lan} theme={props.theme}/>
                            <ThemeMenu theme={props.theme}/>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        //
        //
        // <Navbar expand="sm" className={`bg-body-tertiary`}>
        //     <Container >
        //         <Navbar.Brand href="#" className={"me-2"}>
        //             <Link to={'/'} className='navbar-brand'>
        //                 <img
        //                     src={titleLogo}
        //                     width="40" height="39"
        //                     className="d-inline-block align-top"
        //                     alt="React Bootstrap logo"
        //                 />{' '}
        //                 takvim.tj
        //             </Link>
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        //         <Navbar.Offcanvas
        //             id={`offcanvasNavbar-expand-sm`}
        //             aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
        //             placement="end"
        //         >
        //             <Offcanvas.Header closeButton>
        //                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
        //                     Offcanvas
        //                 </Offcanvas.Title>
        //             </Offcanvas.Header>
        //             <Offcanvas.Body>
        //             <Navbar.Collapse id="offcanvasNavbar-expand-sm">
        //                 <Nav
        //                     className="me-auto my-2 my-lg-0"
        //                     style={{ maxHeight: '100px' }}
        //                 >
        //                     <Link to={'/'} className='nav-link active'>
        //                         {navbar.get(props.lan).PrayTime}
        //                     </Link>
        //                     <Link to={'news'} className='nav-link'>
        //                         {navbar.get(props.lan).News}
        //                     </Link>
        //                     <Link to={'ramadan'} className='nav-link'>
        //                         {navbar.get(props.lan).Ramadan}
        //                     </Link>
        //
        //                     <Link to={'about'} className='nav-link'>
        //                         {navbar.get(props.lan).About}
        //                     </Link>
        //
        //                 </Nav>
        //
        //                 {/*<Navbar.Collapse className="justify-content-end">*/}
        //                 <Nav.Link href="https://www.facebook.com/takvim.tj">
        //                     <IconContext.Provider value={{ color: "dark", className: "global-class-name", size: 30 }}>
        //                         <Container>
        //                             <BsFacebook />
        //                         </Container>
        //                     </IconContext.Provider>
        //                 </Nav.Link>
        //
        //                 <LanguageChangerBlock className="me-2" lan={props.lan} theme={props.theme}/>
        //
        //                 <ThemeMenu className="me-lg-2" theme={props.theme}/>
        //
        //                 {/*</Navbar.Collapse>*/}
        //
        //             </Navbar.Collapse>
        //         </Navbar.Offcanvas>
        //     </Container>
        // </Navbar>
        )
}

export default Header;