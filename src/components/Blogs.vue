<template>
  <Fragment>
    <div v-if="navFunction.active == 'blog-post'">
      <BlogPostNew
        :title="activeData && activeData.title"
        :img="activeData && activeData.img"
        :date="activeData && activeData.date"
      />
    </div>
    <div v-else>
      <ActiveSection :sectionName="'blog'">
        <!-- Blog -->
        <div class="content blog">
          <!-- title -->
          <div class="title">
            <span>Blog</span>
          </div>

          <!-- content -->
          <div class="row border-line-v">
            <!-- blog item -->
            <div
              class="col col-d-12 col-t-12 col-m-12"
              v-for="(blog, i) in data"
              :key="i"
            >
              <div class="box-item">
                <div class="image">
                  <a href="#" @click="activeBlogPost(blog)">
                    <img :src="blog.img" alt="By spite about do of allow" />
                    <span class="info">
                      <span class="ion ion-document-text"></span>
                    </span>
                  </a>
                </div>
                <div class="desc">
                  <a href="#" @click="activeBlogPost(blog)">
                    <span class="date">{{ blog.date }}</span>
                  </a>
                  <a href="#" @click="activeBlogPost(blog)" class="name">{{ blog.title }}</a>
                  <div class="text">
                    <p>
                      {{ blog.desciption }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>

        </div>
      </ActiveSection>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { navFunction } from "../navFunction";
import ActiveSection from "./ActiveSection.vue";
import BlogPostNew from "./blogPost/BlogPostNew.vue";
export default {
  name: `Blogs`,
  components: { ActiveSection, BlogPostNew, Fragment },
  data() {
    return {
      navFunction,
      data: [
        {
          img: "/images/blog/Lambda-OpenAI.png",
          date: "February 01, 2022",
          title: "Integrating Chat-GPT with Lambda",
          desciption: 'Create Simple chatGPT api with Lambda function'
        },
      ],
      activeData: null,
      sort: 2,
    };
  },
  methods: {
    activeBlogPost(value) {
      navFunction.activeSection("blog-post");
      this.activeData = value;
    },
  },
};
</script>
