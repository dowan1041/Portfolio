import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import project2Img from '../images/schoolyellowbook.png';
import project1Img from '../images/CarpeDiem.png';
import project3Img from '../images/YOLO.png';
import img1 from '../images/GiphyAPI.png';
import img2 from '../images/CrystalCollector.png';
import img3 from '../images/TriviaGame.png';
import img4 from '../images/Eatdaburger.png';
import img5 from '../images/LIRIBOT.png'
import img6 from '../images/FriendFinder.png'
import img7 from '../images/WordGuessGame.png'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
   
    if(this.state.activeTab === 0){
      return(
        <div>
          <div className="projects-grid">
              {/* Project 1 */}
              <Grid>
                <Cell col={4} phone={12} tablet={4}>
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(' + project2Img + ') center / cover'}} >School Yellow Book</CardTitle>
                    <CardText>
                      Coloumbia Coding Bootcamp Group Project 1 {<br></br>} {<br></br>} This application helps you to find schools that fits to you. You can search schools by tutition, SAT/ACT scores, majors, and address. {<br></br>} {<br></br>} This app shows how I handle Express / node.js / My SQL / Heroku / Handlebars / Js / Postman / Dept Ed. API
                    </CardText>
                    <CardActions border>
                    {/* eslint-disable-next-line */}
                    <Button colored><a href="https://github.com/0dbtech/columbia-project2-group5" target = "_blank">GitHub</a></Button>
                    {/* eslint-disable-next-line */}  
                    <Button colored><a href="https://powerful-lake-85322.herokuapp.com/" target = "_blank">Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                  </Card>
                </Cell>
                <Cell col={4} phone={12} tablet={4}>
                    {/* Project 2 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(' + project1Img +') center / cover'}} >Carpe_Diem</CardTitle>
                    <CardText>
                      Coloumbia Coding Bootcamp Group Project 2 {<br></br>} {<br></br>} Event Searching App {<br></br>} {<br></br>} Carpe_Diem is a event searching App. This is designed to find some events near by me. It is used "Eventbrite API" and " Google API" to search the events by location.
                    </CardText>
                      <CardActions border>
                        {/* eslint-disable-next-line */}
                        <Button colored><a href="https://github.com/dowan1041/carpe_diem" target = "_blank">GitHub</a></Button>
                        {/* eslint-disable-next-line */}  
                        <Button colored><a href="https://dowan1041.github.io/carpe_diem/" target = "_blank">Live Demo</a></Button>
                      </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                </Cell>
                <Cell col={4} phone={12} tablet={4}>
                    {/* Project 3 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(' + project3Img +') center / cover'}} >YOLO</CardTitle>
                    <CardText>
                      Coloumbia Coding Bootcamp Group Project 3 {<br></br>} {<br></br>} This app helps to manage daily calories and suggests foods you can eat to controll calrories {<br></br>} {<br></br>} React.JS / HTML / CSS / Javascript / Bootstrap / Node JS / Express / Mongo DB / Mongoose / Passport Js / API : Nutritionix, Google Maps, FireBase  
                    </CardText>
                    <CardActions border>
                      {/* eslint-disable-next-line */}
                      <Button colored><a href="https://github.com/Alainrj/YOLO" target = "_blank">GitHub</a></Button>
                      {/* eslint-disable-next-line */}  
                      <Button colored><a href="https://lit-refuge-83703.herokuapp.com/" target = "_blank">Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                </Cell>
                <Cell col={4} phone={12} tablet={4}>
                {/* Project 7 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(' + img4 + ') center / cover'}} >Eat da Burger</CardTitle>
                  <CardText>
                  Eat da Burger is to manage/edit/delet/add menu of the burgers {<br></br>} {<br></br>} Skills : Mysql / Orm / Local Server/ Many npms
                  </CardText>
                  <CardActions border>
                  {/* eslint-disable-next-line */}
                    <Button colored><a href="https://github.com/dowan1041/burger" target = "_blank">GitHub</a></Button>
                  {/* eslint-disable-next-line */} 
                    <Button colored><a href="https://agile-mesa-85511.herokuapp.com/" target = "_blank">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </Cell>
              <Cell col={4} phone={12} tablet={4}>
                 {/* Project 8 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + img5 +') center / cover'}} >LIRI BOT</CardTitle>
                  <CardText>
                  This app helps you to find concerts, songs, movies that you are interested in. {<br></br>} {<br></br>} Skills : MySql / Orm / Local server / Many npms
                  </CardText>
                  <CardActions border>
                  {/* eslint-disable-next-line */}
                    <Button colored><a href="https://github.com/dowan1041/liri-node-app" target = "_blank">GitHub</a></Button>
                  {/* eslint-disable-next-line */}  
                    <Button colored><a href="https://drive.google.com/file/d/1hnb5O3tGs5aVzb8oEw0tltFMLTq8Wkar/view" target = "_blank">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </Cell>
              <Cell col={4} phone={12} tablet={4}>
                    {/* Project 9 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + img7 +') center / cover'}} >Word Guess Game</CardTitle>
                  <CardText>
                  This is a hangman game (guessing words game). {<br></br>} {<br></br>}  Skills : HTML / CSS / Javascript / Algorithm 
                  </CardText>
                  <CardActions border>
                  {/* eslint-disable-next-line */}
                    <Button colored><a href="https://github.com/dowan1041/Word-Guess-Game" target = "_blank">GitHub</a></Button>
                  {/* eslint-disable-next-line */}  
                    <Button colored><a href="https://dowan1041.github.io/Word-Guess-Game/" target = "_blank">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </Cell>
              <Cell col={4} phone={12} tablet={4}>
                    {/* Project 6 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + img3 +') center / cover'}} >Trivia Game</CardTitle>
                  <CardText>
                    Trivia Game is a quiz with timer app. {<br></br>} {<br></br>} Skills : HTML / Javascript / CSS / JQuery / Algorithm 
                  </CardText>
                  <CardActions border>
                  {/* eslint-disable-next-line */}
                    <Button colored><a href="https://github.com/dowan1041/TriviaGame" target = "_blank">GitHub</a></Button>
                  {/* eslint-disable-next-line */}  
                    <Button colored><a href="https://dowan1041.github.io/TriviaGame/" target = "_blank">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </Cell>
              <Cell col={4} phone={12} tablet={4}>
                {/* Project 5 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(' + img2 +') center / cover'}} >CRYSTALS COLLECTOR</CardTitle>
                  <CardText>
                    Crystal Collector Game is a guessing number game. {<br></br>} {<br></br>} Skills : HTML / Javascript / CSS / JQuery / Algorithm 
                  </CardText>
                  <CardActions border>
                  {/* eslint-disable-next-line */}
                    <Button colored><a href="https://github.com/dowan1041/unit-4-game" target = "_blank">GitHub</a></Button>
                  {/* eslint-disable-next-line */}  
                    <Button colored><a href="https://dowan1041.github.io/unit-4-game/" target = "_blank">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </Cell>
              <Cell col={4} phone={12} tablet={4}>
                        {/* Project 4 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + img1 +') center / cover'}} >GiphyAPI</CardTitle>
                  <CardText>
                    GiphyAPI is an app to search interesting giphy. {<br></br>} {<br></br>} Skills : Giphy API / JQuery  
                  </CardText>
                  <CardActions border>
                  {/* eslint-disable-next-line */}
                    <Button colored><a href="https://github.com/dowan1041/GiphyAPI" target = "_blank">GitHub</a></Button>
                  {/* eslint-disable-next-line */}  
                    <Button colored><a href="https://dowan1041.github.io/GiphyAPI/" target = "_blank">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </Cell>
              <Cell col={4} phone={12} tablet={4}>
                {/* Project 10 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '400px'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(' + img6 +') center / cover'}} >Friend Finder</CardTitle>
                  <CardText>
                  This application helps you to find people who have similar chacracter or similar interesting. {<br></br>} {<br></br>} Skills : Node Js / Express server / local server / and many npms 
                  </CardText>
                  
                  <CardActions border>
                  {/* eslint-disable-next-line */}
                    <Button colored><a href="https://github.com/dowan1041/Friend-Finder" target = "_blank">GitHub</a></Button>
                  {/* eslint-disable-next-line */}
                    <Button colored><a href="https://fast-temple-47738.herokuapp.com/" target = "_blank">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </Cell>
            </Grid>
              
              
              
        </div>
      
      
        </div>
        


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This my personal projects!</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Bootcamp Project</Tab>
          <Tab>Personal Work</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
