import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class TemperatureLimits extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tempUpperLimit: '',
            tempLowerLimit: ''
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    handleSubmit () {
        const soilData = {tempUpperLimit:this.state.tempUpperLimit, 
            tempLowerLimit:this.state.tempLowerLimit}
        this.props.tempAddLimits(soilData )
    }
  render() {
    return (
     <React.Fragment>
     <Typography variant="h5" gutterBottom>
       Set High and Low Temperature Limits
     </Typography>
     <Typography variant="h8" gutterBottom>
      Current Lower Limit is set to {this.props.tempLowerLimit}      
      </Typography>
      <Typography variant="h8" gutterBottom>
      Current Upper Limit is set to {this.props.tempUpperLimit}
      </Typography>

     <Grid container spacing={24}>
       <Grid item xs={12} sm={6}>
         <TextField
           required
           id="tempUpperLimit"
           name="tempUpperLimit"
           label="High Temperature Limit"
           fullWidth
           autoComplete="tempUpperLimit"
           onChange={(e) => this.handleChange(e)}
         />
       </Grid>
       <Grid item xs={12} sm={6}>
         <TextField
           required
           id="tempLowerLimit"
           name="tempLowerLimit"
           label="Low Temperature Limit"
           fullWidth
           autoComplete="tempLowerLimit"
           onChange={(e) => this.handleChange(e)}
         />
      </Grid>
      <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Verify Temperture Units"
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
