import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  //cityData is the argument from mapStateToProps: weather
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp * (9/5)) - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const { lon, lat} = cityData.city.coord;
    // const tempList = cityData.city.name.length;
    // console.log(tempList);


      return (
        <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /> </td>
          <td>{tempList}</td>
          <td><Chart data={temps} color="red" units="F"/></td>
          <td></td>
          <td><Chart data={pressures} color="green" units="hPa"/></td>
          <td></td>
          <td><Chart data={humidities} color="black" units="%"/></td>
        </tr>
      );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th></th>
            <th>Temperature (F)</th>
            <th></th>
            <th>Pressure (hPa)</th>
            <th></th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

function mapStateToProps({ weather }) {
  return { weather };
}


// function mapStateToProps(state) {
//   return { weather: state.weather };
// }


export default connect(mapStateToProps)(WeatherList);
//pulls in weather info from redux. Not exporting Weatherlist.  Exporting the new connected version
