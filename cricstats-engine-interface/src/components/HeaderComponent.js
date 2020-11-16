import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../App.css'

const Header = (props) => {
    return(
        <Container className='jumbotron'>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className='Title' style={{'fontFamily': "cursive", "fontSize": 40}}>Cricstats Engine</h1>
                </Container>
            </Jumbotron>
        </Container>
    )
}

export default Header;