import namaz from '../../assets/text/namaz';
import {Accordion, Alert, Table} from 'react-bootstrap';
import './style.css';
import Container from 'react-bootstrap/Container';

function IndexPage(props) {
    return (
        <div>
            <div className="container mainFlexText">
                <div className="row">
                    <div className="container" style={{
                        textAlign: "center",
                        margin:"20px 0 20px 0",
                    }}>
                        <Alert key={props.theme} variant={props.theme}>
                            {namaz.get(props.lan).AttentionText}
                        </Alert>

                        <div className="container" style={{
                            textAlign: "center",
                            margin:"20px 0 20px 0",
                        }}>
                            {namaz.get(props.lan).InfoText}
                        </div>

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
                            <Accordion defaultActiveKey={['-1']}>
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