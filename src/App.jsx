import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { Tabs, Tab } from 'material-ui/Tabs' 
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, IconButton } from 'material-ui';
class App extends Component {
  render() { 
    return (
      <MuiThemeProvider>
        <Tabs>
          <Tab label="me">
            <Card>
                
              <CardMedia overlay={<CardTitle title="Gerwin Bosch"
              subtitle="Software Engineer"/>}
            >
            <img src={logo}/>
            </CardMedia>
            <CardText>
              some text
              </CardText>
              <CardActions>
                <IconButton label="github"/>
                <IconButton label="linkedin"/>
                <IconButton label="twitter"/>
                </CardActions>
            </Card>
          </Tab>
          <Tab label="portfolio">
          </Tab>
          <Tab label="blog">
          </Tab>
        </Tabs>  
      </MuiThemeProvider>
    );
  }
}

export default App;
