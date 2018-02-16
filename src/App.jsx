import React, { Component } from 'react';
import logo from './Foto.jpg';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { getMuiTheme } from 'material-ui/styles';
import { Tabs, Tab } from 'material-ui/Tabs' 
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, IconButton } from 'material-ui';
import { green500,brown500 } from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
  palette:{
    primary1Color: brown500,
    accent1Color:green500,
  }
})
class App extends Component {
  render() { 
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Tabs>
          <Tab label="me">
          <div style={{display:"Flex"}} >
          <div className="space"/>
            <Card className="card">
                
              <CardMedia overlay={<CardTitle title="Gerwin Bosch"
              subtitle="Software Engineer"/>}
            >
            <img className="image" src={logo}/>
            </CardMedia>
            <CardText>
            Icons to SM go here
              </CardText>
              <CardActions>
                <IconButton label="github"/>
                <IconButton label="linkedin"/>
                <IconButton label="twitter"/>
                </CardActions>
            </Card>
            <Card className="card">
            <CardTitle title="Programming, music and gaming" subtitle="The things I love" />               
            <CardText>
              <h3>Programming</h3>
              I've studied Informatics at Saxion Hogeschool Enschede. During 
            </CardText>
            <CardText>
            <h3>Music</h3>
            A big part of my live is music, currently i'm playing at two bands; <a href="www.dapapeldoorn.nl">Muziekvereniging DAP Apeldoorn</a> and the student band of <a>Prinses Juliana Beekbergen</a>.
            I'm currently playing baritone and tuba. I've been playing since I was 9. 
            </CardText>
            <CardText>
            <h3>Gaming</h3>
              Gaming is my goto distraction, I sometimes stream at twitch. The main genre's I play, are Grand Strategy, RPG's and Simulation games. 
            </CardText>
            </Card>
            <div className="space"/>
            </div>
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
