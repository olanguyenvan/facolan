import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import AutoClosingMarker from "./AutoClosingMarker";


const MyMapComponent = withScriptjs(withGoogleMap((mapProps) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 50.692241, lng: 21.717988 }}
    >
        {mapProps.markerLocationsData.map(
            markerLocationData => <AutoClosingMarker
                key={markerLocationData.name}
                locationName={markerLocationData.name}
                position={{lat: markerLocationData.latitude, lng: markerLocationData.longitude}}
                />
        )}
    </GoogleMap>
));


export default class MapView extends Component{

    constructor(props) {
        super(props);

        this.state = {
            zoom: 7,
            markers: []
        };
    }

    componentWillReceiveProps(newProps){
        this.setState({markers: newProps.markerLocationsData}, () => {
            this.state.markers.map(marker => marker.isOpen = false)
        })
    }


    render(){
        let googleUrl = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_KEY + "&v=3.exp&libraries=geometry,drawing,places";

        return <MyMapComponent
            googleMapURL={googleUrl}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            markerLocationsData={this.state.markers}
        />
    }
}