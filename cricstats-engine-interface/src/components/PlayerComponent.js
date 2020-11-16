import React, { Component } from 'react';
import { Container } from 'reactstrap';

// var result;

async function fetchAPI(player){
    const url = "http://localhost:5000/player/" + player + "/stats";
    console.log('url - ', url);
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const PlayerDetail = (props) => {
    const player = props.name;
    var playerStats;
    fetchAPI(player).then(result => playerStats = result).then(() => console.log(playerStats));
    return(
        <React.Fragment>
            <Container>
                <h1>{player}</h1>
            </Container>
        </React.Fragment>
    )
};

export default PlayerDetail;