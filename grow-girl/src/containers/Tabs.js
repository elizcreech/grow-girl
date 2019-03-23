import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TempTab from './TempTab.js'
import LightHours from './LightHours.js';
import SoilMoisture from './SoilMoisture.js';
import GrowHome from './GrowHome';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Grow Home" />
            <Tab label="Temperature" />
            <Tab label="Light Hours" />
            <Tab label="Soil Moisture" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><GrowHome /></TabContainer>}
        {value === 1 && <TabContainer><TempTab /></TabContainer>}
        {value === 2 && <TabContainer><LightHours /></TabContainer>}
        {value === 3 && <TabContainer><SoilMoisture /></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);