import React, { Component } from 'react'
import { connect } from 'react-redux'
import Plot from 'react-plotly.js';
import SoilMoistureLimits from './SoilMoistureLimits';
import Typography from '@material-ui/core/Typography';

import 'typeface-roboto';

class SoilMoisture extends Component {
  render() {
    const data = [
      {
        x: [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10],
        y: [71, 77, 76, 75, 73, 70, 69, 67, 65, 64],
        type: 'scatter',
        mode: 'lines+points',
        marker: {color: 'green'},
      }
      ,
      {type: 'bar', x: [1, 2, 3, 4, 5, 6, 7], y: [12, 12.5, 13, 12.75, 11, 11.25, 12]},
    ]

    return ( 
    <div>
      <h1>Volumetric Soil Moisture Data</h1>
        <Plot
        data={data}
        layout={ {width: 320, height: 240, title: 'Volumetric Soil Moisture Content'} }
      />
      <SoilMoistureLimits smAddLimits={this.props.smAddLimits} smUpperLimit={this.props.smUpperLimit}
        smLowerLimit={this.props.smLowerLimit} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
 smUpperLimit: state.smUpperLimit,
 smLowerLimit: state.smLowerLimit
})

const mapDispatchToProps = dispatch => ({
  smAddLimits: (soilData) => dispatch({ type: 'ADD_SOIL_LIMITS', payload: soilData})
})

export default connect(mapStateToProps, mapDispatchToProps)(SoilMoisture)
