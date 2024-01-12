<template>
  <Layout :background="'gradient'">
    <Header
      :name="'Casandra Wood'"
      :menus="menus"
      :arr="'Lawyer'"
      :noTypingAnimation="true"
    />

    <div class="card-started" id="home-card">
      <!--
  Profile
-->
      <div class="profile no-photo">
        <!-- profile image -->
        <div
          class="slide"
          style="background-image: url(images/profile5.jpg)"
        ></div>

        <!-- profile titles -->
        <div class="title">Casandra Wood</div>
        <div class="subtitle">Lawyer</div>

        <!-- profile socials -->
        <div class="social">
          <a target="_blank" href="https://facebook.com/">
            <span class="fa fa-facebook-f"></span>
          </a>
          <a target="_blank" href="https://twitter.com/">
            <span class="fa fa-twitter"></span>
          </a>
          <a target="_blank" href="https://instagram.com/">
            <span class="fa fa-instagram"></span>
          </a>
          <a target="_blank" href="https://www.spotify.com/">
            <span class="fa fa-spotify"></span>
          </a>
        </div>

        <!-- profile buttons -->
        <div class="lnks">
          <a href="#" class="lnk">
            <span class="text">Download CV</span>
            <span class="ion ion-android-download"></span>
          </a>
          <a
            href="#"
            class="lnk discover"
            @click="navFunction.activeSection('contacts')"
          >
            <span class="text">Contact Me</span>
            <span class="ion ion-android-contact"></span>
          </a>
        </div>
      </div>
    </div>

    <ActiveSection :sectionName="'about'">
      <div class="content about">
        <!-- title -->
        <div class="title">About Me</div>

        <!-- content -->
        <div class="row">
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="text-box">
              <p>
                <strong>Hello! I’m Casandra Wood.</strong><br />
                Lawyer from UK, London. I have licensed by the state in which I
                practice to advise and represent clients on legal matters
                including animal rights.
              </p>
            </div>
          </div>
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="info-list">
              <ul>
                <li><strong>Age . . . . .</strong> 26</li>
                <li><strong>Residence . . . . .</strong> UK</li>
                <li><strong>Freelance . . . . .</strong> Available</li>
                <li><strong>Address . . . . .</strong> London, UK</li>
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
                <span class="fa fa-balance-scale"></span>
              </div>
              <div class="name">
                <span> Criminal Law </span>
              </div>
              <div class="desc">
                <div>
                  Proscribes conduct perceived as threatening, harmful, or
                  otherwise endangering to the property.
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-bank"></span>
              </div>
              <div class="name">
                <span> Business Law </span>
              </div>
              <div class="desc">
                <div>
                  governs business and commerce and is often considered to be a
                  branch of civil law and deals
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-gavel"></span>
              </div>
              <div class="name">
                <span> Legal Services </span>
              </div>
              <div class="desc">
                <div>
                  Provides a wide range of legal services in all regions of
                  London.
                </div>
              </div>
            </div>
          </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div class="service-item">
              <div class="icon">
                <span class="fa fa-money"></span>
              </div>
              <div class="name">
                <span> Finance </span>
              </div>
              <div class="desc">
                <div>
                  Provides a wide range of finance services in all regions of
                  London.
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
              <div class="icon"><i class="fa fa-user"></i></div>
              <div class="name">Basic</div>
              <div class="amount">
                <span class="dollar">$</span>
                <span class="number">22</span>
                <span class="period">hour</span>
              </div>
              <div class="feature-list">
                <ul>
                  <li>Criminal Law</li>
                  <li>Business Law</li>
                  <li class="disable">Legal Services <strong>new</strong></li>
                  <li class="disable">Finance Services <strong>new</strong></li>
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
              <div class="icon"><i class="fa fa-users"></i></div>
              <div class="name">Pro</div>
              <div class="amount">
                <span class="dollar">$</span>
                <span class="number">48</span>
                <span class="period">hour</span>
              </div>
              <div class="feature-list">
                <ul>
                  <ul>
                    <li>Criminal Law</li>
                    <li>Business Law</li>
                    <li>Legal Services <strong>new</strong></li>
                    <li>Finance Services <strong>new</strong></li>
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
                <div class="name">Law Director</div>
                <div class="company">Facebook Inc.</div>
                <p>
                  Head of the Law Department which represents and advises the
                  City in all civil.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2011 - 2012</div>
                <div class="name">Lawyer Leader</div>
                <div class="company">Google Inc.</div>
                <p>
                  Was part of a client focused organisation that makes a
                  difference.
                </p>
              </div>
              <div class="resume-item">
                <div class="date">2009 - 2010</div>
                <div class="name">Junior Lawyer</div>
                <div class="company">ABC Inc.</div>
                <p>
                  A fast-growing international pharmaceutical services company.
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
                <div class="name">Law University</div>
                <div class="company">London</div>
                <p>Gray's Inn, 4 Gray's Inn Place, Warwick Ct</p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2005 - 2006</div>
                <div class="name">Law Schools</div>
                <div class="company">London</div>
                <p>
                  The Law School of English has over 50 years experience
                  teaching general.
                </p>
              </div>
              <div class="resume-item">
                <div class="date">2004 - 2005</div>
                <div class="name">London School</div>
                <div class="company">London</div>
                <p>
                  The London School of English has over 100 years experience
                  teaching general.
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
                  <div class="name">Oral Communication</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Written Communication</div>
                  <div class="progress">
                    <div class="percentage" style="width: 65%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Analytical and Logical Reasoning</div>
                  <div class="progress">
                    <div class="percentage" style="width: 75%"></div>
                  </div>
                </li>
                <li>
                  <div class="name">Legal Research</div>
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
                  <div class="name">Client Service</div>
                </li>
                <li>
                  <div class="name">Technology Skills</div>
                </li>
                <li>
                  <div class="name">Knowledge of Substantive Law</div>
                </li>
                <li>
                  <div class="name">Legal Procedure</div>
                </li>
                <li>
                  <div class="name">Organization</div>
                </li>
                <li>
                  <div class="name">Teamwork</div>
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
      <LawyerIsotope />
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
import LawyerIsotope from "../src/components/isotope/LawyerIsotope.vue";
import LanguagesSkills from "../src/components/LanguagesSkills.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Header from "../src/layout/Header.vue";
import Layout from "../src/layout/Layout.vue";
import { navFunction } from "../src/navFunction";
export default {
  name: `index-new-demo-6`,
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "css/new-skin/new-skin.css",
        },
        {
          rel: "stylesheet",
          href: "css/demos/demo-6-colors.css",
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
      menus: [
        { name: "About", href: "about", icon: "icon ion-person" },
        { name: "Resume", href: "resume", icon: "icon ion-android-list" },
        { name: "Cases", href: "works", icon: "icon ion-filing" },
        { name: "Articles", href: "blog", icon: "icon ion-ios-paper" },
        { name: "Contact", href: "contacts", icon: "icon ion-paper-airplane" },
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
    LawyerIsotope,
  },
};
</script>
