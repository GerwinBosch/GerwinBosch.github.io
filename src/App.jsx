import React, {Component} from 'react';
import logo from './images/Foto.jpg';
import './App.css';
import {MuiThemeProvider} from 'material-ui/styles';
import {getMuiTheme} from 'material-ui/styles';
import {Tabs, Tab} from 'material-ui/Tabs';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FontIcon,
} from 'material-ui';
import {green500, brown500} from 'material-ui/styles/colors';
import CodeIcon from 'material-ui/svg-icons/action/code';
import MusicNote from 'material-ui/svg-icons/image/music-note';
import Gaming from 'material-ui/svg-icons/hardware/videogame-asset';
import Background from './images/Forests.jpg';
import Portfolio from "./Portfolio/Portfolio";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: brown500,
    accent1Color: green500,
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      informaticsOpen: true,
      musicOpen: false,
    };
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Tabs
              style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                height: '100vh',
              }}
          >
            <Tab label="me">
              <div style={{display: 'flex'}}>
                <div className="space"/>
                <div className="wrapper">
                  <Card className="card">

                    <CardMedia overlay={<CardTitle title="Gerwin Bosch"
                                                   subtitle="Software Engineer"/>}
                    >
                      <img  className="image" src={logo}/>
                    </CardMedia>
                    <CardActions>
                      <div className="actions">
                        <div className="space"/>
                        <a className="icon"
                           href="https://github.com/GerwinBosch">
                          <FontIcon className="fab fa-github"/>
                        </a>
                        <a className="icon"
                           href="https://www.linkedin.com/in/gerwinbosch/">
                          <FontIcon className="fab fa-linkedin"/>
                        </a>
                        <a className="icon"
                           href="https://twitter.com/BoschGerwin">
                          <FontIcon className="fab fa-twitter"/>
                        </a>
                        <a className="icon"
                           href="https://www.twitch.tv/barriton">
                          <FontIcon className="fab fa-twitch"/>
                        </a>
                        <div className="space"/>
                      </div>
                    </CardActions>
                  </Card>
                  <Card className="card">
                    <CardTitle title="Programming, music and gaming"
                               subtitle="The things I love"/>
                    <Card expanded={this.state.informaticsOpen}
                          onExpandChange={(state) => {
                            state ?
                                this.setState(
                                    {informaticsOpen: true, musicOpen: false}) :
                                null;
                          }}>
                      <CardHeader
                          avatar={<CodeIcon/>}
                          title="Programming"
                          subtitle="Creating functions where there were none before"
                          actAsExpander
                      >

                      </CardHeader>
                      <CardText expandable>
                        I've studied Informatics at Saxion Hogeschool Enschede.
                        During my studies I've learned to create software with
                        most types of software
                        languages,
                        and how to manage these kinds of projects.
                        <br/><br/>
                        What interest me in programming and informatics is that
                        data can be used/bend in
                        ways the creator of it cannot imagine.
                        <br/><br/>I chose Big Data / Machine learning as my
                        specialization because of
                        the notion that within large amount of seemingly
                        unrelated
                        data, a relation can
                        be found which can be a solution to a problem.
                        <br/><br/>Another thing that interests me in the field
                        is
                        giving data a form to
                        display to people, which (hopefully) makes them
                        understand
                        the data more.
                        That's one of the reasons I realy enjoyed creating my
                        thesis project LinkDaLe, a
                        Linked Data Learning environment.
                      </CardText>
                    </Card>
                    <Card expanded={this.state.musicOpen}
                          onExpandChange={(state) => {
                            state ?
                                this.setState(
                                    {informaticsOpen: false, musicOpen: true}) :
                                null;
                          }}>
                      <CardHeader
                          avatar={<MusicNote/>}
                          title="Music"
                          subtitle="Lighten up the word with sound"
                          actAsExpander
                      />
                      <CardText expandable>
                        A big part of my live is music, currently i'm playing at
                        two bands; <a
                          href="http://www.dapapeldoorn.nl">Muziekvereniging DAP
                        Apeldoorn</a> and the student
                        band of <a>Prinses Juliana Beekbergen</a>.
                        I'm currently playing baritone and tuba. I've been
                        playing
                        since I was 9.
                        During my travels I've been through most of the
                        Netherlands with a few
                        performences in Belgium and Germany.
                      </CardText>

                    </Card>
                    <Card expanded={!this.state.informaticsOpen &&
                    !this.state.musicOpen} onExpandChange={(state) => {
                      state ?
                          this.setState(
                              {informaticsOpen: false, musicOpen: false}) :
                          null;
                    }}>
                      <CardHeader
                          avatar={<Gaming/>}
                          title="Gaming"
                          subtitle="influencing worlds other than your own"
                          actAsExpander
                      />
                      <CardText expandable>
                        Gaming is my goto distraction, I sometimes stream at
                        twitch. The main genre's I
                        play, are Grand Strategy, RPG's and Simulation games.
                      </CardText>
                    </Card>
                  </Card>
                </div>
                <div className="space"/>
              </div>
            </Tab>
            <Tab label="Portfolio">
                <Portfolio/>
            </Tab>
            {/*<Tab label="blog">*/}
            {/*</Tab>*/}
          </Tabs>
        </MuiThemeProvider>
    );
  }
}

export default App;
