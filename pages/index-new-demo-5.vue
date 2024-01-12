<template>
  <Layout :background="'backgroundImg'" :noSidebar="true">
    <Header
      :noSidebar="true"
      :arr="animationText"
      :name="'Daniel Wilson'"
      :menus="menus"
    />

    <div class="card-started" id="home-card">
      <!--
  Profile
-->
      <div class="profile no-photo">
        <!-- profile image -->
        <div
          class="slide"
          style="background-image: url(images/profile4.jpg)"
        ></div>

        <!-- profile titles -->
        <div class="title">Daniel Wilson</div>
        <!--<div class="subtitle">Web Designer</div>-->
        <TypingAnimation :arr="animationText" />

        <!-- profile socials -->
        <div class="social">
          <a target="_blank" href="https://instagram.com/">
            <span class="fa fa-instagram"></span>
          </a>
          <a target="_blank" href="https://twitter.com/">
            <span class="fa fa-twitter"></span>
          </a>
          <a target="_blank" href="https://facebook.com/">
            <span class="fa fa-facebook-f"></span>
          </a>
          <a target="_blank" href="https://www.spotify.com/">
            <span class="fa fa-spotify"></span>
          </a>
        </div>

        <!-- profile buttons -->
        <div class="lnks">
          <a
            href="#"
            class="lnk discover"
            @click="navFunction.activeSection('contacts')"
          >
            <span class="text">Contact Me</span>
            <span class="ion ion-paper-airplane"></span>
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
                <strong>Hello!</strong>
                Personal &amp; Fitness trainer from USA, New York. I have
                knowledge of general fitness involved in exercise prescription
                and motivate clients by setting goals, providing feedback.
              </p>
            </div>
          </div>
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="info-list">
              <ul>
                <li><strong>Age . . . . .</strong> 30</li>
                <li><strong>Residence . . . . .</strong> USA</li>
                <li><strong>Freelance . . . . .</strong> Available</li>
                <li><strong>Address . . . . .</strong> New York, USA</li>
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
                <span class="fa fa-child"></span>
              </div>
              <div class="name">
                <span> Fitness Trainer </span>
              </div>
              <div class="desc">
                <div>
                  We offer personal training and nutrition coaching to help you
                  achieve goals faster!
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-heartbeat"></span>
              </div>
              <div class="name">
                <span> Cardio Training </span>
              </div>
              <div class="desc">
                <div>
                  Cardio training increases endurance, and hence the intensity
                  of training.
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-circle"></span>
              </div>
              <div class="name">
                <span> Workout Training </span>
              </div>
              <div class="desc">
                <div>
                  Medicine balls are versatile, portable and a fad that’s lasted
                  the test of time.
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-cutlery"></span>
              </div>
              <div class="name">
                <span> Proper Nutrition </span>
              </div>
              <div class="desc">
                <div>
                  Good nutrition is an important part of leading a healthy
                  lifestyle.
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
                  <li>Fitness Training</li>
                  <li>Cardio Training</li>
                  <li class="disable">Workout Training</li>
                  <li class="disable">Proper Nutrition</li>
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
                  <li>Fitness Training</li>
                  <li>Cardio Training</li>
                  <li>Workout Training <strong>new</strong></li>
                  <li>Proper Nutrition <strong>new</strong></li>
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
                <div class="name">Fitness Trainer</div>
                <div class="company">Gym Club</div>
                <p>
                  Inspired clients to push their hardest and do their very best.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2011 - 2012</div>
                <div class="name">Cardio Trainer</div>
                <div class="company">High-Intensity Complex</div>
                <p>
                  Dynamic sculpting exercises for the perfect balance of cardio
                  and strength training.
                </p>
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
                <div class="name">Pace University</div>
                <div class="company">New York</div>
                <p>
                  Pace University is a private university with its main campus
                  in New York City.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2005 - 2006</div>
                <div class="name">Fitness Course</div>
                <div class="company">London</div>
                <p>
                  Personal trainer and fitness instructor courses in London.
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
        <div class="title">Skills</div>

        <!-- content -->
        <div class="row">
          <!-- skill item -->
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="skills-list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-bicycle"></i></div>
                <div class="name">Fitness</div>
              </div>
              <ul>
                <li class="border-line-h">
                  <div class="name">Agility</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Balance</div>
                  <div class="progress">
                    <div class="percentage" style="width: 65%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Power</div>
                  <div class="progress">
                    <div class="percentage" style="width: 75%"></div>
                  </div>
                </li>
                <li>
                  <div class="name">Speed</div>
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
              <LanguagesSkills />
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
                  <div class="name">Fat Burn</div>
                </li>
                <li>
                  <div class="name">Body condition</div>
                </li>
                <li>
                  <div class="name">Strength training</div>
                </li>
                <li>
                  <div class="name">Faster exercise</div>
                </li>
                <li>
                  <div class="name">Bodybuilding</div>
                </li>
                <li>
                  <div class="name">Fitness training</div>
                </li>
                <li>
                  <div class="name">Cardio training</div>
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
      <TrainerIsotope />
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
import TrainerIsotope from "../src/components/isotope/TrainerIsotope.vue";
import LanguagesSkills from "../src/components/LanguagesSkills.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Header from "../src/layout/Header.vue";
import Layout from "../src/layout/Layout.vue";
import { navFunction } from "../src/navFunction";
export default {
  name: `index-new-demo-5`,
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "css/new-skin/new-skin.css",
        },
        {
          rel: "stylesheet",
          href: "css/demos/demo-5-colors.css",
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
      animationText: ["Personal Trainer", "Body builder", "Fitness Trainer"],
      menus: [
        { name: "About", href: "about", icon: "icon ion-person" },
        { name: "Resume", href: "resume", icon: "icon ion-android-list" },
        { name: "Gallery", href: "works", icon: "icon ion-images" },
        { name: "Blog", href: "blog", icon: "icon ion-chatbox-working" },
        { name: "Contact", href: "contacts", icon: "icon ion-at" },
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
    LanguagesSkills,
    TrainerIsotope,
  },
};
</script>
import ActiveSection from "../src/components/ActiveSection.vue"; import Blogs
from "../src/components/Blogs.vue"; import Contact from
"../src/components/Contact.vue"; import SkillProgress from
"../src/components/SkillProgress.vue"; import Testimonials from
"../src/components/Testimonials.vue"; import TypingAnimation from
"../src/components/TypingAnimation.vue"; import WorkIsotope from
"../src/components/WorkIsotope.vue"; import Header from
"../src/layout/Header.vue"; import Layout from "../src/layout/Layout.vue";
import ActiveSection from "../src/components/ActiveSection.vue"; import Blogs
from "../src/components/Blogs.vue"; import Contact from
"../src/components/Contact.vue"; import SkillProgress from
"../src/components/SkillProgress.vue"; import Testimonials from
"../src/components/Testimonials.vue"; import TypingAnimation from
"../src/components/TypingAnimation.vue"; import WorkIsotope from
"../src/components/WorkIsotope.vue"; import Header from
"../src/layout/Header.vue"; import Layout from "../src/layout/Layout.vue";
