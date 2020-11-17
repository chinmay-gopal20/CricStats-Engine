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

    currentPlayer = {
        "name": "SHAMARH BROOKS",
        "cricketing_nation": "West Indies",
        "birth_date": " October 01, 1988",
        "birth_place": " St. Michael",
        "bats": " Right",
        "bowls": "Right",
        "role": " Batsman",
        "bowling_style": " Legbreak",
        "stats": {
            "test": {
                "teams_played_for": "West Indies",
                "batting": {
                    "2019": {
                        "innings": "5",
                        "runs": "174",
                        "balls": "375",
                        "outs": "5",
                        "avg": "34.8",
                        "sr": "46.4",
                        "hs": "111",
                        "50s": "1",
                        "100s": "1",
                        "4s": "25",
                        "6s": "1",
                        "dot_percent": "78.7"
                    },
                    "2020": {
                        "innings": "6",
                        "runs": "195",
                        "balls": "402",
                        "outs": "6",
                        "avg": "32.5",
                        "sr": "48.5",
                        "hs": "68",
                        "50s": "2",
                        "100s": "0",
                        "4s": "24",
                        "6s": "2",
                        "dot_percent": "78.9"
                    },
                    "overall": {
                        "innings": "11",
                        "runs": "369",
                        "balls": "777",
                        "outs": "11",
                        "avg": "33.5",
                        "sr": "47.5",
                        "hs": "111",
                        "50s": "3",
                        "100s": "1",
                        "4s": "49",
                        "6s": "3",
                        "dot_percent": "78.8"
                    }
                },
                "bowling": {
                    "overall": {}
                }
            },
            "twenty20": {
                "teams_played_for": "St Kitts and Nevis Patriots, Barbados Tridents",
                "batting": {
                    "2016": {
                        "innings": "4",
                        "runs": "71",
                        "balls": "50",
                        "outs": "3",
                        "avg": "23.7",
                        "sr": "142.0",
                        "hs": "35",
                        "50s": "0",
                        "100s": "0",
                        "4s": "2",
                        "6s": "5",
                        "dot_percent": "30.0"
                    },
                    "2017": {
                        "innings": "2",
                        "runs": "57",
                        "balls": "49",
                        "outs": "2",
                        "avg": "28.5",
                        "sr": "116.3",
                        "hs": "37",
                        "50s": "0",
                        "100s": "0",
                        "4s": "1",
                        "6s": "4",
                        "dot_percent": "42.9"
                    },
                    "2019": {
                        "innings": "8",
                        "runs": "165",
                        "balls": "125",
                        "outs": "8",
                        "avg": "20.6",
                        "sr": "132.0",
                        "hs": "53",
                        "50s": "1",
                        "100s": "0",
                        "4s": "15",
                        "6s": "5",
                        "dot_percent": "36.0"
                    },
                    "2020": {
                        "innings": "2",
                        "runs": "13",
                        "balls": "14",
                        "outs": "2",
                        "avg": "6.5",
                        "sr": "92.9",
                        "hs": "8",
                        "50s": "0",
                        "100s": "0",
                        "4s": "2",
                        "6s": "0",
                        "dot_percent": "57.1"
                    },
                    "overall": {
                        "innings": "16",
                        "runs": "306",
                        "balls": "238",
                        "outs": "15",
                        "avg": "20.4",
                        "sr": "128.6",
                        "hs": "53",
                        "50s": "1",
                        "100s": "0",
                        "4s": "20",
                        "6s": "14",
                        "dot_percent": "37.4"
                    }
                },
                "bowling": {
                    "overall": {}
                }
            }
        },
        "profile": "Shamarh Brooks rose to fame from junior cricket after representing the West Indies Under-19 side in the 2006 junior World Cup. After making his first-class debut, his seniors noticed his tactical nous and he was elevated to the captain's position for the Barbados Under-19 team in 2007.\n\nAs a player, though, Brooks was not particularly impressive and the shield of a sharp and astute cricketing mind could only take him so far if he could not put the weight of runs or wickets behind him to back it up. He had the reputation of being a solid top-order batsman and a decent leg-break bowler who could turn the ball, but the all-rounder was certainly lacking a breakthrough performance of note.\n\nHe was, however, selected to lead the Under-19 team for the World Cup in 2008 but couldn’t fair too well with the bat or ball. The fact that his leadership didn’t take his team too far in the tournament didn’t help his cause much either. Brooks went back to grind it out in domestic cricket, and decided to focus on his batting rather than his leggies.\n\nHis numbers still flatter to deceive as he meanders around the A side of the West Indies, but he has managed to break into the St. Kitts franchise in the CPL and continues to play for them as of the 2018 edition of the tournament.\n\nBy Rishi Roy\nAs of September 2018",
        "image_url": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c152745/shamarh-brooks.jpg"
    };

    componentDidMount(){
        fetchAPI(this.state.player)
            .then(result => result)
            .then(result => this.setState({playerStats : result}))
            .then(() => console.log('player component - ', this.state.playerStats));
    }

    render(){

        const playerInfo = <div> 
                            <br/>
                            <div className="container">
                                <Media>
                                    <Media left href="#" className="center-block">
                                        <Media object src={this.currentPlayer.image_url} alt="" />
                                    </Media>
                                    <Media body>
                                        <Media heading className="text-center"> <h3> {this.currentPlayer.name} </h3> </Media>
                                        <p className="text-justify"> {this.currentPlayer.profile} </p>
                                    </Media>
                                </Media>
                            </div>
                        </div>;
        
        const personalInfo = <div>
                                <Table dark bordered>
                                    <tbody>
                                        <tr>
                                            <td> Country </td>
                                            <td> {this.currentPlayer.cricketing_nation} </td>
                                        </tr>
                                        <tr>
                                            <td> Birth Date </td>
                                            <td> {this.currentPlayer.birth_date} </td>
                                        </tr>
                                        <tr>
                                            <td> Birth Place </td>
                                            <td> {this.currentPlayer.birth_place} </td>
                                        </tr>
                                        <tr>
                                            <td> Role </td>
                                            <td> {this.currentPlayer.role} </td>
                                        </tr>
                                        <tr>
                                            <td> Batting Style </td>
                                            <td> {this.currentPlayer.bats}-handed batsmen</td>
                                        </tr>
                                        <tr>
                                            <td> Bowling Style </td>
                                            <td> {this.currentPlayer.bowls} arm {this.currentPlayer.bowling_style} </td>
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
                                            <th> IPL </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> Innings Played </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall.innings : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall.innings : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall.innings : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall.innings : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Runs Scored </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall.runs : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall.runs : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall.runs : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall.runs : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Balls Faced </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall.balls : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall.balls : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall.balls : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall.balls : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Average </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall.avg : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall.avg : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall.avg : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall.avg : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Strike Rate </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall.sr : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall.sr : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall.sr : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall.sr : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Highest Score </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall.hs : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall.hs : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall.hs : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall.hs : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> 50s </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall["50s"] : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall["50s"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall["50s"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall["50s"] : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> 100s </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall["100s"] : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall["100s"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall["100s"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall["100s"] : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> 4s </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall["4s"] : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall["4s"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall["4s"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall["4s"] : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> 6s </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.batting.overall["6s"] : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.batting.overall["6s"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.batting.overall["6s"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.batting.overall["6s"] : '-'}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>;

        const bowlingStats =  <div>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th> Bowling</th>
                                            <th> T20I</th>
                                            <th> ODI </th>
                                            <th> Test </th>
                                            <th> IPL </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> Innings Played </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall.innings : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall.innings : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall.innings : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall.innings : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Overs </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall.overs : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall.overs : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall.overs : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall.overs : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Wickets </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall.wickets : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall.wickets : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall.wickets : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall.wickets : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Runs Conceeded </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall.runs : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall.runs : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall.runs : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall.runs : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Strike Rate </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall.sr : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall.sr : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall.sr : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall.sr : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Average </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall.avg : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall.avg : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall.avg : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall.avg : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Economy </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall.economy : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall.economy : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall.economy : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall.economy : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> 5-fers </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall["5W"] : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall["5W"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall["5W"] : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall["5W"] : '-'}</td>
                                        </tr>
                                        <tr>
                                            <td> Best Bowling in an Innings </td>
                                            <td> {this.currentPlayer.stats.twenty20 ? this.currentPlayer.stats.twenty20.bowling.overall.bbi : '-'} </td>
                                            <td> {this.currentPlayer.stats.odi ? this.currentPlayer.stats.odi.bowling.overall.bbi : '-'}</td>
                                            <td> {this.currentPlayer.stats.test ? this.currentPlayer.stats.test.bowling.overall.bbi : '-'}</td>
                                            <td> {this.currentPlayer.stats.ipl ? this.currentPlayer.stats.ipl.bowling.overall.bbi : '-'}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>;

        console.log(this.currentPlayer.stats.twenty20);

        return(
            <div className="app" style={{"margin-left":"10px"}}> 
                <br/> 
                <div> 
                    <h2 style={{"margin-left":"-800px"}}> Player Information </h2>
                    {playerInfo}  
                </div>
                <div style={{"margin-left":"350px", "margin-right":"500px"}}> 
                    <h2 className="text-left"> Personal Information </h2>
                    {personalInfo}  
                </div>
                <div style={{"margin-left":"350px", "margin-right":"500px"}}> 
                    <h2 className="text-left"> Batting Stats </h2>  
                    {battingStats}
                </div>
                <div style={{"margin-left":"350px", "margin-right":"500px"}}> 
                    <h2 className="text-left"> Bowling Stats </h2>  
                    {bowlingStats}
                </div>
            </div>
        )
    }
}


export default PlayerDetail;