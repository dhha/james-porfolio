<template>
    <ActiveSection sectionName="chat">
        <div class="content contacts">
            <!-- title -->
            <div class="title">ChatBot</div>

            <!-- content -->
            <div class="">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="card chat-app">
                            <div class="chat">
                                <div class="chat-history">
                                    <ul class="m-b-0">
                                        <li class="clearfix" v-for="message in chatHistories" :key="message.content">
                                            <div class="message-data">
                                                <span class="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div :class="'message ' + (message.from == 'bot' ? 'my-message' : 'other-message float-right')">{{ message.content}}</div>                                    
                                        </li>                               
                                        
                                        <li class="clearfix" v-if="loading">
                                            <div class="message-data">
                                                <span class="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div class="message my-message">
                                                <beat-loader class="custom-class" color="#bada55" :loading="true" :size="10" sizeUnit="px"></beat-loader>
                                            </div>                                    
                                        </li>  
                                    </ul>
                                </div>
                                <div class="chat-message">
                                    <div class="input-group mb-0">
                                        <input v-model="question" v-on:keyup.enter="sendMessage" :readonly="loading" :disabled="loading" type="text" class="form-control" placeholder="Enter text here..." />                             
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ActiveSection>
</template>
<script>
import axios from "axios";
import ActiveSection from "./ActiveSection.vue";
import { BeatLoader } from '@saeris/vue-spinners';

export default {
    components: { ActiveSection, BeatLoader },
    data() {
        return {
            chatHistories: [],
            loading: false,
            question: ''
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.loading = true;
            let message = {
                id: 0,
                from: 'bot',
                content: 'Hi, How are you to day? How can i help you?'
            };
            this.chatHistories.push(message);

            this.loading = false;
        },
        sendMessage() {
            if(this.question) {
                let message = {
                    from: 'user',
                    content: this.question
                };

                this.chatHistories.push(message);
                this.requestToBot(message.content);
                this.question = '';
                this.scrolltoBottom();
            }
        },

        requestToBot(message) {
            this.loading = true;
            axios.post('https://syynmsdyz2.execute-api.ap-southeast-1.amazonaws.com/V1/chat', {message: message, api_key: '7OPXZulXTB8304aM8ca2'})
            .then(response => {
                let message = {
                    from: 'bot',
                    content: response.data.message
                };
                this.chatHistories.push(message);

                this.loading = false;
                this.scrolltoBottom();

            }).catch(() => {
                let message = {
                    from: 'bot',
                    content: "Sorry, I am not able to response you now!"
                };
                this.chatHistories.push(message);
                this.loading = false;
            });
        },

        scrolltoBottom() {
            let objDiv = document.getElementsByClassName("card-wrap");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }
}
</script>
<style scoped>
.chat-app .chat {
    /* margin-left: 280px; */
    border-left: 1px solid #eaeaea
}

.people-list {
    -moz-transition: .5s;
    -o-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s
}

.people-list .chat-list li {
    padding: 10px 15px;
    list-style: none;
    border-radius: 3px
}

.people-list .chat-list li:hover {
    background: #efefef;
    cursor: pointer
}

.people-list .chat-list li.active {
    background: #efefef
}

.people-list .chat-list li .name {
    font-size: 15px
}

.people-list .chat-list img {
    width: 45px;
    border-radius: 50%
}

.people-list img {
    float: left;
    border-radius: 50%
}

.people-list .about {
    float: left;
    padding-left: 8px
}

.people-list .status {
    color: #999;
    font-size: 13px
}

.chat .chat-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f4f7f6
}

.chat .chat-header img {
    float: left;
    border-radius: 40px;
    width: 40px
}

.chat .chat-header .chat-about {
    float: left;
    padding-left: 10px
}

.chat .chat-history {
    padding: 20px;
    border-bottom: 2px solid #fff
}

.chat .chat-history ul {
    padding: 0
}

.chat .chat-history ul li {
    list-style: none;
    margin-bottom: 10px
}

.chat .chat-history ul li:last-child {
    margin-bottom: 0px
}

.chat .chat-history .message-data {
    margin-bottom: 15px
}

.chat .chat-history .message-data img {
    border-radius: 40px;
    width: 40px
}

.chat .chat-history .message-data-time {
    color: #434651;
    padding-left: 6px
}

.chat .chat-history .message {
    color: #444;
    padding: 15px;
    line-height: 20px;
    font-size: 14px;
    border-radius: 7px;
    display: inline-block;
    position: relative
}


.chat .chat-history .my-message {
    background: #efefef
}

.chat .chat-history .other-message {
    background: #e8f1f3;
    text-align: right
}

.chat .chat-history .other-message:after {
    border-bottom-color: #e8f1f3;
    left: 93%
}

.chat .chat-message {
    padding: 20px
}

.float-right {
    float: right
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0
}

@media only screen and (max-width: 767px) {
    .chat-app .people-list {
        height: 465px;
        width: 100%;
        overflow-x: auto;
        background: #fff;
        left: -400px;
        display: none
    }
    .chat-app .people-list.open {
        left: 0
    }
    .chat-app .chat {
        margin: 0
    }
    .chat-app .chat .chat-header {
        border-radius: 0.55rem 0.55rem 0 0
    }
    .chat-app .chat-history {
        height: 300px;
        overflow-x: auto
    }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .chat-app .chat-list {
        height: 650px;
        overflow-x: auto
    }
    .chat-app .chat-history {
        height: 600px;
        overflow-x: auto
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
    .chat-app .chat-list {
        height: 480px;
        overflow-x: auto
    }
    .chat-app .chat-history {
        height: calc(100vh - 350px);
        overflow-x: auto
    }
}
</style>