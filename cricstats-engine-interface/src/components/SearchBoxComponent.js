import React from "react";
import { Button, Form, Label, Input, FormGroup, Row, Container} from "reactstrap";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


class SearchBox extends React.Component{
    constructor(){
        super();

        this.state={
            queryString: '',
            totalResults: 'None'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render(){
        // console.log(this.state.queryString, this.state.totalResults);
        return(
            <Container>
                <Form style={{"padding": "50px"}}>
                    <FormGroup style={{"padding": "20px"}} onChange={this.handleChange}>
                        <Row>
                            <Label htmlFor="queryString" style={{"textAlign": "left"}}>Query String </Label>
                        </Row>
                        <Row>
                            <Input type="text" name="queryString" id="queryString" 
                                placeholder="Query String [Example: top-order batsman]" style={{width: "500px", height: "35px", "borderRadius": 10}}/>
                        </Row>
                    </FormGroup>
                    <FormGroup style={{"padding": "0px 0px 20px 0px"}} onChange={this.handleChange}>
                        <Row>
                            <Label htmlFor="totalResults">Total Results [Number] </Label>
                        </Row>
                        <Row>
                            <Input type="text" name="totalResults" id="totalResults" 
                                placeholder="Number of search results [Example: 333]" style={{width: "500px", height: "35px", "borderRadius": 10}}/>
                        </Row>
                    </FormGroup>
                    <Link to={`/search/${this.state.queryString}/${this.state.totalResults}`}>
                        <Button type="submit" color="secondary" style={{height: "41px", width: "100px", "borderRadius": 10}}>
                                Search</Button>
                    </Link>
                </Form>
            </Container>
        )
    }
}

// const SearchBox = (props) => {
//     return (
//         <Container className="search-box">
//             <Form style={{"padding": "50px"}}>
//                 <FormGroup style={{"padding": "20px"}} onChange={props.handleChange}>
//                     <Row>
//                         <Label htmlFor="queryString" style={{"textAlign": "left"}}>Query String </Label>
//                     </Row>
//                     <Row>
//                         <Input type="text" name="searchField" id="queryString" 
//                             placeholder="Query String [Example: top-order batsman]" style={{width: "500px", height: "35px", "borderRadius": 10}}/>
//                     </Row>
//                 </FormGroup>
//                 <FormGroup style={{"padding": "0px 0px 20px 0px"}} onChange={props.handleChange}>
//                     <Row>
//                         <Label htmlFor="totalResults">Total Results [Number] </Label>
//                     </Row>
//                     <Row>
//                         <Input type="text" name="totalResults" id="totalResults" 
//                             placeholder="Number of search results [Example: 333]" style={{width: "500px", height: "35px", "borderRadius": 10}}/>
//                     </Row>
//                 </FormGroup>
//                     <Button type="submit" color="secondary" style={{height: "41px", width: "100px", "borderRadius": 10}} onClick={props.handleSubmit}>
//                             Search</Button>
//             </Form>
//         </Container>
//     )
// }

export default SearchBox;