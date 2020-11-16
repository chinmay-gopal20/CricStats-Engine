import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderPlayerCard({player}){
    const playerName = player.name.toLowerCase().replace(' ', '-')
    return (
        <Card style={{'flex': 3, 'background': 'white', 'width': '10rem', 'borderColor': 'black', 'borderWidth': 10}}>
            <Link to={`/player/${playerName}`}>
                <CardImg width="100%" src={player.image} alt={player.name}/>
                <CardBody>
                    <CardTitle tag="h5">{player.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-4 text-secondary">{player.nation}</CardSubtitle>
                </CardBody>
            </Link>
        </Card>
    )
}

// async function fetchAPI(queryString, totalResults) {
//     if (!totalResults){
//         totalResults = 'None'
//     }
//     const url = "http://localhost:5000/query?query=" + queryString + "&n=" + totalResults;
//     const response = await fetch(url);
//     const json = await response.json();
//     return json;
// }

const Results = (props) => {

    try{
        if (props.searchResults['players']){
            const count = props.searchResults.count;
            const players = props.searchResults.players;
            const player = players.map((each) => {
                return(
                    <Col md={4}>
                        <RenderPlayerCard player={each} />
                    </Col>
                )
            })
            return(
                <Container className="results">
                    <div className="row">
                        <hr style={{'height': '1px', 'backgroundColor': 'rgb(111, 224, 158)'}} />
                        <br></br>
                    </div>
                    <div className="col-12">
                        <h3><b><i>Total Search Results - {count}</i></b></h3>
                        <br></br>
                        <br></br>
                    </div>
                    <Row style={{'display': 'flex', 'flexDirection': 'row', 'gap': '75px', 'paddingLeft': '125px',
                                'flexWrap': 'wrap'}}>
                        {player}
                    </Row>
                </Container>
            )
        }
        else{
            return(
                <React.Fragment></React.Fragment>
            )
        }
    }catch(error){
        console.log('Inside ResultsComponents catch - ', error);
    }
}

export default Results;