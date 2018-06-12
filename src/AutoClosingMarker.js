import { Marker, InfoWindow } from "react-google-maps"
import React, { Component } from 'react';

export default class AutoClosingMarker extends Component{

    constructor(props){
        super(props);

        this.state = {
            open: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({open: !this.state.open})
    }

    render(){
        return <Marker
            key={this.props.locationName}
            position={this.props.position}
            onClick={this.onClick}
        >

            {
                this.state.open &&
                <InfoWindow onCloseClick={this.onClick}>
                    <p>{this.props.locationName}</p>
                </InfoWindow>
            }
        </Marker>
    }
}