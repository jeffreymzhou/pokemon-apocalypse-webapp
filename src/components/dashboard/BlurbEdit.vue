<template>
  <div>
    Blurb edit
    <el-button @click="$emit('back')">
      Cancel
    </el-button>
    <el-button @click="$emit('save', this.blurbEdit)">
      Save
    </el-button>
    <el-button @click="$emit('tutorial')">
      Show Tutorial
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blurbEdit: ''
    }
  },
  mounted() {
    this.blurbEdit
  }
}
</script>

