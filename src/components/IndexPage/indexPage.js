import namaz from '../../assets/text/namaz';
import {Alert, Table} from 'react-bootstrap';

function IndexPage(props) {
    return (
        <div>
            <h1>
                Main Page
            </h1>
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

                        <Table striped bordered hover>
                            <tbody>
                            <tr>
                                <td>{namaz.get(props.lan).Fajr}</td>
                                <td>04:56</td>
                            </tr>
                            <tr>
                                <td>{namaz.get(props.lan).Dhuhr}</td>
                                <td>12:40</td>
                            </tr>
                            <tr>
                                <td>{namaz.get(props.lan).Asr}</td>
                                <td>17:40</td>
                            </tr>
                            <tr>
                                <td>{namaz.get(props.lan).Maghrib}</td>
                                <td>19:15</td>
                            </tr>
                            <tr>
                                <td>{namaz.get(props.lan).Isha}</td>
                                <td>20:44</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;