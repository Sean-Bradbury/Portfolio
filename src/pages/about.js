import React from "react"
import Head from "../shared/HeadShared"
import Nav from "../components/NavComponent"
import NextPageLink from "../components/NextPageLink"
import TimelineSection from "../components/TimelineSection"
import TimeLineData from "../data/timeline-data"
import Tabs from "../components/TabsComponent"
import Fade from "react-reveal/Fade"

export default function Home() {
  function createTimelineItem(item) {
    return (
      <TimelineSection
        key={item.id}
        dateFrom={item.dateFrom}
        dateTo={item.dateTo}
        company={item.company}
        contentText={item.contentText}
      />
    )
  }

  return (
    <div>
      <Nav />
      <Head
        title="Sean Bradbury | Full Stack Web Developer"
        metaDesc="Full Stack Web Developer, passionate about learning and development."
      />
      <section id="about">
        <Fade>
          <div className="about-content">
            <div className="about-content-left">
              <h1 className="heading-green">About</h1>
              <p>
                Hi, I’m Sean Bradbury. For the past 10 years I have worked at
                several web agencies as a search engine optimiser, senior paid
                marketer and a team leader.
                <br />
                <br />
                I have worked collaboratively with professionals from various
                disciplines and have picked up lots of knowledge along the way.
                <br />
                <br />
                I decided I wanted to switch careers and In the last two years
                I've been working hard to get better with web development. I
                absolutely love the constant growth I'm able to achieve through
                this profession.
                <br />
                <br />
                My analytical/logical side enjoys immersing in code, whereas my
                artistic side loves to get creative. I revel in the challenges
                of problem-solving and get excited by learning new technologies
                and frameworks.
                <br />
                <br />
              </p>
            </div>
            <div className="about-content-right">
              <div className="experience-container">
                <Tabs>
                  <div label="Work">
                    <p>Experience</p>
                    <div className="timeline-container">
                      {TimeLineData.slice(0).reverse().map(createTimelineItem)}
                    </div>
                  </div>
                  <div label="Personal">
                    <p>Personal</p>
                    <div className="personal-item">
                      <div className="personal-item-content">
                        <p>
                          Modern JavaScript From The Beginning - Course (22hrs)
                        </p>
                      </div>
                      <div className="personal-item-links">
                        <button className="btn-primary">
                          <a href="https://drive.google.com/file/d/1yNbAgANORqTnmvZ3s97VihgQKHd9wHsm/view?usp=sharing">
                            Certificate
                          </a>
                        </button>
                        <button className="btn-primary ml-1">
                          <a
                            href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"
                            target="_blank"
                            rel="noreferrer"
                            download="The-Web-Development-Bootcamp.pdf"
                          >
                            Course Link
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="personal-item">
                      <div className="personal-item-content">
                        <p>
                          The Complete 2020 Web Development Bootcamp - Course
                          (55hrs)
                        </p>
                      </div>
                      <div className="personal-item-links">
                        <button className="btn-primary">
                          <a href="https://drive.google.com/file/d/1Ff1Sp0H6TZzvoEIHhb2s8QueovWYP2Gg/view">
                            Certificate
                          </a>
                        </button>
                        <button className="btn-primary ml-1">
                          <a
                            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                            target="_blank"
                            rel="noreferrer"
                            download="The-Web-Development-Bootcamp.pdf"
                          >
                            Course Link
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="personal-item">
                      <div className="personal-item-content">
                        <p>
                          Modern HTML & CSS From The Beginning - Course (21hrs)
                        </p>
                      </div>
                      <div className="personal-item-links">
                        <button className="btn-primary">
                          <a href="https://drive.google.com/file/d/1wrXZnfGJrSOQX5Sv5wuBWtsMLEdyG0lk/view">
                            Certificate
                          </a>
                        </button>
                        <button className="btn-primary ml-1">
                          <a
                            href="https://www.udemy.com/course/modern-html-css-from-the-beginning/"
                            target="_blank"
                            rel="noreferrer"
                            download="Modern-HTML&CSS-From-The-Begining.pdf"
                          >
                            Course Link
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="personal-item">
                      <div className="personal-item-content">
                        <p>Web Design For Web Developers - Course (3hrs)</p>
                      </div>
                      <div className="personal-item-links">
                        <button className="btn-primary">
                          <a href="https://drive.google.com/file/d/1tCu1O-ScM8k1VucPvk3z6--ac7pAz7kf/">
                            Certificate
                          </a>
                        </button>
                        <button className="btn-primary ml-1">
                          <a
                            href="https://www.udemy.com/course/web-design-secrets/"
                            target="_blank"
                            rel="noreferrer"
                            download="Web-Design-For-Web-Developers.pdf"
                          >
                            Course Link
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </Fade>
        <div className="about-next-page-link-container">
          <Fade delay={4000}>
            <NextPageLink linkText="skills" linkLocation="/skills/" />
          </Fade>
        </div>
      </section>
    </div>
  )
}
