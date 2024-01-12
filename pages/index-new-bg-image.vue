<template>
  <Layout
    :no-sidebar="true"
    :background="'backgroundImg'"
    backgroundImg="'images/bg.jpg'"
  >
    <Header :no-sidebar="true" />
    <div class="card-started" id="home-card">
      <!--
  Profile
-->
      <div class="profile">
        <!-- profile image -->
        <div class="slide" style="background-image: url(images/bg.jpg)"></div>

        <!-- profile photo -->
        <div class="image">
          <img src="images/profile.png" alt="" />
        </div>

        <!-- profile titles -->
        <div class="title">Ryan Adlard</div>
        <!--<div class="subtitle">Web Designer</div>-->
        <TypingAnimation />

        <!-- profile socials -->
        <div class="social">
          <a target="_blank" href="https://dribbble.com/"
            ><span class="fa fa-dribbble"></span
          ></a>
          <a target="_blank" href="https://twitter.com/"
            ><span class="fa fa-twitter"></span
          ></a>
          <a target="_blank" href="https://github.com/"
            ><span class="fa fa-github"></span
          ></a>
          <a target="_blank" href="https://www.spotify.com/"
            ><span class="fa fa-spotify"></span
          ></a>
          <a target="_blank" href="https://stackoverflow.com/"
            ><span class="fa fa-stack-overflow"></span
          ></a>
        </div>

        <!-- profile buttons -->
        <div class="lnks">
          <a href="#" class="lnk">
            <span class="text">Download CV</span>
            <span class="ion ion-archive"></span>
          </a>
          <a
            href="#"
            class="lnk discover"
            @click="navFunction.activeSection('contacts')"
          >
            <span class="text">Contact Me</span>
            <span class="arrow"></span>
          </a>
        </div>
      </div>
    </div>

    <ActiveSection :sectionName="'about'">
      <!--
        About
      -->
      <div class="content about">
        <!-- title -->
        <div class="title">About Me</div>

        <!-- content -->
        <div class="row">
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="text-box">
              <p>
                I am Ryan Adlard, web designer from USA, California. I have rich
                experience in web site design and building and customization,
                also I am good at wordpress. I love to talk with you about our
                unique.
              </p>
            </div>
          </div>
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="info-list">
              <ul>
                <li><strong>Age . . . . .</strong> 24</li>
                <li><strong>Residence . . . . .</strong> USA</li>
                <li><strong>Freelance . . . . .</strong> Available</li>
                <li><strong>Address . . . . .</strong> California, USA</li>
              </ul>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>

      <!--
        Services
      -->
      <div class="content services">
        <!-- title -->
        <div class="title">My Services</div>

        <!-- content -->
        <div class="row service-items border-line-v">
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-code"></span>
              </div>
              <div class="name">
                <span> Web Development </span>
              </div>
              <div class="desc">
                <div>
                  <p>
                    Modern and mobile-ready website that will help you reach all
                    of your marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-music"></span>
              </div>
              <div class="name">
                <span> Music Writing </span>
              </div>
              <div class="desc">
                <div>
                  <p>
                    Music copying, writing, creating, transcription, arranging
                    and composition services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-buysellads"></span>
              </div>
              <div class="name">
                <span> Advetising </span>
              </div>
              <div class="desc">
                <div>
                  <p>
                    Advertising services include television, radio, print, mail,
                    and web apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-gamepad"></span>
              </div>
              <div class="name">
                <span> Game Development </span>
              </div>
              <div class="desc">
                <div>
                  <p>
                    Developing memorable and unique mobile android, ios and
                    video games.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>

      <!--
        Price Tables
      -->
      <div class="content pricing">
        <!-- title -->
        <div class="title">Pricing</div>

        <!-- content -->
        <div class="row pricing-items">
          <!-- pricing item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="pricing-item">
              <div class="icon"><i class="fa fa-battery-half"></i></div>
              <div class="name">Basic</div>
              <div class="amount">
                <span class="dollar">$</span>
                <span class="number">22</span>
                <span class="period">hour</span>
              </div>
              <div class="feature-list">
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li class="disable">Music Writing</li>
                  <li class="disable">Photography <strong>new</strong></li>
                </ul>
              </div>
              <div class="lnks">
                <a href="#" class="lnk">
                  <span class="text">Buy Basic</span>
                </a>
              </div>
            </div>
          </div>

          <!-- pricing item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="pricing-item">
              <div class="icon"><i class="fa fa-battery-full"></i></div>
              <div class="name">Pro</div>
              <div class="amount">
                <span class="dollar">$</span>
                <span class="number">48</span>
                <span class="period">hour</span>
              </div>
              <div class="feature-list">
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li>Music Writing</li>
                  <li>Photography <strong>new</strong></li>
                </ul>
              </div>
              <div class="lnks">
                <a href="#" class="lnk">
                  <span class="text">Buy Pro</span>
                </a>
              </div>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

      <!--
        Fun Fact
      -->
      <div class="content fuct">
        <!-- title -->
        <div class="title">Fun Fact</div>

        <!-- content -->
        <div class="row fuct-items">
          <!-- fuct item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="fuct-item">
              <div class="icon"><span class="fa fa-music"></span></div>
              <div class="name">80 Albumes Listened</div>
            </div>
          </div>

          <!-- fuct item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="fuct-item">
              <div class="icon"><span class="fa fa-trophy"></span></div>
              <div class="name">15 Awards Won</div>
            </div>
          </div>

          <!-- fuct item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="fuct-item">
              <div class="icon"><span class="fa fa-coffee"></span></div>
              <div class="name">1 000 Cups of coffee</div>
            </div>
          </div>

          <!-- fuct item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="fuct-item">
              <div class="icon"><span class="fa fa-flag"></span></div>
              <div class="name">10 Countries Visited</div>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

      <!--
        Clients
      -->
      <div class="content clients">
        <!-- title -->
        <div class="title">Clients</div>

        <!-- content -->
        <div class="row client-items">
          <!-- client item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="client-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_1.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <!-- client item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="client-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_2.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <!-- client item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="client-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_3.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <!-- client item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="client-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_4.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

      <!-- Quote -->
      <div class="content quote">
        <!-- title -->
        <div class="title">
          <span>Quote</span>
        </div>

        <!-- content -->
        <div class="row">
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="revs-item">
              <div class="text">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div class="user">
                <div class="img">
                  <img src="images/profile.png" alt="Ryan Adlard" />
                </div>
                <div class="info">
                  <div class="name">Ryan Adlard</div>
                  <div class="company">Web Designer</div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </ActiveSection>
    <ActiveSection :sectionName="'resume'">
      <!--
        Resume
      -->
      <div class="content resume">
        <!-- title -->
        <div class="title">Resume</div>

        <!-- content -->
        <div class="row">
          <!-- experience -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="fa fa-briefcase"></i></div>
              <div class="name">Experience</div>
            </div>
            <div class="resume-items">
              <div class="resume-item border-line-h active">
                <div class="date">2013 - Present</div>
                <div class="name">Art Director</div>
                <div class="company">Facebook Inc.</div>
                <p>
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2011 - 2012</div>
                <div class="name">Front-end Developer</div>
                <div class="company">Google Inc.</div>
                <p>
                  Monitored technical aspects of the front-end delivery for
                  several projects.
                </p>
              </div>
              <div class="resume-item">
                <div class="date">2009 - 2010</div>
                <div class="name">Senior Developer</div>
                <div class="company">Abc Inc.</div>
                <p>Optimize website performance using latest technology.</p>
              </div>
            </div>
          </div>

          <!-- education -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="fa fa-university"></i></div>
              <div class="name">Education</div>
            </div>
            <div class="resume-items">
              <div class="resume-item border-line-h">
                <div class="date">2006 - 2008</div>
                <div class="name">Art University</div>
                <div class="company">New York</div>
                <p>
                  Bachelor's Degree in Computer Science ABC Technical Institute,
                  Jefferson, Missouri
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2005 - 2006</div>
                <div class="name">Programming Course</div>
                <div class="company">Paris</div>
                <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
              </div>
              <div class="resume-item">
                <div class="date">2004 - 2005</div>
                <div class="name">Web Design Course</div>
                <div class="company">London</div>
                <p>
                  Converted Photoshop layouts to web pages using HTML, CSS, and
                  JavaScript
                </p>
              </div>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

      <!--
        Skills
      -->
      <div class="content skills">
        <!-- title -->
        <div class="title">My Skills</div>

        <!-- content -->
        <div class="row">
          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-paint-brush"></i></div>
                <div class="name">Design</div>
              </div>
              <ul>
                <li class="border-line-h">
                  <div class="name">Web Design</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Write Music</div>
                  <div class="progress">
                    <div class="percentage" style="width: 65%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Photoshop</div>
                  <div class="progress">
                    <div class="percentage" style="width: 75%"></div>
                  </div>
                </li>
                <li>
                  <div class="name">Graphic Design</div>
                  <div class="progress">
                    <div class="percentage" style="width: 85%"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list dotted">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-flag"></i></div>
                <div class="name">Languages</div>
              </div>
              <ul>
                <li class="border-line-h">
                  <div class="name">English</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">German</div>
                  <div class="progress">
                    <div class="percentage" style="width: 60%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Italian</div>
                  <div class="progress">
                    <div class="percentage" style="width: 30%"></div>
                  </div>
                </li>
                <li>
                  <div class="name">French</div>
                  <div class="progress">
                    <div class="percentage" style="width: 70%"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list circles">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-code"></i></div>
                <div class="name">Coding</div>
              </div>
              <ul>
                <SkillProgress :skills="skills" />
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-list"></i></div>
                <div class="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div class="name">Website hosting</div>
                </li>
                <li>
                  <div class="name">iOS and android apps</div>
                </li>
                <li>
                  <div class="name">Create logo design</div>
                </li>
                <li>
                  <div class="name">Design for print</div>
                </li>
                <li>
                  <div class="name">Modern and mobile-ready</div>
                </li>
                <li>
                  <div class="name">Advertising services include</div>
                </li>
                <li>
                  <div class="name">Graphics and animations</div>
                </li>
                <li>
                  <div class="name">Search engine marketing</div>
                </li>
              </ul>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

      <!--
        Testimonials
      -->
      <div class="content testimonials">
        <!-- title -->
        <div class="title">Testimonials</div>

        <!-- content -->
        <div class="row testimonials-items">
          <!-- client item -->
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="revs-carousel default-revs">
              <Testimonials />
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>
    </ActiveSection>

    <!--
    Card - Works
  -->
    <ActiveSection :sectionName="'works'">
      <WorkIsotope />
    </ActiveSection>

    <!--
    Card - Blog
  -->
    <Blogs />

    <!--
    Card - Contacts
  -->
    <Contact />
  </Layout>
</template>

<script>
import ActiveSection from "../src/components/ActiveSection.vue";
import Blogs from "../src/components/Blogs.vue";
import Contact from "../src/components/Contact.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Header from "../src/layout/Header.vue";
import Layout from "../src/layout/Layout.vue";
import { navFunction } from "../src/navFunction";
export default {
  name: `index-new-bg-image`,
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "css/new-skin/new-skin.css",
        },
        {
          rel: "stylesheet",
          href: "css/demos/demo-1-colors.css",
        },
      ],
    };
  },
  data() {
    return {
      navFunction,
      skills: [
        { name: "WordPress", value: 90 },
        { name: "PHP / MYSQL", value: 75 },
        { name: "Angular / JavaScript", value: 85 },
        { name: "HTML / CSS", value: 95 },
      ],
    };
  },
  components: {
    Layout,
    Header,
    TypingAnimation,
    ActiveSection,
    Contact,
    Blogs,
    WorkIsotope,
    SkillProgress,
    Testimonials,
  },
};
</script>
