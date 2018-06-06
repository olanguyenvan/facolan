import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((mapProps) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 50.692241, lng: 21.717988 }}
    >
        {mapProps.markerLocationsData.map(
            markerLocationData => <Marker
                key={markerLocationData.name}
                position={{lat: markerLocationData.latitude, lng: markerLocationData.longitude}}
                onClick={mapProps.onClick}
            >

                {
                    mapProps.isOpen &&
                    <InfoWindow onCloseClick={mapProps.onClick}>
                        <p>{markerLocationData.name}</p>
                    </InfoWindow>
                }
            </Marker>
        )}
    </GoogleMap>
));


export default class MapView extends Component{

    constructor(props) {
        super(props);

        this.state = {
            zoom: 7,
            isOpen: false
        };
        this.handleToggleOpen = this.handleToggleOpen.bind();
    }

    handleToggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render(){
        let googleUrl = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_KEY + "&v=3.exp&libraries=geometry,drawing,places";

        return <MyMapComponent
            googleMapURL={googleUrl}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            markerLocationsData={this.props.markerLocationsData}
            onClick={this.handleToggleOpen}
            isOpen={this.state.isOpen}
        />
    }
}