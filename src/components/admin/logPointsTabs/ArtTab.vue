<template>
  <el-row type="flex" justify="space-around" style="margin-top: 20px;">
    <el-col :span="10" style="overflow: scroll; height: 680px; padding-right: 40px;">
      <el-input placeholder="Username of Artist" v-model="selectedUser"/>
      <el-row>
        <h4 style="float: left;">
          Base Main
        </h4>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Chibi
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="baseInputs.chibiMain.input"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Bust
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="baseInputs.bustMain.input"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Half Body
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="baseInputs.halfbodyMain.input"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Full Body
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="baseInputs.fullbodyMain.input"/>
        </el-col>
      </el-row>
      <el-row>
      <h4 style="float: left;">
        Base NPC
      </h4>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Chibi
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="baseInputs.chibiNPC.input"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Bust
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="baseInputs.bustNPC.input"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Half Body
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="baseInputs.halfbodyNPC.input"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Full Body
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="baseInputs.fullbodyNPC.input"/>
        </el-col>
      </el-row>
      <el-row>
        <h4 style="float: left;">
          Additions
        </h4>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="additionsInputs.flats.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">Flats</el-checkbox>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="additionsInputs.shading.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">Shading</el-checkbox>
      </el-row>
      <el-row type="flex" justify="space-around" style="vertical-align: middle;">
        <el-col :span="14" style="text-align: left;">
          Extra Playable Characters
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="additionsInputs.extraCharacter.input"/>
        </el-col>
      </el-row>
      <el-row>
        <h4 style="float: left;">
          3D Art
        </h4>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="additionsInputs.threeD.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">3D Art</el-checkbox>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="additionsInputs.vfx.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">VFX</el-checkbox>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="additionsInputs.posing.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">Posing</el-checkbox>
      </el-row>
      <el-row>
      <h4 style="float: left;">
        Background
      </h4>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="additionsInputs.simpleBackground.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">Simple</el-checkbox>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="additionsInputs.complexBackground.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">Complex</el-checkbox>
      </el-row>
      <el-row>
        <h4 style="float: left;">
          Event
        </h4>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="eventInputs.miniEvent.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">Prompt/Mini Event</el-checkbox>
      </el-row>
      <el-row style="vertical-align: middle;">
        <el-checkbox v-model="eventInputs.mainEvent.input" style="float: left; margin-bottom: 15px; margin-left: 7px;">Main Event</el-checkbox>
      </el-row>
    </el-col>
    <el-col :span="10">
      <el-input placeholder="Image URL" v-model="imageURL" style="padding-bottom: 20px;"/>
      <el-image
        style="width: 100%; height: 350px"
        :src="imageURL"
        fit="contain">
      </el-image>
      <el-row>
        <h4 style="float: left;">
          Summary
        </h4>
      </el-row>
        <div class="summary-box" style="height: 150px;">
          <div v-if="baseSubtotal !== 0" style="text-align: left; margin-left: 30px;">
            <strong>
              Base
            </strong>
            <div v-for="field in baseInputs" :key="field.name" style="text-align: left; margin-left: 15px;">
              <span v-if="!(field.input === null || field.input*field.val === 0)">
                ↳ {{field.name}} <i style="font-size: 12px;">(x{{field.input}})</i> +{{ field.input*field.val }}
              </span>
            </div>
          </div>
          <div v-if="additionsSubtotal !== 0" style="text-align: left; margin-left: 30px;">
            <strong>
              Additions
            </strong>
            <div v-for="field in additionsInputs" :key="field.name" style="text-align: left; margin-left: 15px;">
              <span v-if="!(field.input === null || field.input*field.val === 0)">
                ↳ {{field.name}} <i v-if="field.type === 'multiple'" style="font-size: 12px;">(x{{field.input}})</i> +{{ field.input*field.val }}
              </span>
            </div>
          </div>
          <div v-if="eventMultiplier > 1" style="text-align: left; margin-left: 30px;">
            <strong>
              Event Multiplier
            </strong>
            <div v-for="field in eventInputs" :key="field.name" style="text-align: left; margin-left: 15px;">
              <span v-if="field.input">
                ↳ {{field.name}} x{{ field.val }}
              </span>
            </div>
          </div>
        </div>
        <h4 style="float: left;">
          {{ eventMultiplier === 0 ? 'Error: Select only 1 event type.' : 'Total: ' + this.summaryTotal}}
        </h4>
      <el-button style="float: right; margin-top: 15px;">
        Submit
      </el-button>
    </el-col>
  </el-row>
</template>


<script>
import {firebase} from '@/firebase'
import {db} from '@/firebase'
export default {
  data() {
    return {
      imageURL: '',
      selectedUser: '',
      baseInputs: {
        chibiMain: {
          name: 'Chibi',
          input: null,
          val: 30,
          type: 'multiple'
        },
        bustMain: {
          name: 'Bust',
          input: null,
          val: 25,
          type: 'multiple'
        },
        halfbodyMain: {
          name: 'Half Body',
          input: null,
          val: 50,
          type: 'multiple'
        },
        fullbodyMain: {
          name: 'Full Body',
          input: null,
          val: 75,
          type: 'multiple'
        },
        chibiNPC: {
          name: 'Chibi (NPC)',
          input: null,
          val: 15,
          type: 'multiple'
        },
        bustNPC: {
          name: 'Bust (NPC)',
          input: null,
          val: 12.5,
          type: 'multiple'
        },
        halfbodyNPC: {
          name: 'Half Body (NPC)',
          input: null,
          val: 25,
          type: 'multiple'
        },
        fullbodyNPC: {
          name: 'Full Body (NPC)',
          input: null,
          val: 37.25,
          type: 'multiple'
        }
      },
      additionsInputs: {
        flats: {
          name: 'Flats',
          input: false,
          val: 50,
          type: 'single'
        },
        shading: {
          name: 'Shading',
          input: false,
          val: 100,
          type: 'single'
        },
        simpleBackground: {
          name: 'Simple Background',
          input: false,
          val: 15,
          type: 'single'
        },
        complexBackground: {
          name: 'Complex Background',
          input: false,
          val: 50,
          type: 'single'
        },
        extraCharacter: {
          name: 'Extra Character',
          input: null,
          val: 10,
          type: 'multiple'
        },
        threeD: {
          name: '3D Art',
          input: false,
          val: 150,
          type: 'single'
        },
        vfx: {
          name: 'VFX',
          input: false,
          val: 50,
          type: 'single'
        },
        posing: {
          name: 'Posing',
          input: false,
          val: 50,
          type: 'single'
        }
      },
      eventInputs: {
        miniEvent: {
          name: 'Mini Event',
          input: false,
          val: 1.25,
          type: 'single'
        },
        mainEvent: {
          name: 'Main Event',
          input: false,
          val: 1.5,
          type: 'single'
        }
      }
    }
  },
  methods: {
    logPoints() {
      db.collection("User Points").doc('1').set({
        hello: "Jeffrey"
      }).then(() => {
        console.log("done")
      })
    }
  },
  mounted() {
  },
  computed: {
    summaryTotal() {
      return (this.baseSubtotal + this.additionsSubtotal)*this.eventMultiplier
    },
    baseSubtotal() {
      var total = 0
      Object.keys(this.baseInputs).forEach(key => {
        var field = this.baseInputs[key.toString()]
        if (field.input) {
          var count 
          if (field.type === 'multiple') {
            count = field.input
          } else if (field.type === 'single') {
            count = 1
          }
          total = total + field.val*count
        }
      })
      return total
    },
    additionsSubtotal() {
      var total = 0
      Object.keys(this.additionsInputs).forEach(key => {
        var field = this.additionsInputs[key.toString()]
        if (field.input) {
          var count 
          if (field.type === 'multiple') {
            count = field.input
          } else if (field.type === 'single') {
            count = 1
          }
          total = total + field.val*count
        }
      })
      return total
    },
    eventMultiplier() {
      var multiplier = 1
      //events multiplier
      if (this.eventInputs.miniEvent.input && this.eventInputs.mainEvent.input) {
        multiplier = 0
      } else if (this.eventInputs.mainEvent.input) {
        multiplier = this.eventInputs.mainEvent.val
      } else if (this.eventInputs.miniEvent.input) {
        multiplier = this.eventInputs.miniEvent.val
      } else {
        multiplier = 1
      }
      return multiplier
    }
  }

}
</script>


<style>
.summary-box {
  background-color: #F5F7FA; 
  border:1px solid #bdc2db; 
  border-radius: 4px; 
  overflow: scroll; 
  padding-top: 15px; 
  padding-bottom: 15px;
}
</style>
