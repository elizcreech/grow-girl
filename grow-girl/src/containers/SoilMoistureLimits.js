import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class SoilMoistureLimits extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            smUpperLimit: '',
            smLowerLimit: ''
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    handleSubmit () {
        const soilData = {smUpperLimit:this.state.smUpperLimit, 
            smLowerLimit:this.state.smLowerLimit}
        this.props.smAddLimits(soilData )
    }
  render() {
     // console.log(this.props.smAddLimits)
    return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Set Soil Moisture Limits
      </Typography>
      <Typography variant="h8" gutterBottom>
      Current Lower Limit is set to {this.props.smLowerLimit}      
      </Typography>
      <Typography variant="h8" gutterBottom>
      Current Upper Limit is set to {this.props.smUpperLimit}
      </Typography>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="smUpperLimit"
            name="smUpperLimit"
            label="Upper Limit (Volumetric)"
            fullWidth
            autoComplete="smUpperLimit"
            onChange={(e) => this.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="smLowerLimit"
            name="smLowerLimit"
            label="Lower Limit (Volumetric)"
            fullWidth
            autoComplete="smLowerLimit"
            onChange={(e) => this.handleChange(e)}
          />
       </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Verify Volumetric Units"
          />
        </Grid>
    </Grid>
    <div className="control">
                          <button onClick={this.handleSubmit} className="button is-primary" type="submit">
                              Submit
                          </button>
        </div>
        
    </React.Fragment>
        
    )
  }
}