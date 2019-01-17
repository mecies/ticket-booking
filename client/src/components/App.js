import React, { Component } from "react";
import MovieBrowser from "../components/MovieBrowser/movieBrowser.container";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <MovieBrowser />
            </MuiThemeProvider>
        );
    }
}

export default App; 