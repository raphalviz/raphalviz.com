import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  padding: 0 35px;
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background-color: #e4e4e4;
    top: 0;
    bottom: 0;
    margin-left: 15px;
  }
`

const TimeContent = styled.div`
  position: relative;
  margin-left: 40px;
  margin-bottom: 30px;

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #e4e4e4;
    left: -39px;
    top: 0px;
    margin-left: 8.5px;
    z-index: 1;
  }
`

const JobTitle = styled.h4`
  margin-bottom: 5px;
`

const JobCompany = styled.h5`
  margin-bottom: 10px;
`

const Bullet = styled.li`
  font-size: 0.825rem;
  line-height: 1rem;
`

const Timeline = () => {
  return (
    <Container>
      <TimeContent>
        <JobTitle>Marketing & Systems Administrator</JobTitle>
        <JobCompany>University of Toronto Scarborough</JobCompany>
        <h6>August 2018 - December 2019</h6>
        <ul>
          <Bullet>
            Developed, designed and implemented user-focused marketing
            promotional materials, including social media, print and
            e-newsletters
          </Bullet>
          <Bullet>
            Provided support of a complex information system (Orbis) including
            end user support, troubleshooting issues, and improving the
            day-to-day functioning and user experience
          </Bullet>
          <Bullet>
            Worked with content management systems to maintain and develop
            websites that comply with the Accessibility for Ontarians with
            Disabilities Act (AODA) standards
          </Bullet>
        </ul>
      </TimeContent>
      <TimeContent>
        <JobTitle>Lead Developer</JobTitle>
        <JobCompany>Ark75 Creatiive</JobCompany>
        <h6>May 2018 - Present</h6>
        <ul>
          <Bullet>
            Designed and built websites for clients with WordPress
          </Bullet>
          <Bullet>
            Planned out projects by creating wireframes and mockups for
            potential web designs that were later developed into fully
            functional and responsive websites
          </Bullet>
          <Bullet>
            Utilized and customized different themes and plugins with PHP, HTML
            & CSS to provide a more tailored experience
          </Bullet>
        </ul>
      </TimeContent>
      <TimeContent>
        <JobTitle>Web Development Assistant</JobTitle>
        <JobCompany>University of Toronto Scarborough</JobCompany>
        <h6>May 2018 - Present</h6>
        <ul>
          <Bullet>
            Designed and built websites for clients with WordPress
          </Bullet>
          <Bullet>
            Planned out projects by creating wireframes and mockups for
            potential web designs that were later developed into fully
            functional and responsive websites
          </Bullet>
          <Bullet>
            Utilized and customized different themes and plugins with PHP, HTML
            & CSS to provide a more tailored experience
          </Bullet>
        </ul>
      </TimeContent>
    </Container>
  )
}

export default Timeline