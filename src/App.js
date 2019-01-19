import React, { Component } from 'react';

import WeatherCard from './WeatherCard';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

class App extends Component {

  state = { temps: [10] }

  componentDidMount() {
    fetch('https://samples.openweathermap.org/data/2.5/forecast?zip=94040&appid=b6907d289e10d714a6e88b30761fae22')
    .then(res => res.json())
    .then(json => {
      //console.log(json)
      const temps = json.list.map(element => {
        return Math.floor(element.main.temp * 1.8 - 460)
      })
      this.setState({ temps: temps })
    })
    .catch(e => console.log(e))
  }

  _handleCardClick = index => {
    const temps = this.state.temps.slice();
    temps[index] = 10;
    this.setState({
      temps: temps
    })
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.cards}>
          {this.state.temps.map((temp, i) => (
            <WeatherCard 
              temp={temp} 
              key={i} 
              onClick={() => this._handleCardClick(i)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
