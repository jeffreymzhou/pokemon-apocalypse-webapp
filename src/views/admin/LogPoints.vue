<template>
    <div style="margin-top: 20px; height: 100%;">
        <el-tabs type="border-card" style="max-height: 920px; width:900px; position: relative; margin: 0 auto;">
          <el-tab-pane label="Art">
            <ArtTab />
          </el-tab-pane>
          <el-tab-pane label="Art Dump">
            <ArtDumpTab />
          </el-tab-pane>
          <el-tab-pane label="Writing">
            <WritingTab />
          </el-tab-pane>
          <el-tab-pane label="Manual">
            <ManualTab />
          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import {firebase} from '@/firebase'
import {db} from '@/firebase'
import ArtTab from '@/components/admin/logPointsTabs/ArtTab.vue'
import ArtDumpTab from '@/components/admin/logPointsTabs/ArtDumpTab.vue'
import WritingTab from '@/components/admin/logPointsTabs/WritingTab.vue'
import ManualTab from '@/components/admin/logPointsTabs/ManualTab.vue'

export default {
  components: {
    ArtTab,
    ArtDumpTab,
    WritingTab,
    ManualTab
  },
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

