<template>
  <el-row style="padding: 20px;">
    <el-row type="flex" justify="space-between">
      <el-col :span="12" style="padding-right: 10px;">
        <el-input placeholder="Username of Artist" v-model="selectedUser"/>
      </el-col>
      <el-col :span="12" style="padding-left: 10px;">
        <el-input placeholder="Optional URL" v-model="linkURL"/>
      </el-col>
    </el-row>
    <h4 style="float: left;">
      Summary:
    </h4>
    <el-input
      type="textarea"
      :rows="5"
      placeholder="Type Notes Here"
      v-model="manualNotes"
      style="margin-bottom: 30px;"
    >
    </el-input>
    <el-row>
      <el-col :span="2" style="margin-top: 7px;">
        <strong>
          Total:
        </strong>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="Enter Value" v-model="summaryTotal"></el-input>
      </el-col>
      <el-button style="float: right;">
        Submit
      </el-button>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      selectedUser: null,
      linkURL: '',
      summaryTotal: null,
      manualNotes: ''
    }
  }
}
</script>

<style scoped>
.el-textarea__inner {
  background-color: #F5F7FA !important;
  padding-top: 20px !important;
  padding-left: 20px !important;
}
</style>
