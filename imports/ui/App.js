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
    this.state = {start: "none", select: false};
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let start = this.state.start;
    console.log(this.state.select);
    if (start == "none")
    {
      return (
        <div>
          <Title start={this.state.start} change={(start) => this.setState({start})} />
          <MapContainer google = {this.props.google} loc = {this.state}/>
        </div>
      )
    }
    else if (start == "create")
    {
      return (
        <div>
          <Title start={this.state.start} change={(start) => this.setState({start})} />
          <div id="mapBox">
            <MapContainer google = {this.props.google} loc = {this.state}/>
          </div>
          <Create change={(start) => this.setState({start})} select={(select) => this.setState({select})}/>
        </div>
      );
    }
    else if (start == "search")
    {
      return (
        <div>
          <Title start={this.state.start} change={(start) => this.setState({start})} />
          <div id="mapBox">
            <MapContainer google = {this.props.google} loc = {this.state}/>
          </div>
          <Search change={(start) => this.setState({start})}/>
        </div>
      );
    }

  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBmlSJGyprhqkW2ry1KEwTZGdzoFURGQ4A',
})(App)
