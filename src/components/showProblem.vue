<template>
    <div class="main">
        <div class="content">
            <div class="top">
                <pre><code class="language-javascript" v-html="code"></code></pre>
            </div>
            <div class="bottom">
                <div class="youtube">
                    <iframe v-bind:src= "youtubeLink"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div class="explaination">
                    <p>{{ explaination }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import hljs from 'highlight.js';
//import 'highlight.js/styles/tokyo-night-dark.css'; // Or any other style you prefer
import 'highlight.js/styles/shades-of-purple.css'; // Or any other style you prefer
//import testCode from '../testcode'
export default {
    props:{
        code:String,
        explaination:String,
        youtubeLink:String
    },
    mounted() {
        this.$nextTick(() => {
            hljs.highlightAll();
        });
    },
    data(){
        return{
            // code:testCode.code,
            // explaination: testCode.explanation,
            // youtubeLink:testCode.link
        }
    },
    methods:{
    }
};
</script>
<style scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.content {
    height: 90%;
    width: 85%;
    display: flex;
    flex-direction: column;
}
.top {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.top::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40px; /* Height of the gradient effect */
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)); /* Adjust colors to match your component */
}
.top pre {
    height: 100%;
    width: 100%;
    margin: 0; 
    display: flex; 
    flex-direction: column; 
}
.top code {
    flex: 1; 
    display: block; 
    overflow: auto; 
}
.language-javascript {
    overflow-y: scroll;
    scrollbar-width: none; /* For Firefox */
}

.language-javascript::-webkit-scrollbar {
    display: none; /* For WebKit browsers */
}
.bottom {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
}

.youtube {
    width: 50%;
}

.youtube iframe {
    height: 100%;
    width: 100%;
}

.explaination {
    width:50%;
    background-color: #9290C3;
}

</style>