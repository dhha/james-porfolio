<template>
  <Layout :background="'gradient'">
    <Header noSidebar/>

    <div class="card-started" id="home-card" v-if="profile">
      <div class="profile no-photo">
        <!-- profile image -->
        <div
          class="slide"
          :style="'background-image: url(' + this.profile.avatar + ')'"
        ></div>

        <!-- profile titles -->
        <div class="title">{{ profile.name }}</div>
        <!--<div class="subtitle">Web Designer</div>-->
        <TypingAnimation />

        <!-- profile socials -->
        <div class="social">
          <a target="_blank" :href="this.profile.website"
            ><span class="fa fa-dribbble"></span
          ></a>
          <a target="_blank" :href="this.profile.github"
            ><span class="fa fa-github"></span
          ></a>
          <a target="_blank" :href="this.profile.linkedin"
            ><span class="fa fa-linkedin"></span
          ></a>
        </div>

        <!-- profile buttons -->
        <div class="lnks">
          <a :href="this.profile.resume_file" class="lnk">
            <span class="text">Download CV</span>
            <span class="ion ion-archive"></span>
          </a>
          <a href="#" class="lnk discover" @click="navFunction.activeSection('contacts')">
            <span class="text">Contact Me</span>
            <span class="arrow"></span>
          </a>
        </div>
      </div>
    </div>
    <ActiveSection :sectionName="'about'" v-if="this.profile">
      <!--
        About
      -->
      <div class="content about">
        <!-- title -->
        <div class="title">About Me</div>

        <!-- content -->
        <div class="row">
          <div class="col col-d-12 col-t-6 col-m-12 border-line-v">
            <div class="text-box">
              <p>
                {{ this.profile.about_me }}
              </p>
            </div>
          </div>
          <div class="col col-d-12 col-t-6 col-m-12 border-line-v">
            <div class="info-list">
              <ul>
                <li><strong>Address . . . . .</strong> {{ this.profile.address }}</li>
                <li><strong>Phone . . . . .</strong> {{ this.profile.phone_number }}</li>
                <li><strong>Email . . . . .</strong> {{ this.profile.email }}</li>
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
          <div class="col col-d-6 col-t-6 col-m-12 border-line-h" v-for="service in this.services" :key="service.name">
            <div class="service-item">
              <!-- <div class="icon">
                <span class="fa fa-code"></span>
              </div> -->
              <div class="name">
                <span> {{service.name}} </span>
              </div>
              <div class="desc">
                <div>
                  <p>
                    {{service.desciption}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
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
          <div class="col col-d-12 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="fa fa-briefcase"></i></div>
              <div class="name">Experience</div>
            </div>
            <div class="resume-items">
              <div :class="'resume-item border-line-h ' + (index === 0 ? 'active': '')" v-for="(company, index) in this.resume.experiences" :key="company.company_name">
                <div class="date">{{ company.period }}</div>
                <div class="name">{{ company.title }}</div>
                <div class="company">{{ company.company_name}}</div>
                <p>
                  {{ company.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- education -->
          <div class="col col-d-12 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="fa fa-university"></i></div>
              <div class="name">Education</div>
            </div>
            <div class="resume-items">
              <div class="resume-item border-line-h" v-for="school in this.resume.educations" :key="school.name">
                <div class="date">{{ school.period }}</div>
                <div class="name">{{ school.name }}</div>
                <div class="company">{{ school.address }}</div>
                <p>
                  {{ school.major }}
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
                <div class="icon"><i class="fa fa-code"></i></div>
                <div class="name">Coding</div>
              </div>
              <ul v-if="this.skills && this.skills.length > 0">
                <!-- <SkillProgress :skills="this.skills" /> -->
                <li class="border-line-h" v-for="skill in this.skills" :key="skill.name">
                  <div class="name">{{ skill.name }}</div>
                  <div class="progress">
                    <div class="percentage" :style="'width:'  + skill.value + '%'"></div>
                  </div>
                </li>
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
              <ul v-if="this.knowledges && this.knowledges.length > 0">
                <li v-for="knowledge in this.knowledges" :key="knowledge.name">
                  <div class="name">{{ knowledge.name }}</div>
                </li>
              </ul>
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

    <Blogs />

    <Contact />
    
    <Chatbot />
  </Layout>
</template>

<script>
import ActiveSection from "../src/components/ActiveSection.vue";
import Blogs from "../src/components/Blogs.vue";
import Chatbot from '../src/components/Chatbot.vue';
import Contact from "../src/components/Contact.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Header from "../src/layout/Header.vue";
import Layout from "../src/layout/Layout.vue";
import { navFunction } from "../src/navFunction";
export default {
  name: `index-new`,
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
    Chatbot,
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
          href: "css/demos/demo-3-colors.css",
        },
      ],
    };
  },
  data() {
    return {
      navFunction,
      services: [
        {
          name: 'Backend Development',
          desciption: 'With my expertise in PHP, Node.js, and Java. I specialize in building robust, scalable, and efficient server-side solutions. From dynamic web applications to seamless APIs, our team ensures your backend is the backbone of a high-performing digital experience.'
        },
        {
          name: 'Frontend Development',
          desciption: 'My expertise lies in Vue.js, React, Angular, HTML, CSS, and JavaScript, ensuring that we bring your digital vision to life with precision and innovation. Whether you seek a responsive and mobile-friendly website, a feature-rich web application, or a seamless user interface, our team is dedicated to delivering exceptional results'
        },
        {
          name: 'Mobile Development',
          desciption: 'Elevate your mobile presence with my personalized mobile development service. Proficient in Kotlin, Flutter, and React Native, I craft cross-platform, high-performance mobile applications. From intuitive user interfaces to efficient codebases, I bring innovation and versatility to every project, ensuring your mobile app stands out in functionality and user experience.'
        },
        {
          name: 'DevOps',
          desciption: 'Transforming businesses through my personalized DevOps service on AWS. I optimize workflows, implement continuous integration, and architect scalable AWS solutions. With a focus on efficiency and reliability, I ensure seamless deployments, enabling clients to leverage the full potential of AWS for enhanced performance and growth.'
        }
      ]
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile.personal;
    },
    skills() {
      return this.$store.state.profile.skills;
    },
    knowledges() {
      return this.$store.state.profile.knowledges;
    },
    resume() {
      return this.$store.state.profile.resume;
    }
  },

  mounted() {
    
  }
  
};
</script>
