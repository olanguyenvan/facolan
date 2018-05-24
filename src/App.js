import React, { Component } from 'react';
import './App.css';
import MapView from "./MapView";
import FacebookSearcher from "./FacebookSearcher";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mapResults: []
        };
        this.setMapResults = this.setMapResults.bind(this);
    }

    setMapResults(newMapResults){
        this.setState({mapResults: newMapResults})
    }

    render() {
        return (
            <div className="App">
                <FacebookSearcher
                    setMapResults={this.setMapResults}
                />

                <MapView
                    markerLocationsData={this.state.mapResults}
                />
            </div>
        );
    }
}

export default App;