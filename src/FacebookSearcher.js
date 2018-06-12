import React, { Component } from 'react';

import graph from "fb-react-sdk";


export default class FacebookSearcher extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputFieldValue: "",
        };
        graph.setAccessToken(process.env.REACT_APP_FACEBOOK_KEY);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.getResults = this.getResults.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    updateInputValue(e){
        this.setState({inputFieldValue: e.target.value});
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            console.log("enter");
            this.getResults();
        }
    }

    getResults(){
        const search = "search?q=" + this.state.inputFieldValue + "&type=place&fields=name,location";
        graph.get(search, function (err, res) {
            let locationsData = res.data.map( result => {return {
                    name: result.name,
                    longitude: result.location.longitude,
                    latitude: result.location.latitude,
            }});
            this.props.setMapResults(locationsData);
        }.bind(this));
    }

    render(){
        return <div>
            <input type="text" placeholder="Search..." onChange={this.updateInputValue} onKeyPress={this.handleKeyPress} />
            <input type="button" value="ok" id="addpix" onClick={this.getResults}/>
        </div>
    }
}