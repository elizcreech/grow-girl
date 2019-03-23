import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class LightHoursLimits extends Component {
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
        const soilData = {lightUpperLimit:this.state.lightUpperLimit, 
            lightLowerLimit:this.state.lightLowerLimit}
        this.props.lightAddLimits(soilData)
    }
  render() {
      console.log(this.props.lightAddLimits)
    return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Set Hours of Light Exposure Limits
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lightUpperLimit"
            name="lightUpperLimit"
            label="Upper Limit (Max Hours of Light)"
            fullWidth
            autoComplete="lightUpperLimit"
            onChange={(e) => this.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lightLowerLimit"
            name="lightLowerLimit"
            label="Lower Limit (Min Hours of Light)"
            fullWidth
            autoComplete="lightLowerLimit"
            onChange={(e) => this.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Verify Lumens Units"
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