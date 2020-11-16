import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Header from "./HeaderComponent";
import SearchBox from "./SearchBoxComponent";
import Results from "./ResultsComponent";
import PlayerDetail from "./PlayerComponent";

  
async function fetchAPI(queryString, totalResults) {
    if (!totalResults){
        totalResults = 'None'
    }
    const url = "http://localhost:5000/query?query=" + queryString + "&n=" + totalResults;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField: '',
            totalResults: '',
            searchResults: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        fetchAPI(this.state.searchField, this.state.totalResults).then(result => result).then(result => {
            this.setState({
                searchResults: result
            }, () => {
                console.log('search results - ', this.state.searchResults);
                // this.props.history.push('/search?q=' + this.searchField + '&n=' + this.totalResults);
            })
        })
    }

    render(){
        const SearchPage = () => {
            return <SearchBox searchField={this.searchField} totalResults={this.totalResults} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        }

        const ResultsPage = () => {
            return <Results searchResults={this.state.searchResults} />
        }

        const PlayerPage = ({ match }) => {
            console.log('player page - ', match);
            return <PlayerDetail name={match.params.name}/>
        }

        return(
            <div>
                <Header />
                {/* <SearchBox handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Results searchResults={this.state.searchResults} /> */}
                <Switch>
                    <Route path='/home' render={props =>
                        <div>
                            <SearchPage />
                            <ResultsPage />
                        </div>
                        } />
                    <Route exact path='/player/:name' component={ PlayerPage } />
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);

{/* <Route path='/home' render={props =>
    <div>
        <SearchPage />
        <ResultsPage />
    </div>
    } /> */}