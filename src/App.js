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
        this.cokolwiek = this.cokolwiek.bind(this);
    }

    setMapResults(newMapResults){
        this.setState({mapResults: newMapResults})
    }

    cokolwiek(){
        console.log("Cokolwiek")
    }

    render() {
        return (
            <div className="App">
                <br/>
                <img src="https://image.ibb.co/e7oRLy/33899692_1939751936094778_51910319064219648_n.png" height="100"/>
                <br/> <br/>
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