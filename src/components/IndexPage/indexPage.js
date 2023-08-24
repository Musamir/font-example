import namaz from '../../assets/text/namaz';
import {Accordion, Alert, Table} from 'react-bootstrap';
import './style.css';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

function IndexPage(props) {


    let themeColor = (props.theme === "dark"? "black": "white")
    let themeOpositeColor = (props.theme === "dark"? "white": "black")

    let themeColorVariant = "outline-" + props.theme
    let themeOpositeColorVariant =  "outline-" + (props.theme === "dark"? "light": "dark")


    return (
        <div>
            <div className="container mainFlexText">
                <div className="row">
                    <div className="container" style={{
                        textAlign: "center",
                        margin:"20px 0 20px 0",
                    }}>

                        <Dropdown className="m-1">
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                Душанбе
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Душанбе</Dropdown.Item>
                                <Dropdown.Item >Айни</Dropdown.Item>
                                <Dropdown.Item >Ашт</Dropdown.Item>
                                <Dropdown.Item >Бӯстон</Dropdown.Item>
                                <Dropdown.Item >Ваҳдат</Dropdown.Item>
                                <Dropdown.Item >Истаравшан</Dropdown.Item>
                                <Dropdown.Item >Исфара</Dropdown.Item>
                                <Dropdown.Item >Конибодом</Dropdown.Item>
                                <Dropdown.Item >Кӯлоб</Dropdown.Item>
                                <Dropdown.Item >Қӯрғонтеппа</Dropdown.Item>
                                <Dropdown.Item >Мурғоб</Dropdown.Item>
                                <Dropdown.Item >Норак</Dropdown.Item>
                                <Dropdown.Item >Панҷакент</Dropdown.Item>
                                <Dropdown.Item >Рашт</Dropdown.Item>
                                <Dropdown.Item >Турсунзода</Dropdown.Item>
                                <Dropdown.Item >Ҳисор</Dropdown.Item>
                                <Dropdown.Item >Хоруғ</Dropdown.Item>
                                <Dropdown.Item >Хуҷанд</Dropdown.Item>
                                <Dropdown.Item >Шаҳритус</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                        <Alert key={props.theme} variant={props.theme}>
                            {namaz.get(props.lan).AttentionText}
                        </Alert>

                        <Container style={{
                            textAlign: "center",
                            margin:"20px 0 20px 0",
                            background: themeColor,
                            color: themeOpositeColor
                        }}>
                            {namaz.get(props.lan).InfoText}
                        </Container>

                        <Table striped bordered>
                            <tbody>
                                <tr>
                                    <td>{namaz.get(props.lan).Fajr.Name}</td>
                                    <td>04:56</td>
                                </tr>
                                <tr>
                                    <td>{namaz.get(props.lan).Dhuhr.Name}</td>
                                    <td>12:40</td>
                                </tr>
                                <tr>
                                    <td>{namaz.get(props.lan).Asr.Name}</td>
                                    <td>17:40</td>
                                </tr>
                                <tr>
                                    <td>{namaz.get(props.lan).Maghrib.Name}</td>
                                    <td>19:15</td>
                                </tr>
                                <tr>
                                    <td>{namaz.get(props.lan).Isha.Name}</td>
                                    <td>20:44</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Container>
                            <Accordion defaultActiveKey={['-1']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{namaz.get(props.lan).Fajr.Name}</Accordion.Header>
                                    <Accordion.Body>
                                        {namaz.get(props.lan).Fajr.Info}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>{namaz.get(props.lan).Dhuhr.Name}</Accordion.Header>
                                    <Accordion.Body>
                                        {namaz.get(props.lan).Dhuhr.Info}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>{namaz.get(props.lan).Asr.Name}</Accordion.Header>
                                    <Accordion.Body>
                                        {namaz.get(props.lan).Asr.Info}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>{namaz.get(props.lan).Maghrib.Name}</Accordion.Header>
                                    <Accordion.Body>
                                        {namaz.get(props.lan).Maghrib.Info}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>{namaz.get(props.lan).Isha.Name}</Accordion.Header>
                                    <Accordion.Body>
                                        {namaz.get(props.lan).Isha.Info}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;