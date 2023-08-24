import {ButtonGroup, NavDropdown} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../redux/reducers/languageReducer';
import './style.css'
import Container from 'react-bootstrap/Container';

const LanguageChangerBlock = (props) => {

    const dispatch = useDispatch()

    let theme = "outline-" + (props.theme === "dark"? "light": "dark")

    return (
            <ButtonGroup >
                {/*<DropdownButton as={ButtonGroup} title={lan} id="bg-nested-dropdown" variant="outline-dark">*/}
                {/*    <Dropdown.Item*/}
                {/*        className="dropdown-item-short" eventKey="1" onClick={() => dispatch(changeLanguage('tj'))}>*/}
                {/*        tj*/}
                {/*    </Dropdown.Item>*/}

                {/*    <Dropdown.Item*/}
                {/*        className="dropdown-item-short" eventKey="2" onClick={() => dispatch(changeLanguage('en'))}>*/}
                {/*        en*/}
                {/*    </Dropdown.Item>*/}

                {/*    <Dropdown.Item*/}
                {/*        className="dropdown-item-short" eventKey="2" onClick={() => dispatch(changeLanguage('ru'))}>*/}
                {/*        ru*/}
                {/*    </Dropdown.Item>*/}
                {/*</DropdownButton>*/}
                <Container>
                    <NavDropdown
                        title={props.lan} variant={theme} className="me-2"
                        drop="down-centered"
                        style={{margin:"5px"}}
                    >
                        <NavDropdown.Item
                            className="dropdown-item-short" eventKey="1" onClick={() => dispatch(changeLanguage('tj'))}>
                            <Container >
                                tj
                            </Container>
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item
                            className="dropdown-item-short" eventKey="2" onClick={() => dispatch(changeLanguage('en'))}>
                            <Container>
                                en
                            </Container>
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item
                            className="dropdown-item-short" eventKey="3" onClick={() => dispatch(changeLanguage('ru'))}>
                            <Container >
                                ru
                            </Container>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Container>

            </ButtonGroup>
    )
}

export default LanguageChangerBlock