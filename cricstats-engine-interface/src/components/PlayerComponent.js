import React, { Component } from 'react';
import { Media, Table } from 'reactstrap';

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
            .then(result => this.setState({playerStats: result}))
            .then(() => console.log('player component - ', this.state.playerStats.stats.twenty20));
    }

    render(){

        if(!this.state.playerStats){
            return (
                <React.Fragment />
            )
        }
        

        const teams_played_for = <div>
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <td><b> TEST </b></td>
                                                <td>{this.state.playerStats.stats.test.teams_played_for}</td>
                                            </tr>
                                            <tr>
                                                <td><b> ODI </b></td>
                                                <td>{this.state.playerStats.stats.odi.teams_played_for}</td>
                                            </tr>
                                            <tr>
                                                <td><b> T20I </b></td>
                                                <td>{this.state.playerStats.stats.t20i.teams_played_for}</td>
                                            </tr>
                                            <tr>
                                                <td><b> TWENTY20 </b></td>
                                                <td>{this.state.playerStats.stats.twenty20.teams_played_for}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

        const playerInfo = <div> 
                            <br/>
                            <div className="container">
                                <Media>
                                    <Media left href="#" className="center-block">
                                        <Media style={{"margin-top":"50px"}} object src={this.state.playerStats.image_url} alt="" />
                                    </Media>
                                    <Media body>
                                        <Media heading className="text-center"  style={{"margin-left":"-100px"}}> <h3><i> {this.state.playerStats.name} </i></h3> </Media>
                                        <p className="text-justify" style={{"margin-left":"50px"}}> {this.state.playerStats.profile} </p>
                                    </Media>
                                </Media>
                            </div>
                        </div>;
        
        const personalInfo = <div>
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <td><b> Country </b></td>
                                            <td> {this.state.playerStats.cricketing_nation} </td>
                                        </tr>
                                        <tr>
                                            <td><b> Birth Date </b></td>
                                            <td> {this.state.playerStats.birth_date} </td>
                                        </tr>
                                        <tr>
                                            <td><b> Birth Place </b></td>
                                            <td> {this.state.playerStats.birth_place} </td>
                                        </tr>
                                        <tr>
                                            <td><b> Role </b></td>
                                            <td> {this.state.playerStats.role} </td>
                                        </tr>
                                        <tr>
                                            <td><b> Batting Style </b></td>
                                            <td> {this.state.playerStats.bats}-handed batsmen</td>
                                        </tr>
                                        <tr>
                                            <td><b> Bowling Style </b></td>
                                            <td> {this.state.playerStats.bowls} arm {this.state.playerStats.bowling_style} </td>
                                        </tr>
                                    </tbody>
                                </Table> 
                            </div>;
        
        const battingStats = <div>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th> Batting</th>
                                            <th> T20I</th>
                                            <th> ODI </th>
                                            <th> Test </th>
                                            <th> t20i </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b> Innings Played </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall.innings : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall.innings : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall.innings : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall.innings : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Runs Scored </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall.runs : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall.runs : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall.runs : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall.runs : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Balls Faced </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall.balls : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall.balls : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall.balls : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall.balls : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Average </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall.avg : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall.avg : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall.avg : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall.avg : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Strike Rate </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall.sr : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall.sr : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall.sr : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall.sr : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Highest Score </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall.hs : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall.hs : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall.hs : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall.hs : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> 50s </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall["50s"] : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall["50s"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall["50s"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall["50s"] : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> 100s </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall["100s"] : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall["100s"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall["100s"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall["100s"] : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> 4s </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall["4s"] : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall["4s"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall["4s"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall["4s"] : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> 6s </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.batting.overall["6s"] : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.batting.overall["6s"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.batting.overall["6s"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.batting.overall["6s"] : '-'}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>;

        const bowlingStats =  <div>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th> Bowling</th>
                                            <th> TWENTY20</th>
                                            <th> ODI </th>
                                            <th> Test </th>
                                            <th> T20I </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b> Innings Played </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall.innings : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall.innings : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall.innings : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall.innings : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Overs </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall.overs : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall.overs : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall.overs : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall.overs : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Wickets </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall.wickets : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall.wickets : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall.wickets : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall.wickets : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Runs Conceeded </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall.runs : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall.runs : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall.runs : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall.runs : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Strike Rate </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall.sr : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall.sr : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall.sr : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall.sr : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Average </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall.avg : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall.avg : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall.avg : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall.avg : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Economy </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall.eco : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall.eco : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall.eco : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall.eco : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> 5-fers </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall["5w"] : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall["5w"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall["5w"] : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall["5w"] : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Best Bowling in an Innings </b></td>
                                            <td> {this.state.playerStats.stats.twenty20 ? this.state.playerStats.stats.twenty20.bowling.overall.bbi : '-'} </td>
                                            <td> {this.state.playerStats.stats.odi ? this.state.playerStats.stats.odi.bowling.overall.bbi : '-'}</td>
                                            <td> {this.state.playerStats.stats.test ? this.state.playerStats.stats.test.bowling.overall.bbi : '-'}</td>
                                            <td> {this.state.playerStats.stats.t20i ? this.state.playerStats.stats.t20i.bowling.overall.bbi : '-'}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>;

        return(
            <div className="app text-center" style={{"margin-left":"10px"}}> 
                <br/> 
                <div> 
                    <h2 style={{"margin-left":"50px"}}><b> PLAYER INFORMATION </b></h2>
                    {playerInfo}  
                </div>
                <br/> 
                <div style={{"margin-left":"500px", "margin-right":"350px"}}> 
                    <h2 className="text-center" style={{"margin-left":"50px"}}> Teams Played For </h2>
                    {teams_played_for}  
                </div>
                <br/> 
                <div style={{"margin-left":"500px", "margin-right":"350px"}}> 
                    <h2 className="text-center" style={{"margin-left":"50px"}}>Personal Information </h2>
                    {personalInfo}  
                </div>
                <br/> 
                <div style={{"margin-left":"500px", "margin-right":"350px"}}> 
                    <h2 className="text-center" style={{"margin-left":"75px"}}>Batting Stats </h2>  
                    {battingStats}
                </div>
                <br/> 
                <div style={{"margin-left":"500px", "margin-right":"350px"}}> 
                    <h2 className="text-center" style={{"margin-left":"75px"}}>Bowling Stats </h2>  
                    {bowlingStats}
                </div>
            </div>
        )
    }
}


export default PlayerDetail;