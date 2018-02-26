import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./components/Header"
import Daily from "./components/Daily";
import Hourly from "./components/Hourly";
import Tides from "./components/Tides";
import Astro from "./components/Astro";
import axios from "axios";
import "./sass/main.scss"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      city: "",
      daily: [],
      hourly: [],
      tides: [],
      astro: []
    };
  }

  locationChanged(location) {
    this.setState({ location });

    if(location) {
      this.getWeather(location);
      this.getTides(location);
      this.getAstro(location);
    }
  }

  getWeather(location) {
    let url = `http://localhost:3000/api/forecast/${this.state.location.lat}/${this.state.location.lon}`;

    axios.get(url)
      .then((res) => {
        this.setState({
          hourly: res.data.hourly,
          daily: res.data.daily
        });
      })
      .catch((err) => {
        console.log(err);
      }); 
  }

  getTides(location) {
    let url = `http://localhost:3000/api/tides/${this.state.location.lat}/${this.state.location.lon}`;

    axios.get(url)
      .then((res) => {
        this.setState({
          tides: res.data.tides
        });
      })
      .catch((err) => {
        console.log(err);
      }); 
  }

  getAstro(location) {
    console.log("Get Astro");

    let url = `http://localhost:3000/api/astro/${this.state.location.lat}/${this.state.location.lon}`;

    axios.get(url)
      .then((res) => {
        console.log(res.data.astroTimes);
        this.setState({
          astro: res.data.astroTimes
        })
      })
      .catch((err) => {
        console.log(err);
      }); 
  }

  render() {
    return(
      <div>
        <Header doLocationSearch = { location => this.locationChanged(location) }/>
        <Hourly hourly = { this.state.hourly } />
        <Daily daily = { this.state.daily } />
        <Tides tides = { this.state.tides } />
        <Astro astros = { this.state.astro } />
      </div>
    )
  }
}

const wrapper = document.getElementById("app");
wrapper ? render(<App />, wrapper) : false;