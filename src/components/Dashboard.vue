<template>
  <div>
    <el-row
    type="flex"
    justify="space-between"
    style="background-color: #EBEEF5; height: 60px; margin-bottom: 30px;"
    >
      <el-col :span="6" style="line-height: 60px; margin-left: 20px;">
        <span style="float: left; font-weight: bold; font-style: italic;">
          USERNAME 
        </span>
      </el-col>
      <el-col :span="6" style="line-height: 60px; margin-right: 20px;">
        <span style="float: right; font-weight: bold;">
          POINTS: 1,409
        </span>
      </el-col>
    </el-row>
    <div style="overflow: scroll;">

    <el-row type="flex" justify="space-around" style="margin-top: 30px;">
      <el-col :span=1>
        <!-- spacer -->
      </el-col>
      <el-col :span="3">
        <div
        class="character-card"
        :class="currentCharacter === 1 ? 'current' : ''"
        @click="setCurrentCharacter(1)">
          <div class="label">
            Alexandria Rockwell
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="character-card"
        :class="currentCharacter === 2 ? 'current' : ''"
        @click="setCurrentCharacter(2)">
          <div class="label">
            Alexandria Rockwell
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="character-card"
        :class="currentCharacter === 3 ? 'current' : ''"
        @click="setCurrentCharacter(3)">
          <div class="label">
            Character Slot #3
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="character-card"
        :class="currentCharacter === 4 ? 'current' : ''"
        @click="setCurrentCharacter(4)">
          <div class="label">
            Character Slot #4
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="character-card"
        :class="currentCharacter === 5 ? 'current' : ''"
        @click="setCurrentCharacter(5)">
          <div class="label">
            Character Slot #5
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="character-card"
        :class="currentCharacter === 6 ? 'current' : ''"
        @click="setCurrentCharacter(6)">
          <div class="label">
            Character Slot #6
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <!-- spacer -->
      </el-col>
    </el-row>

     <el-row type="flex" justify="space-around" style="margin-top: 40px;">
      <el-col :span="1">
        <!-- spacer -->
      </el-col>
      <el-col :span="21">
        <div class="character-info-panel" :class="characterPanelOpen ? 'open' : ''">

        </div>
      </el-col>
      <el-col :span="1">
        <!-- spacer -->
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around" style="margin-top: 40px;">
      <el-col :span="1">
        <!-- spacer -->
      </el-col>
      <el-col :span="21">
        <el-tabs type="border-card" style="width: 100%; min-height: 800px; margin: 0 auto; margin-bottom: 100px;">
          <el-tab-pane label="Blurb">
            <BlurbShow
            v-if="blurbState === 'show'"
            @edit="blurbState = 'edit'" />
            <BlurbEdit
            v-if="blurbState === 'edit'"
            @back="blurbState = 'show'"
            @tutorial="blurbState = 'tutorial'"/>
            <BlurbTutorial
            v-if="blurbState === 'tutorial'"
            @back="blurbState = 'edit'"/>
          </el-tab-pane>
          <el-tab-pane label="Achievements">
            Achievements
          </el-tab-pane>
          <el-tab-pane label="OOC Items">
            Out of character Items
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="1">
        <!-- spacer -->
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
import BlurbTutorial from '@/components/dashboard/BlurbTutorial.vue'
import BlurbShow from '@/components/dashboard/BlurbShow.vue'
import BlurbEdit from '@/components/dashboard/BlurbEdit.vue'
export default {
  components: {
    BlurbTutorial,
    BlurbShow,
    BlurbEdit
  },
  data() {
    return {
      currentCharacter: 0,
      characterPanelOpen: false,
      blurbState: 'show'
    }
  },
  methods: {
    setCurrentCharacter(char) {
      if(this.currentCharacter === char) {
        this.currentCharacter = 0 
        this.characterPanelOpen = false
      } else if (this.currentCharacter === 0) {
        this.currentCharacter = char
        this.characterPanelOpen = true
      } else {
        this.currentCharacter = char
        this.characterPanelOpen = false
        setTimeout(() => {
          this.characterPanelOpen = true
        }, 200)
      }
    }
  }
}
</script>

<style lang="scss">
.character-card {
  border: 1px solid #EBEEF5;
  height: 270px;
  width: 190px;
  border-radius: 20px;
  background-color: #EBEEF5;
  margin: auto;
  -webkit-transition: .2s ease-in-out;
  -moz-transition: .2s ease-in-out;
  -o-transition: .2s ease-in-out;
  -ms-transition: box-shadow .2s ease-in-out;
  transition: .2s ease-in-out;
  &:hover {
    background-color:grey;
  }
  .label {
    border: 1px solid grey;
    position: absolute;
    margin-top: -10px;
    margin-left: -10px;
    padding: 5px;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    &:active {
      background-color: rgb(174, 225, 255);
    }
  }
  &.current {
    border: 3px solid rgb(174, 225, 255);
  }
}
.character-info-panel {
  width: 100%;
  height: 0px;
  color: transparent;
  -webkit-transition: .2s ease-in-out;
  -moz-transition: .2s ease-in-out;
  -o-transition: .2s ease-in-out;
  -ms-transition: box-shadow .2s ease-in-out;
  transition: .2s ease-in-out;
  &.open {
    border: 1px solid #EBEEF5;
    border-radius: 3px;
    box-shadow: 0px 2px 3px 0px rgba(138, 138, 138, 0.2), 0px 2px 3px 0px rgba(138, 138, 138, 0.2);
    height: 300px;
  }  
}

</style>
