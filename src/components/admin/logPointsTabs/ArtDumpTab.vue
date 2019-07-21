<template>
  <div>
    <el-row type="flex" justify="space-around" style="margin-top: 20px;">
      <el-col :span="11" style="overflow: scroll; height: 680px; padding-right: 40px;">
        <el-input placeholder="Username of Artist" v-model="selectedUser" style="padding-bottom: 20px;" />
        <el-row type="flex" justify="space-around" style="vertical-align: middle;">
          <el-col :span="14" style="text-align: left;">
            <h4 style="float: left;  margin-bottom: 30px; margin-top: 0px;">
              Category:
            </h4>
          </el-col>
          <el-col :span="8">
            <el-select v-model="categoryType" placeholder="Select" style="width: 100%;" size="mini">
              <el-option
                v-for="item in categoryOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <div v-if="categoryType !== null">
          <el-row type="flex" justify="space-around" style="vertical-align: middle;">
            <el-col :span="14" style="text-align: left;">
              Bust
            </el-col>
            <el-col :span="8">
              <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="bodyInputs.bust.input"/>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around" style="vertical-align: middle;">
            <el-col :span="14" style="text-align: left;">
              Half Body
            </el-col>
            <el-col :span="8">
              <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="bodyInputs.halfBody.input"/>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around" style="vertical-align: middle;">
            <el-col :span="14" style="text-align: left;">
              Full Body
            </el-col>
            <el-col :span="8">
              <el-input placeholder="Enter Value" size="mini" style="padding-bottom: 10px;" v-model="bodyInputs.fullBody.input"/>
            </el-col>
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
          <el-row>
            <h4 style="float: left;">
              Summary
            </h4>
          </el-row>
          <div class="summary-box" style="height: 150px;">
            <div v-if="bodySubtotal !== 0" style="text-align: left; margin-left: 30px;">
              <strong>
                Base
              </strong>
              <div style="text-align: left; margin-left: 15px;">
                <span>
                  ↳ [{{sketchDumpBase[categoryType.toString()].name}}] 
                  Sketchdump +{{ sketchDumpBase[categoryType.toString()].val }}
                </span>
              </div>
              <div v-for="field in bodyInputs" :key="field.name" style="text-align: left; margin-left: 15px;">
                <span v-if="!(field.input === null || field.input*field[categoryType.toString()] === 0)">
                  ↳ {{field.name}} <i style="font-size: 12px;">(x{{field.input}})</i> +{{ field.input*field[categoryType.toString()] }}
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
            {{ this.summaryTotal === 500 ? '[Capped]' : ''}}
          </h4>
        </div>
      </el-col>
      <el-col :span="10">
        <el-input placeholder="Image URL" v-model="imageURL" style="padding-bottom: 20px;"/>
        <el-image
          style="width: 100%; height: 500px; margin-top: 20px; margin-bottom: 20px;"
          :src="imageURL"
          fit="contain">
        </el-image>
        <el-button style="float: right; margin-top: 15px;">
          Submit
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryType: null,
      imageURL: '',
      selectedUser: '',
      categoryOptions: [{
          value: 'sketchesVal',
          label: 'Sketches'
        }, {
          value: 'flatsVal',
          label: 'Flats'
        }, {
          value: 'shadedVal',
          label: 'Shaded'
        }],
      sketchDumpBase: {
        sketchesVal: {
          name: 'Sketches',
          val: 25
        },
        flatsVal: {
          name: 'Flats',
          val: 30
        },
        shadedVal: {
          name: 'Shaded',
          val: 50
        }
      },
      bodyInputs: {
        bust: {
          name: 'Bust',
          input: null,
          sketchesVal: 5,
          flatsVal: 20,
          shadedVal: 20,
          type: 'multiple'
        },
        halfBody: {
          name: 'Half Body',
          input: null,
          sketchesVal: 10,
          flatsVal: 30,
          shadedVal: 40,
          type: 'multiple'
        },
        fullBody: {
          name: 'Full Body',
          input: null,
          sketchesVal: 20,
          flatsVal: 40,
          shadedVal: 60,
          type: 'multiple'
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

  },
  computed: {
    summaryTotal() {
      return Math.min(500, this.bodySubtotal*this.eventMultiplier)
    },
    bodySubtotal() {
      var total = 0
      Object.keys(this.bodyInputs).forEach(key => {
        var field = this.bodyInputs[key.toString()]
        if (field.input) {
          var count = 1
          if (field.type === 'multiple') {
            count = field.input
          } else if (field.type === 'single') {
            count = 1
          }
          total = total + field[this.categoryType.toString()]*count
        }
      })
      total = total + this.sketchDumpBase[this.categoryType.toString()].val
      return total
    },
    eventMultiplier() {
      var multiplier = 1
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
.el-select-dropdown__list {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
