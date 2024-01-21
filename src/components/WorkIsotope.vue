<template>
  <div class="content works">
    <!-- title -->
    <div class="title">Recent Works</div>

    <!-- content -->
    <div class="row grid-items border-line-v">
      <!-- work item photo -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
        <div class="box-item">
          <div class="desc">
            <a href="https://github.com/dhha/pedalpulse" class="name has-popup-image">PedalPulse</a>
            <div class="category">PedalPulse is the project for the journey of bicycle riding. It allow user to store the tracklog of every bicycle activities. using nodejs, angularjs, mongodb</div>
          </div>
        </div>
      </div>
      
      <div class="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
        <div class="box-item">
          <div class="desc">
            <a href="https://github.com/dhha/pedalpulse" class="name has-popup-image">PedalPulse</a>
            <div class="category">PedalPulse is the project for the journey of bicycle riding. It allow user to store the tracklog of every bicycle activities. using nodejs, angularjs, mongodb</div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: `WorkIsotope`,
  head: {
    script: [
      {
        hid: "stripe",
        src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js",
        defer: true,
      },
    ],
  },
  mounted() {
    setTimeout(() => {
      // init Isotope
      var iso = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
      });
      // bind filter button click
      var filtersElem = document.querySelector(".filter-button-group");
      filtersElem.addEventListener("click", function (event) {
        // console.log(event.target.closest(".f_btn"));
        if (event.target.value !== undefined) {
          var filterValue = event.target.getAttribute("value");
          iso.arrange({ filter: `.${filterValue}` });
        }
      });

      // change is-checked class on buttons
      var buttonGroups = document.querySelectorAll(".filter-menu");
      for (var i = 0, len = buttonGroups.length; i < len; i++) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup(buttonGroup);
      }

      function radioButtonGroup(buttonGroup) {
        buttonGroup.addEventListener("click", function (event) {
          if (!event.target.classList.contains("filter-menu")) {
            buttonGroup.querySelector(".active").classList.remove("active");
            event.target.closest(".f_btn").classList.add("active");
          }
        });
      }
    }, 500);
  },
};
</script>
