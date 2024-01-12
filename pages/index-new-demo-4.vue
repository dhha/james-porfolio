<template>
  <div class="page new-skin">
    <!-- preloader -->
    <PreLoader />

    <!-- background -->
    <div class="background"></div>

    <!--
 Container
-->
    <div
      class="container opened disable-sidebar no-sticky-menu"
      data-animation-in="fadeInLeft"
      data-animation-out="fadeOutLeft"
    >
      <!--
  Header
 -->
      <header class="header">
        <!-- header profile -->
        <div class="profile">
          <div class="title">Jason Allen</div>
          <TypingAnimation :arr="arr" />
        </div>

        <!-- menu btn -->
        <a href="#" class="menu-btn" @click="navFunction.sidebarToggle(true)"
          ><span></span
        ></a>
      </header>

      <!--
  Card - Started
 -->
      <div class="card-started" id="home-card">
        <!--
   Profile
  -->
        <div
          class="profile no-photo"
          :class="toggleMenu ? 'default-menu-open' : ''"
        >
          <!-- profile image -->
          <div
            class="slide"
            style="background-image: url(images/profile3.jpg)"
          ></div>

          <!-- profile titles -->
          <div class="title">Jason Allen</div>
          <!--<div class="subtitle">Web Designer</div>-->
          <TypingAnimation :arr="arr" />

          <!-- profile socials -->
          <div class="social">
            <a target="_blank" href="https://dribbble.com/">
              <span class="fa fa-dribbble"></span>
            </a>
            <a target="_blank" href="https://twitter.com/">
              <span class="fa fa-twitter"></span>
            </a>
            <a target="_blank" href="https://github.com/">
              <span class="fa fa-github"></span>
            </a>
            <a target="_blank" href="https://www.spotify.com/">
              <span class="fa fa-spotify"></span>
            </a>
            <a target="_blank" href="https://stackoverflow.com/">
              <span class="fa fa-stack-overflow"></span>
            </a>
          </div>

          <!-- default menu -->
          <div class="main-menu-fixed">
            <div class="main-menu">
              <div class="menu-main-menu-container">
                <ul class="menu">
                  <li class="menu-item" :class="activeMenu('about')">
                    <a href="#" @click="activeSection('about')"
                      ><span class="icon ion-ios-person"></span>About</a
                    >
                  </li>
                  <li class="menu-item" :class="activeMenu('resume')">
                    <a href="#" @click="activeSection('resume')"
                      ><span class="icon ion-android-list"></span>Resume</a
                    >
                  </li>
                  <li class="menu-item" :class="activeMenu('works')">
                    <a href="#" @click="activeSection('works')"
                      ><span class="icon ion-paintbrush"></span>Works</a
                    >
                  </li>
                  <li class="menu-item" :class="activeMenu('blog')">
                    <a href="#" @click="activeSection('blog')"
                      ><span class="icon ion-chatbox-working"></span>Blog</a
                    >
                  </li>
                  <li class="menu-item" :class="activeMenu('contacts')">
                    <a href="#" @click="activeSection('contacts')"
                      ><span class="icon ion-at"></span>Contact</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- menu button -->
          <div class="lnks">
            <a
              href="#"
              class="lnk lnk-view-menu"
              @click="toggleMenu = !toggleMenu"
            >
              <span class="ion ion-android-more-horizontal"></span>
              <span class="text" data-text-open="Close">{{
                toggleMenu ? "Close" : "Menu"
              }}</span>
            </a>
          </div>
        </div>
      </div>

      <ActiveSection :section-name="'about'">
        <div class="content about">
          <!-- title -->
          <div class="title">About Me</div>

          <!-- content -->
          <div class="row">
            <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div class="text-box">
                <p>
                  <strong>Hello! I’m Jason Allen.</strong>
                  Designer &amp; Photographer from USA, California. I have rich
                  experience in web site design and photography. I love to talk
                  with you about our unique.
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

          <!-- content -->
          <div class="row">
            <!-- skill item -->
            <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div class="skills-list">
                <div class="skill-title border-line-h">
                  <div class="icon"><i class="fa fa-paint-brush"></i></div>
                  <div class="name">Software Skills</div>
                </div>
                <ul>
                  <li class="border-line-h">
                    <div class="name">Sketch</div>
                    <div class="progress">
                      <div class="percentage" style="width: 90%"></div>
                    </div>
                  </li>
                  <li class="border-line-h">
                    <div class="name">Adobe Photoshop</div>
                    <div class="progress">
                      <div class="percentage" style="width: 65%"></div>
                    </div>
                  </li>
                  <li class="border-line-h">
                    <div class="name">Adobe illustration</div>
                    <div class="progress">
                      <div class="percentage" style="width: 75%"></div>
                    </div>
                  </li>
                  <li>
                    <div class="name">Figma</div>
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
                  <LanguagesSkills />
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
                  <span class="fa fa-pencil"></span>
                </div>
                <div class="name">
                  <span> Logo Design </span>
                </div>
                <div class="desc">
                  <div>
                    <p>
                      Our logo design starts at a low price with options to meet
                      any budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- service item -->
            <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div class="service-item">
                <div class="icon">
                  <span class="fa fa-vcard-o"></span>
                </div>
                <div class="name">
                  <span> Business Design </span>
                </div>
                <div class="desc">
                  <div>
                    With freelance business card designers across the globe
                    competing on your project
                  </div>
                </div>
              </div>
            </div>
            <!-- service item -->
            <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div class="service-item">
                <div class="icon">
                  <span class="fa fa-camera"></span>
                </div>
                <div class="name">
                  <span> Photography </span>
                </div>
                <div class="desc">
                  <div>
                    Full-day or half-day photo shoots with all necessary
                    equipment.
                  </div>
                </div>
              </div>
            </div>
            <!-- service item -->
            <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div class="service-item">
                <div class="icon">
                  <span class="fa fa-television"></span>
                </div>
                <div class="name">
                  <span> Web Design </span>
                </div>
                <div class="desc">
                  <div>
                    <p>
                      On average Webs theme projects start to receive designs
                      within a few hours.
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
                    <li>Web Design</li>
                    <li>Mobile-First</li>
                    <li>Graphic Design</li>
                    <li class="disable">Logo Design</li>
                    <li class="disable">Photography</li>
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
                    <li>Web Design</li>
                    <li>Mobile-First</li>
                    <li>Graphic Design</li>
                    <li>Logo Design <strong>new</strong></li>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
      </ActiveSection>
      <ActiveSection :section-name="'resume'">
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
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri
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
                    Converted Photoshop layouts to web pages using HTML, CSS,
                    and JavaScript
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
              <div class="skills-list circles">
                <div class="skill-title border-line-h">
                  <div class="icon"><i class="fa fa-paint-brush"></i></div>
                  <div class="name">Design</div>
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
      <ActiveSection :section-name="'works'">
        <WorkIsotope />
      </ActiveSection>
      <Blogs />
      <Contact />
    </div>

    <SideBar />
  </div>
</template>

<script>
import ActiveSection from "../src/components/ActiveSection.vue";
import Blogs from "../src/components/Blogs.vue";
import Contact from "../src/components/Contact.vue";
import LanguagesSkills from "../src/components/LanguagesSkills.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Layout from "../src/layout/Layout.vue";
import SideBar from "../src/layout/SideBar.vue";
import { navFunction } from "../src/navFunction";
import { titleActive } from "../src/utils";
export default {
  name: `index-new-demo-4`,
  components: {
    Layout,
    TypingAnimation,
    ActiveSection,
    LanguagesSkills,
    WorkIsotope,
    Blogs,
    Contact,
    SkillProgress,
    Testimonials,
    SideBar,
  },
  data() {
    return {
      navFunction,
      active: "about",
      arr: ["Designer", "Photographer", "Artist"],
      toggleMenu: false,
      skills: [
        { name: "Logo Design", value: 90 },
        { name: "Web Design", value: 75 },
        { name: "Illustration", value: 85 },
        { name: "Photography", value: 95 },
      ],
    };
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "css/new-skin/new-skin.css",
        },
        {
          rel: "stylesheet",
          href: "css/demos/demo-4-colors.css",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "./images/favicons/favicon.ico",
        },
      ],
    };
  },
  methods: {
    activeSection(value) {
      navFunction.activeSection(value);
      this.active = value;
      this.toggleMenu = false;
    },
    activeMenu(value) {
      return this.active === value ? "current-menu-item current_page_item" : "";
    },
  },
  mounted() {
    titleActive();
  },
};
</script>
