<template>
  <BlogPostContainer :sectionName="'blog-post'">
    <!--
						Blog Single
					-->
    <div class="content blog-single">
      <!-- title -->
      <div class="title">Blog Post</div>

      <!-- content -->
      <div class="row border-line-v">
        <div class="col col-m-12 col-t-12 col-d-12">
          <div class="post-box">
            <!-- blog detail -->
            <h1 class="h-title">
              {{ title }}
            </h1>
            <div class="blog-detail">
              <span class="date">{{ date }}</span>
              <span class="byline">
                by <span class="author"><a href="#">admin</a></span>
              </span>
            </div>

            <!-- blog image -->
            <div class="blog-image">
              <img :src="img" alt="" />
            </div>

            <!-- blog content -->
            <div class="blog-content">
              <p>
                Integrating ChatGPT with AWS Lambda involves setting up an API Gateway to act as a trigger for your Lambda function. Below are the general steps you can follow
              </p>

              <ul class="list-style">
                <li>Create an AWS Lambda Function.</li>
                <li>Set Up an API Gateway.</li>
                <li>Configure API Gateway</li>
                <li>Deploy API</li>
                <li>Use the API Endpoint</li>
                <li>Interact with ChatGPT</li>
              </ul>

              <p>Create an AWS Lambda Function:</p>
              <blockquote>
                <ul>
                  <li>Go to the AWS Management Console.</li>
                  <li>Open the Lambda service.</li>
                  <li>Click on "Create function."</li>
                  <li>Choose "Author from scratch," give your function a name, select a runtime (e.g., Python, Node.js), and configure other settings.</li>
                  <li>Write or upload your code that interacts with ChatGPT.</li>
                </ul>
              </blockquote>
              <p>Example code in nodejs</p>
              <blockquote>
                <pre>
import axios from 'axios';
const OPENAI_API_KEY = ''; // Replace with your OpenAI API key
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export const handler = async (event) => {
  const { message } = event;
  // Request completion from ChatGPT
  const response = await axios.post(
    OPENAI_API_ENDPOINT,
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );
    
  const botMessage = response.data.choices[0].message.content;
  return {
    statusCode: 200,
    message: botMessage
  };
};
              </pre>
              </blockquote>
              <p>Set Up an API Gateway:</p>
              <blockquote>
                <ul>
                  <li>In the Lambda function configuration, go to the "Designer" tab.</li>
                  <li>Click on "Add trigger."</li>
                  <li>Choose "API Gateway" as the trigger type.</li>
                  <li>Configure the API Gateway details, or create a new API.</li>
                </ul>
              </blockquote>

              <p>Configure API Gateway:</p>

              <blockquote>
                <ul>
                  <li>In the API Gateway console, select the API you created.</li>
                  <li>Create a new resource and method (e.g., POST).</li>
                  <li>Configure the integration type as Lambda Function, and choose the Lambda function you created.</li>
                </ul>
              </blockquote>
              <p>Deploy API:</p>
              <blockquote>
                <ul>
                  <li>After configuring the API, deploy it to make it accessible via a public URL.</li>
                  <li>In the API Gateway console, go to "Actions" -> "Deploy API."</li>
                  <li>Choose or create a new deployment stage.</li>
                </ul>
              </blockquote>
              <p>Use the API Endpoint:</p>
              <blockquote>
                <ul>
                  <li>Once deployed, you'll be provided with an API endpoint.</li>
                  <li>Use this endpoint to make HTTP requests to your Lambda function.</li>
                  </ul>
                </blockquote>
              <p>Interact with ChatGPT:</p>
              <ul>
                <li>Inside your Lambda function code, use the OpenAI API or any other method to interact with ChatGPT.</li>
                <li>Pass input data to ChatGPT and retrieve the responses.</li>
              </ul>

              <p>
                Remember to handle security aspects, such as setting up proper authentication and authorization for your API Gateway, and securing sensitive information in your Lambda function.
              </p>
              <p>
                Please note that the specific implementation details may vary based on your programming language, runtime, and any specific requirements you have for integrating ChatGPT with Lambda
              </p>
            </div>

            <div class="post-text-bottom">
              <div class="social-share">
                <span>Share</span>
                <a
                  class="share-btn share-btn-facebook"
                  title="Share on Facebook"
                  ><i class="ion ion-social-facebook"></i
                ></a>
                <a class="share-btn share-btn-twitter" title="Share on Twitter"
                  ><i class="ion ion-social-twitter"></i
                ></a>
                <a
                  class="share-btn share-btn-linkedin"
                  title="Share on Linkedin"
                  ><i class="ion ion-social-linkedin"></i
                ></a>
                <a class="share-btn share-btn-reddit" title="Share on Reddit"
                  ><i class="ion ion-social-reddit"></i
                ></a>
                <a
                  class="share-btn share-btn-pinterest"
                  title="Share on Pinterest"
                  ><i class="ion ion-social-pinterest"></i
                ></a>
              </div>
              <span class="tags-links"
                >Taggs: <a href="#">chatgpt</a><a href="#">lambda</a
                ><a href="#">aws</a><a href="#">vuejs</a></span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- <nav class="navigation post-navigation">
        <div class="nav-links">
          <div class="nav-previous">
            <a href="#"
              ><span class="post-nav-next post-nav-text">Prev</span></a
            >
          </div>
          <div class="nav-next">
            <a href="#"
              ><span class="post-nav-prev post-nav-text">Next</span></a
            >
          </div>
        </div>
      </nav> -->

      <!-- <div class="post-comments">
        <div class="title">
          <div class="title_inner">Comments</div>
        </div>
        <div class="row border-line-v comments-row">
          <div class="col col-m-12 col-t-12 col-d-12">
            <ul class="comments">
              <li class="comment post-comment">
                <div class="comment">
                  <div class="comment-desc desc">
                    <div class="comment-name name">
                      <span class="comment-author">John Doe</span>
                      <span class="comment-time">8:16 pm</span>
                      <span class="comment-date">April 28, 2020</span>
                    </div>
                    <div class="comment-text">
                      <p>
                        An has alterum nominavi. Nam at elitr veritus
                        voluptaria. Cu eum regione tacimates vituperatoribus, ut
                        mutat delenit est.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> -->

      <div class="post-comments">
        <div class="title">Leave a Comment</div>
        <div class="row border-line-v">
          <div class="col col-m-12 col-t-12 col-d-12">
            <div class="post-box">
              <form id="cform" method="post">
                <div class="row">
                  <div class="col col-d-12 col-t-12 col-m-12">
                    <div class="group-val">
                      <input type="text" name="name" placeholder="Full Name" />
                    </div>
                  </div>
                  <div class="col col-d-12 col-t-12 col-m-12">
                    <div class="group-val">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="align-left">
                  <a
                    href="#"
                    class="button"
                    onclick="$('#cform').submit(); return false;"
                  >
                    <span class="text">Add Comment</span>
                    <span class="arrow"></span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></BlogPostContainer
  >
</template>

<script>
import ActiveSection from "../ActiveSection.vue";
import {
  default as BlogPostContainer,
  default as BlogPostContainer1,
} from "../BlogPostContainer.vue";
export default {
  name: `BlogPostNew`,
  components: { ActiveSection, BlogPostContainer, BlogPostContainer1 },
  props: {
    title: { type: String, default: "title" },
    date: { type: String, default: "title" },
    img: { type: String, default: "title" },
  },
};
</script>
