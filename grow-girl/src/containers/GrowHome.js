import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import splash from '../images/agriculture-splash.jpg'

export default class GrowHome extends Component {
    render() {
        
      return (
        <div>
          <h1>Welcome to Grow Girl!</h1>
          <h3> Grow Girl is an exciteing new tool you can use to monitor the health of your plants.</h3>
          <h3>You can follow the progress of botany biom from seedling to growth to bloom and fuit stages.</h3>
          <img src={splash} />
        </div>

      )
    }
  }