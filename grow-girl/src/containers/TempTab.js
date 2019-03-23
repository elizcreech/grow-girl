import React, { Component } from 'react'
import { connect } from 'react-redux'
import TemperatureLimits from './TemperatureLimits';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';


class TempTab extends Component {
  render() {
    return (
      <div>
        <h1>Temperature Data</h1>
        <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10],
            y: [71, 77, 76, 75, 73, 70, 69, 67, 65, 64],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'green'},
          }
        //   ,
        //   {type: 'bar', x: [1, 2, 3,4], y: [2, 5, 3,16]},
        ]}
        layout={ {width: 320, height: 240, title: 'Ten Day Temperature'} }
      />
      <TemperatureLimits tempAddLimits={this.props.tempAddLimits} tempUpperLimit={this.props.tempUpperLimit}
        tempLowerLimit={this.props.tempLowerLimit}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tempUpperLimit: state.tempUpperLimit,
  tempLowerLimit: state.tempLowerLimit
 })
 
 const mapDispatchToProps = dispatch => ({
   tempAddLimits: (soilData) => dispatch({ type: 'ADD_TEMP_LIMITS', payload: soilData})
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(TempTab)