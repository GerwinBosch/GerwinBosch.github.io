import React from 'react';




import "./Portfolio.css"
import {Card, CardTitle, CardMedia, CardText} from "material-ui";
import LinkDale from '../icons/linkdale_logo.png'
import Logo from '../images/favicon.ico'

class Portfolio extends React.Component{
    render(){
        return (
            <div style={{display: 'flex'}}>
                <div className="space"/>
                <div className="wrapper">
                <Card className="card">
                    <CardTitle
                        title="LinkDaLe"
                        subtitle="Linked Data Learning Environment"
                    />
                    <CardMedia>
                        <img style={{minWidth: "150px",maxWidth: "150px", minHeight: "150px", maxHeight:"150px"}} src={LinkDale}/>
                    </CardMedia>
                    <CardText>
                        The creation of LinkDaLe is my thesis project. LinkDaLe is intended to be used in classrooms for teaching students about Linked Data
                    </CardText>
                </Card>
                <Card className="item">
                    <CardTitle
                        title="This site"
                        subtitle="An overview of who I am, what I did"
                    />
                    <CardMedia>
                        <img style={{minWidth: "150px",maxWidth: "250px", minHeight: "150px", maxHeight:"250px"}} src={Logo}/>
                    </CardMedia>
                    <CardText>

                    </CardText>
                </Card>
                <Card className="item">
                    <CardTitle
                        title="Beer timeline"
                        subtitle="An overview of breweries over time in the Netherlands"
                    />
                    <CardMedia>
                        <img style={{minWidth: "150px",maxWidth: "150px", minHeight: "150px", maxHeight:"150px"}} src={LinkDale}/>
                    </CardMedia>
                    <CardText>

                    </CardText>
                </Card>
                </div>
                <div className="space"/>

            </div>

        )
    }
}
export default Portfolio;