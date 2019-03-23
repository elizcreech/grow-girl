import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function SoilMoistureAddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Soil Moisture Limits
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="smUpperLimit"
            name="smUpperLimit"
            label="Upper Limit (Volumetric)"
            fullWidth
            autoComplete="sUpperLimit"
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
          />
       </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Verify Volumetric Units"
          />
        </Grid>
    </Grid>
    </React.Fragment>
  );
}