import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import { Title } from './title.js'
import { Search } from './search.js'
import { Create } from './create.js'

import MapContainer from './MapContainer.js'
import {GoogleApiWrapper} from 'google-maps-react';

class App extends Component
{
  constructor(props){
    super(props);
    this.state = {start: "none", select: false, principle: 'none', points: []};
  }

  render() {
    let start = this.state.start;
    let select = this.state.select;
    let principle = this.state.principle;
    let points = this.state.points;
    if (start == "none")
    {
      return (
        <div>
          <Title start={start} change={(start) => this.setState({start})} />
          <article id="content">
            <section id="mapBox"> <MapContainer google = {this.props.google} loc = {this.state}/></section>
          </article>

        </div>
      )
    }
    else if (start == "create")
    {
      if (select)
      {
        return (
          <div>
            <Title start={start} change={(start) => this.setState({start})} />
            <article id="content">
              <section id="mapBox"> <MapContainer google = {this.props.google} loc = {this.state}/></section>
              <Create change={(start) => this.setState({start})} select={(select) => this.setState({select})}/>
            </article>
          </div>
        );
      }
      else {
        return (
          <div>
            <Title start={start} change={(start) => this.setState({start})} />
            <article id="content">
              <section id="mapBox"> <MapContainer google = {this.props.google} loc = {this.state}/></section>
              <Create change={(start) => this.setState({start})} select={(select) => this.setState({select})}/>
            </article>
          </div>
        );
      }

    }
    else if (start == "search")
    {
      return (
        <div>
          <Title start={start} change={(start) => this.setState({start})} />
          <article id="content">

            <section id="mapBox"> <MapContainer google = {this.props.google} loc = {this.state}/></section>
            <Search findL={(principle) => this.setState({principle})} getP={(points) => this.setState({points})}/>

          </article>
        </div>
      );
    }

  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBmlSJGyprhqkW2ry1KEwTZGdzoFURGQ4A',
})(App)
