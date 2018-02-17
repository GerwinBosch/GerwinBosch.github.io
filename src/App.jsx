import React, {Component} from 'react';
import logo from './Foto.jpg';
import './App.css';
import {MuiThemeProvider} from 'material-ui/styles';
import {getMuiTheme} from 'material-ui/styles';
import {Tabs, Tab} from 'material-ui/Tabs'
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, IconButton, Avatar, FontIcon} from 'material-ui';
import {green500, brown500} from 'material-ui/styles/colors';
import CodeIcon from 'material-ui/svg-icons/action/code'
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: brown500,
        accent1Color: green500,
    }
})

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Tabs>
                    <Tab label="me">
                        <div style={{display: "Flex"}}>
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
                                <CardTitle title="Programming, music and gaming" subtitle="The things I love"/>
                                <Card>
                                    <CardHeader
                                        avatar={<CodeIcon/>}
                                        title={<CardTitle title="Programming"/>}
                                        actAsExpander
                                        showExpandableButton
                                    >

                                    </CardHeader>
                                    <CardText expandable>
                                        I've studied Informatics at Saxion Hogeschool Enschede.
                                        During my studies I've learned to create software with most types of software
                                        languages,
                                        and how to manage these kinds of projects.
                                        <br/><br/>
                                        What interest me in programming and informatics is that data can be used/bend in
                                        ways the creator of it cannot imagine.
                                        <br/><br/>I chose Big Data / Machine learning as my specialization because of
                                        the notion that within large amount of seemingly unrelated data, a relation can
                                        be found which can be a solution to a problem.
                                        <br/><br/>Another thing that interests me in the field is giving data a form to
                                        display to people, which (hopefully) makes them understand the data more.
                                        That's one of the reasons I realy enjoyed creating my thesis project LinkDaLe, a
                                        Linked Data Learning environment.
                                    </CardText>
                                </Card>
                                <Card>
                                    <CardTitle title="Music" actAsExpander showExpandableButton/>
                                    <CardText expandable>
                                        A big part of my live is music, currently i'm playing at two bands; <a
                                        href="www.dapapeldoorn.nl">Muziekvereniging DAP Apeldoorn</a> and the student
                                        band of <a>Prinses Juliana Beekbergen</a>.
                                        I'm currently playing baritone and tuba. I've been playing since I was 9.
                                        During my travels I've been through most of the Netherlands with a few
                                        performences in Belgium and Germany.
                                        <CardMedia>
                                            {/* TODO: Add facebook background image */}
                                        </CardMedia>
                                    </CardText>
                                </Card>
                                <Card>
                                    <CardTitle title="Gaming" actAsExpander showExpandableButton/>
                                    <CardText expandable>
                                        Gaming is my goto distraction, I sometimes stream at twitch. The main genre's I
                                        play, are Grand Strategy, RPG's and Simulation games.
                                    </CardText>
                                </Card>
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
