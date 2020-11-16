import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Header from "./HeaderComponent";
import SearchBox from "./SearchBoxComponent";
import Results from "./ResultsComponent";
import PlayerDetail from "./PlayerComponent";


class Main extends React.Component{

    render(){
        const SearchPage = () => {
            return <SearchBox searchField={this.searchField} totalResults={this.totalResults} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        }

        const ResultsPage = ({ match }) => {
            console.log('match - ', match)
            return <Results queryString={match.params.queryString} totalResults={match.params.totalResults}/>
        }

        const PlayerPage = ({ match }) => {
            return <PlayerDetail player={match.params.name}/>
        }

        return(
            <div>
                <Header />
                {/* <SearchBox handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Results searchResults={this.state.searchResults} /> */}
                <Switch>
                    <Route path='/home' component={SearchPage} />
                    <Route path={`/search/:queryString/:totalResults`} component={ResultsPage}/>
                    <Route exact path='/player/:name' component={ PlayerPage } />
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);