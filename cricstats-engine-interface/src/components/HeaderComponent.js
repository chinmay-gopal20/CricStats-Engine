import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../App.css'

const Header = (props) => {
    return(
        <div>
            <Jumbotron style={{"backgroundColor": "rgb(111, 224, 158)" }}>
                <Container fluid>
                    <h1 className='Title' style={{'fontFamily': "cursive", "fontSize": 40}}>Cricstats Engine</h1>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Header;