import React, { Component } from 'react'
import { connect } from 'react-redux'
import LightHoursLimits from './LightHoursLimits';
import Plot from 'react-plotly.js';

class LightHours extends Component {
  render() {
    return (
      <div>
        <h1>Light Data</h1>
        <Plot
        data={[
          // {
          //   x: [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10],
          //   y: [71, 77, 76, 75, 73, 70, 69, 67, 65, 64],
          //   type: 'scatter',
          //   mode: 'lines+points',
          //   marker: {color: 'green'},
          // }
          // ,
          {type: 'bar', x: [1, 2, 3, 4, 5, 6, 7], y: [12, 12.5, 13, 12.75, 11, 11.25, 12]},
        ]}
        layout={ {width: 320, height: 240, title: 'Hours of > 450 lux light'} }
      />
      <LightHoursLimits lightAddLimits={this.props.lightAddLimits} lightUpperLimit={this.props.lightUpperLimit}
        lightLowerLimit={this.props.lightLowerLimit}/>
      
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  lightUpperLimit: state.lightUpperLimit,
  lightLowerLimit: state.lightLowerLimit
 })
 
 const mapDispatchToProps = dispatch => ({
   lightAddLimits: (soilData) => dispatch({ type: 'ADD_LIGHT_LIMITS', payload: soilData})
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(LightHours)
