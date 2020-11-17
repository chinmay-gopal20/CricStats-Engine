import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderPlayerCard({player}){
    const playerName = player.name.toLowerCase().replace(' ', '-');
    return (
        <Card style={{'flex': 1, 'background': 'white', 'width': '10rem', 'borderWidth': 5}}>
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

async function fetchAPI(queryString, totalResults) {
    if (!totalResults){
        totalResults = 'None'
    }
    const url = "http://localhost:5000/query?query=" + queryString + "&n=" + totalResults;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}


class Results extends React.Component{
    constructor(props){
        super();

        this.state = {
            queryString: props.queryString,
            totalResults: props.totalResults,
            players: '',
            count: ''
        }
    }

    componentDidMount(){
        fetchAPI(this.state.queryString, this.state.totalResults)
            .then(result => result)
            .then(result => {
                this.setState({
                    players: result['players'],
                    count: result['count']
                }, () => {
                    console.log('search results - ', typeof(result['players']));
                })
            })
    }

    render(){
        // console.log('search results inside render - ', this.state.searchResults);
        const player = Array.from(this.state.players).map((each) => {
            return(
                <Col md={2}  key={each.name.toLowerCase().replace(' ', '-')}>
                    <RenderPlayerCard player={each} />
                </Col>
            )
        })

        return(
            <Container className="results">
                <div className="col-12">
                    <h2><b><i>Query String - {this.state.queryString}</i></b></h2>
                    <h3><b><i>Total Search Results - {this.state.count}</i></b></h3>
                    <br></br>
                    <br></br>
                </div>
                <Row style={{'display': 'flex', 'flexDirection': 'row', 'gap': '50px', 'flexWrap': 'wrap', 'paddingLeft': '150px'}}>
                    {player}
                </Row>
            </Container>       
        )
    }
}

export default Results;