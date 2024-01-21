<template>
  <div class="preloader" :style="{ display: loader ? 'block' : 'none' }">
    <div class="centrize full-width">
      <div class="vertical-center">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `PreLoader`,
  data() {
    return {
      loader: true,
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile.personal;
    }
  },
  mounted() {
    this.$store.dispatch('profile/fetchProfile');
  },
  watch: {
    profile(val) {
      if(val) {
        this.loader = false;
      }
    }
  }
};
</script>
