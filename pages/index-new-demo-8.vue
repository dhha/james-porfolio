<template>
  <Layout>
    <Header :menus="menus" :arr="animationText" />

    <div class="card-started" id="home-card">
      <!--
  Profile
-->
      <div class="profile no-photo">
        <!-- profile image -->
        <div
          class="slide"
          style="background-image: url(images/profile7.jpg)"
        ></div>

        <!-- profile titles -->
        <div class="title">Paul Johnson</div>
        <!--<div class="subtitle">Web Designer</div>-->
        <TypingAnimation :arr="animationText" />

        <!-- profile socials -->
        <div class="social">
          <a target="_blank" href="https://soundcloud.com/">
            <span class="fa fa-soundcloud"></span>
          </a>
          <a target="_blank" href="https://bandcamp.com/">
            <span class="fa fa-bandcamp"></span>
          </a>
          <a target="_blank" href="https://www.mixcloud.com/">
            <span class="fa fa-mixcloud"></span>
          </a>
          <a target="_blank" href="https://twitter.com/">
            <span class="fa fa-twitter"></span>
          </a>
          <a target="_blank" href="https://instagram.com/">
            <span class="fa fa-instagram"></span>
          </a>
        </div>

        <!-- profile buttons -->
        <div class="lnks">
          <a href="#" class="lnk">
            <span class="text">My Playlist</span>
            <span class="ion ion-play"></span>
          </a>
          <a
            href="#"
            class="lnk discover"
            @click="navFunction.activeSection('contacts')"
          >
            <span class="text">Contact Me</span>
            <span class="ion ion-email"></span>
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
                <strong>Hello! I’m Paul Johnson.</strong> and I have been
                bringing old-time, good-time jug band music to audiences in
                western New York since 2008. Hailed as “America’s happiest
                music” jug band music has its roots in the country blues.
              </p>
            </div>
          </div>
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="info-list">
              <ul>
                <li><strong>Age . . . . .</strong> 27</li>
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
                <span class="fa fa-microphone"></span>
              </div>
              <div class="name">
                <span> Lead Vocal </span>
              </div>
              <div class="desc">
                <div>
                  The lead vocalist in popular music is typically the member of
                  a group.
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
                <span> Record Guitars </span>
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
          <div class="col col-d-6 col-t-6 col-m-12">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-soundcloud"></span>
              </div>
              <div class="name">
                <span> Soundcloud Mix </span>
              </div>
              <div class="desc">
                <div>
                  Made a great new DJ mix and you want to get it online and out
                  to the world
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-gamepad"></span>
              </div>
              <div class="name">
                <span> Music for Games, Apps </span>
              </div>
              <div class="desc">
                <div>
                  <p>
                    Developing tracks and unique music for android, ios and
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
              <div class="icon"><i class="fa fa-volume-down"></i></div>
              <div class="name">Basic</div>
              <div class="amount">
                <span class="dollar">$</span>
                <span class="number">22</span>
                <span class="period">hour</span>
              </div>
              <div class="feature-list">
                <ul>
                  <li>Lead Vocal</li>
                  <li>Record Guitars</li>
                  <li>Soundcloud Mix</li>
                  <li class="disable">Music for Games <strong>new</strong></li>
                  <li class="disable">Music for Apps <strong>new</strong></li>
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
              <div class="icon"><i class="fa fa-volume-up"></i></div>
              <div class="name">Pro</div>
              <div class="amount">
                <span class="dollar">$</span>
                <span class="number">48</span>
                <span class="period">hour</span>
              </div>
              <div class="feature-list">
                <ul>
                  <li>Lead Vocal</li>
                  <li>Record Guitars</li>
                  <li>Soundcloud Mix</li>
                  <li>Music for Games <strong>new</strong></li>
                  <li>Music for Apps <strong>new</strong></li>
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
                <div class="date">2018 - Present</div>
                <div class="name">Schenectady Symphony Orchestra</div>
                <div class="company">New York</div>
                <p>Third chair, first violin section.</p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2016 - 2018</div>
                <div class="name">Utica Symphony Orchestra</div>
                <div class="company">New York</div>
                <p>
                  First violin section; orchestra is currently without contract.
                </p>
              </div>
              <div class="resume-item">
                <div class="date">2014 - 2016</div>
                <div class="name">Frequent freelance</div>
                <div class="company">New York</div>
                <p>
                  Work in: New York Capital Region for Cohoes Music Hall,
                  Hubbard Hall Opera Theater.
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
                <div class="date">2011 - 2014</div>
                <div class="name">Peabody Institute</div>
                <div class="company">Baltimore</div>
                <p>
                  M.M. in Performance, Peabody Institute – Baltimore, MD 2015.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2008 - 2011</div>
                <div class="name">American University</div>
                <div class="company">Washington</div>
                <p>
                  B.A. in Music, American University – Washington, D.C. 2012.
                </p>
              </div>
              <div class="resume-item">
                <div class="date">2000 - 2008</div>
                <div class="name">New York School of Music</div>
                <div class="company">New York</div>
                <p>
                  Great school! The teachers really care about the students.
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
              <ul>
                <li class="border-line-h">
                  <div class="name">Motivation / Determination</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Violin Expertise</div>
                  <div class="progress">
                    <div class="percentage" style="width: 65%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Creativity</div>
                  <div class="progress">
                    <div class="percentage" style="width: 75%"></div>
                  </div>
                </li>
                <li>
                  <div class="name">Guitar Expertise</div>
                  <div class="progress">
                    <div class="percentage" style="width: 85%"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list circles">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-music"></i></div>
                <div class="name">Read Music</div>
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
                  <div class="name">A Tight Sense of Rhythm</div>
                </li>
                <li>
                  <div class="name">Rhythm is the heartbeat of all music</div>
                </li>
                <li>
                  <div class="name">An Accurate Sense of Pitch</div>
                </li>
                <li>
                  <div class="name">The Ability to “Jam”</div>
                </li>
                <li>
                  <div class="name">An Ability to “Talk Music”</div>
                </li>
                <li>
                  <div class="name">Singing in Tune</div>
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
      <MusicianIsotope />
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
import MusicianIsotope from "../src/components/isotope/MusicianIsotope.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Header from "../src/layout/Header.vue";
import Layout from "../src/layout/Layout.vue";
import { navFunction } from "../src/navFunction";
export default {
  name: `index-new-demo-8`,
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "css/new-skin/new-skin.css",
        },
        {
          rel: "stylesheet",
          href: "css/demos/demo-8-colors.css",
        },
      ],
    };
  },
  data() {
    return {
      navFunction,
      animationText: ["Musician", "Composer", "Singer", "Instrumentalist"],
      skills: [
        { name: "Chords", value: 90 },
        { name: "Intervals", value: 75 },
        { name: "Melody", value: 85 },
        { name: "Pitch", value: 95 },
      ],
      menus: [
        { name: "Bio", href: "about", icon: "icon ion-person" },
        { name: "Resume", href: "resume", icon: "icon ion-android-list" },
        { name: "Playlist", href: "works", icon: "icon ion-disc" },
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
    MusicianIsotope,
  },
};
</script>
