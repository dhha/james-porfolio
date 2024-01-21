<template>
  <ActiveSection :sectionName="'contacts'">
    <div class="content contacts">
      <!-- title -->
      <div class="title">Get in Touch</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div class="info-list" v-if="profile">
            <ul>
              <li><strong>Address . . . . .</strong> {{profile.address}}</li>
              <li><strong>Email . . . . .</strong> {{profile.email}}</li>
              <li><strong>Phone . . . . .</strong> {{profile.phone_number}}</li>
              <li><strong>Freelance . . . . .</strong> Available</li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="content contacts">
      <!-- title -->
      <div class="title">Contact Form</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div class="contact_form">
            <form id="cform" method="post" @submit="sendEmail">
              <div class="row">
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input type="text" name="name" placeholder="Full Name" v-model="form.name"/>
                  </div>
                  <div class="error" v-if="this.errors && this.errors.name"> {{ this.errors.name }}</div>
                </div>
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input
                      type="text"
                      name="email"
                      v-model="form.email"
                      placeholder="Email Address"
                    />
                    <div class="error" v-if="this.errors && this.errors.email"> {{ this.errors.email }}</div>
                  </div>
                </div>
                <div class="col col-d-12 col-t-12 col-m-12">
                  <div class="group-val">
                    <input
                      type="text"
                      name="phone"
                      v-model="form.phone"
                      placeholder="Phone Number"
                    />
                    <div class="error" v-if="this.errors && this.errors.phone"> {{ this.errors.phone }}</div>
                  </div>
                </div>
                <div class="col col-d-12 col-t-12 col-m-12">
                  <div class="group-val">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      v-model="form.message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="alert-success" v-if="success">
                <p>Thanks, your message is sent successfully.</p>
              </div>
              <div class="align-right">
                <a
                  href="#"
                  class="button"
                  @click="sendEmail"
                >
                  <span class="text">Send Message</span>
                  <span class="arrow"></span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div class="clear"></div>
      </div></div
  ></ActiveSection>
</template>

<script>
import axios from 'axios';
import ActiveSection from "./ActiveSection.vue";
export default {
  name: `Contact`,
  components: { ActiveSection },
  data() {
    return {
      success: false,
      errors: [],
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile.personal;
    }
  },
  methods: {
    sendEmail() {
      this.errors = [];
      this.success = false;
      
      if (!this.form.name) {
        this.errors.name = 'Name required.';
      }
      if (!this.form.email) {
        this.errors.email = 'Email required.';
      }
      if (!this.form.phone) {
        this.errors.phone = 'Phone required.';
      }

      if(this.errors.length == 0) {
        //Send email to admin
        axios.post('https://syynmsdyz2.execute-api.ap-southeast-1.amazonaws.com/V1/contact', this.form)
        .then(response => {
          this.success = true;
        }).catch((err) => {

        })
      }
    }
  }
};
</script>
<style scoped>
.error{
  color: red;
  font-size: 12px;
  padding: 0 5px;
}
</style>
