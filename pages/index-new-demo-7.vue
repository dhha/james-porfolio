<template>
  <Layout :no-sidebar="true">
    <Header :no-sidebar="true" :menus="menus" :arr="animationText" />

    <div class="card-started" id="home-card">
      <!--
  Profile
-->
      <div class="profile no-photo">
        <!-- profile image -->
        <div
          class="slide"
          style="background-image: url(images/profile6.jpg)"
        ></div>

        <!-- profile titles -->
        <div class="title">Demetrius Bernard</div>
        <!--<div class="subtitle">Web Designer</div>-->
        <TypingAnimation :arr="animationText" />

        <!-- profile socials -->
        <div class="social">
          <a target="_blank" href="https://medium.com/">
            <span class="fa fa-medium"></span>
          </a>
          <a target="_blank" href="https://twitter.com/">
            <span class="fa fa-twitter"></span>
          </a>
          <a target="_blank" href="https://facebook.com/">
            <span class="fa fa-facebook-f"></span>
          </a>
          <a target="_blank" href="https://linkedin.com/">
            <span class="fa fa-linkedin"></span>
          </a>
        </div>

        <!-- profile buttons -->
        <div class="lnks">
          <a href="#" class="lnk">
            <span class="text">Download CV</span>
            <span class="ion ion-android-attach"></span>
          </a>
          <a
            href="#"
            class="lnk discover"
            @click="navFunction.activeSection('contacts')"
          >
            <span class="text">Hire Me</span>
            <span class="ion ion-android-mail"></span>
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
                I'm <strong>Demetrius Bernard</strong> author bestseller books,
                won the Hugo Award for Best Novel. Writing science fiction,
                including the New York Times bestseller. I also writes
                non-fiction, on subjects ranging from personal finance to
                astronomy to film.
              </p>
            </div>
          </div>
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="info-list">
              <ul>
                <li><strong>Age . . . . .</strong> 24</li>
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
Fun Fact
-->
      <div class="content fuct">
        <!-- title -->
        <div class="title">Awards</div>

        <!-- content -->
        <div class="row fuct-items">
          <!-- fuct item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="fuct-item">
              <div class="icon"><span class="fa fa-book"></span></div>
              <div class="name">New York Book Awards</div>
            </div>
          </div>

          <!-- fuct item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="fuct-item">
              <div class="icon"><span class="fa fa-trophy"></span></div>
              <div class="name">German Book Awards</div>
            </div>
          </div>

          <!-- fuct item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="fuct-item">
              <div class="icon"><span class="fa fa-coffee"></span></div>
              <div class="name">Costa Book Award</div>
            </div>
          </div>

          <!-- fuct item -->
          <div class="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div class="fuct-item">
              <div class="icon"><span class="fa fa-pencil"></span></div>
              <div class="name">Writers Guild Awards</div>
            </div>
          </div>

          <div class="clear"></div>
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
                <span class="fa fa-book"></span>
              </div>
              <div class="name">
                <span> Writing Books </span>
              </div>
              <div class="desc">
                <div>
                  Write the argument of your book in a sentence, then stretch
                  that out to a paragraph.
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-video-camera"></span>
              </div>
              <div class="name">
                <span> Screenwriting </span>
              </div>
              <div class="desc">
                <div>
                  Spec scripts are feature film or television show scripts
                  written on speculation of sale.
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-newspaper-o"></span>
              </div>
              <div class="name">
                <span> Writing Newspaper </span>
              </div>
              <div class="desc">
                <div>
                  news-writing style is the prose style used for news reporting
                  in media such as television.
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
                <span> Writing Resumes </span>
              </div>
              <div class="desc">
                <div>
                  professional resume-writing service has helped over 400,000
                  professionals land more interviews.
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
              <div class="icon"><i class="fa fa-file-o"></i></div>
              <div class="name">Basic</div>
              <div class="amount">
                <span class="dollar">$</span>
                <span class="number">22</span>
                <span class="period">hour</span>
              </div>
              <div class="feature-list">
                <ul>
                  <ul>
                    <li>Writing Books</li>
                    <li>Screenwriting</li>
                    <li>Writing Newspaper</li>
                    <li class="disable">
                      Writing Resumes <strong>new</strong>
                    </li>
                  </ul>
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
              <div class="icon"><i class="fa fa-files-o"></i></div>
              <div class="name">Pro</div>
              <div class="amount">
                <span class="dollar">$</span>
                <span class="number">48</span>
                <span class="period">hour</span>
              </div>
              <div class="feature-list">
                <ul>
                  <ul>
                    <li>Writing Books</li>
                    <li>Screenwriting</li>
                    <li>Writing Newspaper</li>
                    <li>Writing Resumes <strong>new</strong></li>
                  </ul>
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
                <div class="name">Writer Director</div>
                <div class="company">DBBooks</div>
                <p>
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2011 - 2012</div>
                <div class="name">Team Leader</div>
                <div class="company">ABC Inc.</div>
                <p>
                  A team leader is responsible for guiding a group of employees
                  as they complete a project.
                </p>
              </div>
              <div class="resume-item">
                <div class="date">2009 - 2010</div>
                <div class="name">Business Writer</div>
                <div class="company">Writer Corporation.</div>
                <p>Corporate writing is writing for business purposes.</p>
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
                <div class="name">New York University</div>
                <div class="company">New York</div>
                <p>
                  New York University offers 2 Creative Writing Degree programs.
                  It's a large private university in a large city.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2005 - 2006</div>
                <div class="name">Writing Course</div>
                <div class="company">London</div>
                <p>
                  Creative writing short courses is taught at City, University
                  of London. Develop writing skills with professional and
                  published authors.
                </p>
              </div>
              <div class="resume-item">
                <div class="date">2004 - 2005</div>
                <div class="name">New York School</div>
                <div class="company">Brooklyn, NY, United States</div>
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
                  <div class="name">The Ability to Communicate</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">The Power of Observation</div>
                  <div class="progress">
                    <div class="percentage" style="width: 65%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Reasoning and Problem Solving</div>
                  <div class="progress">
                    <div class="percentage" style="width: 75%"></div>
                  </div>
                </li>
                <li>
                  <div class="name">Knowledge of Grammar, Spelling</div>
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
                  <div class="name">Adaptability</div>
                </li>
                <li>
                  <div class="name">Strong Research Skills</div>
                </li>
                <li>
                  <div class="name">The Ability to Get Focused</div>
                </li>
                <li>
                  <div class="name">Communicate</div>
                </li>
                <li>
                  <div class="name">The Ability to Meet Deadlines</div>
                </li>
                <li>
                  <div class="name">Organizational Skills</div>
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
      <WriterIsotope />
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
import WriterIsotope from "../src/components/isotope/WriterIsotope.vue";
import LanguagesSkills from "../src/components/LanguagesSkills.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Header from "../src/layout/Header.vue";
import Layout from "../src/layout/Layout.vue";
import { navFunction } from "../src/navFunction";
export default {
  name: `index-new-demo-7`,
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "css/new-skin/new-skin.css",
        },
        {
          rel: "stylesheet",
          href: "css/demos/demo-7-colors.css",
        },
        {
          rel: "stylesheet",
          href: "css/new-skin/classic-skin.css",
        },
        {
          rel: "stylesheet",
          href: "css/template-dark/dark.css",
        },
      ],
    };
  },
  data() {
    return {
      navFunction,
      animationText: ["Writer", "Author", "Blogger"],
      skills: [
        { name: "WordPress", value: 90 },
        { name: "PHP / MYSQL", value: 75 },
        { name: "Angular / JavaScript", value: 85 },
        { name: "HTML / CSS", value: 95 },
      ],
      menus: [
        { name: "Bio", href: "about", icon: "icon ion-person" },
        { name: "Resume", href: "resume", icon: "icon ion-android-list" },
        { name: "Works", href: "works", icon: "icon ion-paintbrush" },
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
    WriterIsotope,
  },
};
</script>
