import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {ButtonGroup} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../redux/reducers/languageReducer';
import './style.css'

const LanguageChangerBlock = ({lan}) => {

    console.log('LanguageChangerBlock lan = ', lan)

    const dispatch = useDispatch()

    return (
        <div>
            <ButtonGroup>
                <DropdownButton as={ButtonGroup} title={lan} id="bg-nested-dropdown" variant="outline-dark">
                    <Dropdown.Item
                        className="dropdown-item-short" eventKey="1" onClick={() => dispatch(changeLanguage('tj'))}>
                        tj
                    </Dropdown.Item>

                    <Dropdown.Item
                        className="dropdown-item-short" eventKey="2" onClick={() => dispatch(changeLanguage('en'))}>
                        en
                    </Dropdown.Item>

                    <Dropdown.Item
                        className="dropdown-item-short" eventKey="2" onClick={() => dispatch(changeLanguage('ru'))}>
                        ru
                    </Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </div>
    )
}

export default LanguageChangerBlock