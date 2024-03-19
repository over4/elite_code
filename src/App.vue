<template>
  <div class = "main">
    
    <div class = "nav">
      <TestSideBar 
        @linkClickedArrayHashing="clickedArrayHashing"
        @linkClickedTwoPointers="clickedTwoPointers"
        @linkClickedSlidingWindow="clickedSlidingWindow"
        @linkClickedStack="clickedStack"
        @linkClickedBinarySearch="clickedBinarySearch"
        @linkClickedLinkedList="clickedLinkedList"
        @linkClickedTrees="clickedTrees"
        @linkClickedTries="clickedTries"
        @linkClickedHeapPriority="clickedHeapPriority"
        @linkClickedBackTracking="clickedBackTracking"
        @linkClickedGraphs="clickedGraphs"
        @linkClickedGreedy="clickedGreedy"
        @linkClickedIntervals="clickedIntervals"
      />
    </div>
    <div class = "content">
        <Details 
          v-if = "showDetails"
          :code="importCode"
          :explaination="importexplaination"
          :youtubeLink="importyoutubelink">
        </Details>
        <h1 v-if ="showTitle">Click A Question Type!</h1>
        <div class="parentOfCards">
          <Card
            v-if="showCards"
            class="card"
            v-for="(question, index) in questions"
            :key="index"
            :title="question.title"
            :difficulty="question.difficulty"
            :link="question.link"
            @linkClickedCard="clickedCard"
          />
        </div>
    </div>
  </div>
</template>

<script>
import TestSideBar from './components/testSideBar.vue'
import Card from './components/card.vue'
import Details from './components/showProblem.vue'
import questions from './questionTitles.js'
import testCode from './testcode.js'

export default {
  components:{
    TestSideBar,
    Card,
    Details,
  },
  data() {
    return {
      importCode: testCode.code,
      importexplaination: testCode.explanation,
      importyoutubelink: testCode.link,
      showDetails: false,
      showCards: false,
      showTitle: true, // Control the rendering of the <h1> tag
      questions: [],
    };
  },
  methods: {
    clickedArrayHashing() {
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showDetails = false;
      this.questions = questions.ArrayHashing
      this.showCards = true
      
    },
    clickedTwoPointers(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.TwoPointers
    },
    clickedSlidingWindow(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.SlidingWindow
    },
    clickedStack(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.Stack
    },
    clickedBinarySearch(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.BinarySearch
    },
    clickedLinkedList(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.LinkedList
    },
    clickedTrees(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.Trees
    },
    clickedTries(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.Tries
    },
    clickedHeapPriority(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.HeapPriority
    },
    clickedBackTracking(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.BackTracking
    },
    clickedGraphs(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.Graphs
    },
    clickedGreedy(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.Greedy
    },
    clickedIntervals(){
      this.showTitle = false; // Change this value to hide the <h1> tag
      this.showCards = true
      this.showDetails = false;
      this.questions = questions.Intervals
    },
    clickedCard(clickedTitle){
      this.showCards = false
      this.showTitle = false
      this.showDetails = true
      console.log("in card click: ", clickedTitle)
    }
  }
}
</script>
<style scoped>
.main {
  padding:0;
  margin:0;
  display: flex;
  height: 100vh; /* Optional: Adjust the height as per your requirement */
}

.nav {
  width: 20%; /* Set nav to take up 15% of the screen width */
  /* Optional styling for the nav */
  background-color: #f0f0f0; /* Example background color */
}

.content {
  width: 80%; /* Set content to take up the remaining 85% of the screen width */
  /* Optional styling for the content */
  background-color: #E6E6FA; /* Example background color */
}
.content h1{
  opacity: 40%;
  position: absolute;
  left: 40%;
  top: 40%;
}
.parentOfCards{
  display: flex;
  flex-wrap: wrap;
}
.card{
  width: 30%;
  height: 200px;
}
</style>