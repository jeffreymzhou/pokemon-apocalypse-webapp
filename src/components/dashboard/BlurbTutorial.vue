<template>  
  <el-row type="flex" justify="space-around" style="margin-top: 20px; margin-bottom: 20px;">
    <el-col :span="11">
      <el-input
        type="textarea"
        :rows="31"
        placeholder="Type Notes Here"
        v-model="tutorialText"
        style="margin-bottom: 30px; margin-right: 30px;"
      />
      <el-button
        type="primary"
        style="float: left;"
        @click="$emit('back')">
        Back to Editing
      </el-button>
      <el-button type="info" @click="resetTutorial()" style="float: right;">
        Reset Tutorial
      </el-button>
    </el-col>
    <el-col :span="11">
      <div id="blurb" style="text-align: left; max-width: 600px; height: 750px; padding-right: 20px; overflow: scroll;">
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tutorialText: '',
      tutorialDefault: '<h3> Welcome to your HTML Tutorial! </h3>\
\n\n<!-- This is a comment! It won\'t show up visually, but can be used as a note/reminder -->\
\n\nWe\'ll demonstrate how to use some of the most common HTML formatting options. They\'re super easy and straight forward!\
\n<br>                                                                    <!-- The <br> tag gives you a line break -->\
\n<br>\
\nWhile following along, make sure to read the actual code for it to make sense! Also, feel free to mess around with it! You can alway reset the tutorial using the button at the bottom.\
\n<br>\
\n\n<p> Let\'s get started! </p>\
\n<hr>                                                                                                 <!-- <hr> is a divider tag -->\
\n\n<h4> HTML Basics </h4>           <!-- \'h\' tags are \'header\' tags. \'h4\' is the 4th largest. -->\
\n\nEverything in HTML can be styled using "tags". These are basically wrappers around your text so that your browser can understand how to display it visually. Most HTML tags will use this format: <b>YOUR TEXT HERE</b>. Here, the tag name is "b", short for "bold", but you can replace that with a lot of other things to do some really cool formatting!\
\n\n<h4> Text Layout </h4>\
\n\nThe default styling is left aligned...\
\n<div style="text-align: right;">\
\n...but you can easily override this by doing this!\
\n</div>\
\n<div style="text-align: center;">\
\nOr even center it, like this!\
\n</div>\
\n<p>\
\nThis is a paragraph! It provides default padding on the top and bottom of your text.\
\n</p>\
\n\n<h4> Text Formatting </h4>\
\n\nThis is some <span style="font-size: 12px;">small</span> text.\
\n<br>\
\nThis is some <span style="color: blue"> colored </span> text.\
\n<br>\
\nCustomize color even further with <span style="color: #F404AA"> hex!</span>\
\n<br>\
\nOh, and here\'s <b> bolded </b> and <i> italicized</i> as well.\
\n<p>\
\nOne last thing...\
\n</p>\
\nNotice how extra whitespaces       don\'t      show up?\
\n<br>\
\nThat\'s because HTML doesn\'t read past the first \'space\'.\
\n<br>\
\nWhat you need to use instead is     &nbsp;    <-- that thingy.\
\n&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  Or a lot of them.\
\n<hr>\
\n\n<p>\
\nAlright, we hope you enjoyed our simple tutorial. Now go and enjoy customizing your blurb! Don\'t forget, there are LOADS more things you can do that are just one google away <3.\
\n</p>\
\n\n-- the team'
    }
  },
  mounted() {
    this.tutorialText = this.tutorialDefault
  },
  methods: {
    resetTutorial() {
      this.tutorialText = this.tutorialDefault
    }
  },
  watch: {
    tutorialText() {
      document.getElementById('blurb').innerHTML = this.tutorialText
    }
  }
}
</script>