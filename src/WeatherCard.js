import React from 'react';

const styles = {
  card: {
    padding: 20,
    border: 'solid',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    maxWidth: 250,
    margin: 10
  },
  cold: {
    backgroundColor: 'blue'
  },
  warm: {
    backgroundColor: 'orange'
  }
}

class WeatherCard extends React.Component {
  render() {
    let style = styles.card;
    style = { ...style, backgroundColor: (this.props.temp < 30 ? 'blue' : 'orange')}
    return(
      <div onClick={this.props.onClick}>
        <div style={style}>WeatherCard {this.props.temp}</div>
      </div>
    )
  }
}

WeatherCard.defaultProps = {
  temp: 20
}

export default WeatherCard;
