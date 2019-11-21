import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import myProfilePic from '../images/DowanKimProfilePic.jpg'


class Resume extends Component {
  render() {
    const icon = {
      color: "navy",
      font: 'inherit',
      fontSize: '60px',
      padding: "5px"
    }
    return(
      <div>
        <Grid>
          <Cell col={4} phone={12} tablet={12}>
            <div style={{textAlign: 'center'}}>
              <img
                className="myProfilePic"
                src={myProfilePic}
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Dowan Kim</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a team player. <br></br> I'm happy to collaborate with other people on any projects. <br></br> I'm very punctual.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>19824 47th Ave 1FL Flushing NY 11358</p>
            <h5>Phone</h5>
            <p>(347) 210-1245</p>
            <h5>Email</h5>
            <p>dowan1041@gmail.com</p>
            <div>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/dowan-kim-886a0b173/" rel="noopener noreferrer" target="_blank" style= {icon}> 
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a href="https://github.com/dowan1041" rel="noopener noreferrer" target="_blank" style= {icon}>
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* <h5>Web</h5>
                <p>mywebsite.com</p> */}
            </div>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2009}
              endYear={2014}
              schoolName="Queens College, City University of New York"
              schoolDescription="Bachelor of Arts, Applied Mathematics"
               />

               <Education
                 startYear={"Jan, " + 2019}
                 endYear={"June, " + 2019}
                 schoolName="Columbia Engineering Coding Boot Camp"
                 schoolDescription="Certificated, Full Stack Development"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={"Current"}
              jobName="Math Tutor"
              jobDescription="Taught Algebra I, Algebra II, Geometry, Trigonometry, Pre-Calculus, Calculus, Statistics, SAT I, SAT II, ACT and AMC to 7th - 12th grade students"
              jobDescription2="Communicated with parents on students progress in individual and group sessions based on student feedback and assessments"
              />

              <Experience
                startYear={"Jun, " + 2014}
                endYear={"Sep, " + 2015}
                jobName="Director / Teacher"
                jobDescription= "Consulted students for college admission process and Developed strategic planning for class curriculum"
                jobDescription2= "Interviewed and hired training instructors, staff and instructor assistants"
                />

              <Experience
                startYear={"Sep, " + 2012}
                endYear={"Sep, " + 2013}
                jobName="Project Engineer"
                jobDescription= "Estimated quantities and costs of all project materials for owners review (with focus on LED light and ceiling materials)"
                jobDescription2= "Consulted clients, vendors, and personnel from other departments (including construction foremen) to discuss and formulate estimates and resolve issues"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={75}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
