import React, { Component } from 'react';
import { Container } from 'reactstrap';

async function fetchAPI(player){
    const url = "http://localhost:5000/player/" + player + "/stats";
    console.log('url - ', url);
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

class PlayerDetail extends Component{
    constructor(props){
        super();

        this.state={
            player: props.player,
            playerStats: ''
        }
    }

    componentDidMount(){
        fetchAPI(this.state.player)
            .then(result => result)
            .then(result => this.state.playerStats = result)
            .then(() => console.log('player component - ', this.state.playerStats));
    }

    render(){
        return(
            <Container className="player-stats">
                <h1>{this.state.player}</h1>
            </Container>
        )
    }
}


// const PlayerDetail = (props) => {
//     const player = props.name;
//     var playerStats;
    // fetchAPI(player).then(result => playerStats = result).then(() => console.log(playerStats));
    // return(
    //     <React.Fragment>
    //         <Container>
    //             <h1>{player}</h1>
    //         </Container>
    //     </React.Fragment>
    // )
// };

export default PlayerDetail;