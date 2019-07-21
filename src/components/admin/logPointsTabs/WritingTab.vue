<template>
  <el-row type="flex" justify="space-around" style="margin-top: 20px; height: 500px;">
    <el-col :span="11" style="overflow: scroll; padding-right: 40px;">
      <el-input
          v-model="userSearch"
          placeholder="Search Username(s)"
          @keyup.enter.native="handleEnter()"/>
       <el-table
        v-if="userSearch !== ''"
        :data="filteredUsers"
        highlight-current-row
        style="width: 100%; padding-top: -20px;"
        @row-click="addUser"
        max-height="250">
        <el-table-column
        :label="dropdownMessage">
          <template slot-scope="scope">
            {{ scope.row.username }}
            <i class="el-icon-plus" style="float: right; margin-top: 5px;"></i>
          </template>
        </el-table-column>
        <template slot="empty">
            No usernames found
        </template>
      </el-table>
      <el-input placeholder="Writing Submission URL" v-model="writingSubURL" style="margin-top: 20px;">
      </el-input>
      <div v-if="writingSubURL !== ''" style="padding-left: 10px; text-align: left; margin-top: 10px;">  
        ↳
        <a target="_blank" :href="writingSubURL">
          Test Link
        </a>
      </div>
      <el-row type="flex" justify="space-around" style="vertical-align: middle; margin-top: 20px;">
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
      <el-row type="flex" justify="space-around" style="vertical-align: middle; margin-top: 20px;">
        <el-col :span="14" style="text-align: left;">
          <h4 style="float: left;  margin-bottom: 30px; margin-top: 0px;">
            Word Count:
          </h4>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="Enter Value" size="mini" v-model="wordcount"/>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="10">
      <el-row>
        <h4 style="float: left;  margin-bottom: 15px; margin-top: 0px;">
          Participants ({{ selectedUsers.length }})
        </h4>
      </el-row>
      <el-row style="height: 120px;">
        <el-tag
          :key="user.username"
          v-for="user in selectedUsers"
          closable
          :disable-transitions="true"
          @close="subtractUser(user)"
          style="margin-right: 10px; margin-bottom: 10px; float: left;">
          {{user.username}}
        </el-tag>
      </el-row>
      <el-row>
        <h4 style="float: left;">
          Summary
        </h4>
      </el-row>
        <div class="summary-box" style="height: 180px;">
          <div v-if="summaryTotal !== 0" style="text-align: left; margin-left: 30px;">
            <strong>
              Writing
            </strong>
            <div style="text-align: left; margin-left: 15px;">
              <span>
                ↳ {{pointDivider[categoryType.toString()].name}} 
                <i style="font-size: 12px;">({{ wordcount }} words)</i>
                +{{ wordcount/pointDivider[categoryType.toString()].val}} points
              </span>
            </div>
            <div v-if="this.selectedUsers.length > 1" style="text-align: left; margin-left: 15px;">
              <span>
                ↳ {{ this.selectedUsers.length }} participants <br>
                {{ wordcount/pointDivider[categoryType.toString()].val }} 
                ÷ {{ this.selectedUsers.length }} = {{summaryTotal}} points 
                <span style="font-size: 12px;"> (per participant) </span>
              </span>
            </div>
          </div>
        </div>
        <h4 style="float: left;">
          Total: {{ this.summaryTotal}}
        </h4>
      <el-button style="float: right; margin-top: 15px;">
        Submit
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      wordcount: null,
      selectedUsers: [],
      writingSubURL: '',
      userSearch: '',
      categoryType: null,
      categoryOptions: [{
        value: 'prose',
        label: 'Prose'
      }, {
        value: 'poetry',
        label: 'Poetry'
      }],
      pointDivider: {
        prose: {
          val: 10,
          name: "Prose"
        },
        poetry: {
          val: 5,
          name: "Poetry"
        }
      },
      allUsers: [{
          username: 'Jeffrey',
          id: 123456
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Ada',
          id: 34567
        },
        {
          username: 'Philip',
          id: 4567
        },
        {
          username: 'Rachel',
          id: 12345679
        },
        {
          username: 'Christopher',
          id: 3456735353
        }]
    }
  },
  methods: {
    addUser(row) {
      this.userSearch = ''
      this.selectedUsers.push(row)
      var userIndex = this.allUsers.indexOf(row)
      this.allUsers.splice(userIndex, 1)
    },
    subtractUser(user) {
      console.log(user)
      var userIndex = this.selectedUsers.indexOf(user)
      this.selectedUsers.splice(userIndex, 1)
      this.allUsers.push(user)
    },
    handleEnter() {
      console.log("handle enter")
    if (this.filteredUsers.length === 1) {
      this.addUser(this.filteredUsers[0])
    }
  }
  },
  computed: {
    filteredUsers() {
      return this.allUsers.filter(user => this.userSearch !== '' &&
      (user.username.toLowerCase().includes(this.userSearch.toLowerCase())))
    },
    dropdownMessage() {
      var message 
      if (this.filteredUsers.length === 0) {
        return ''
      } else {
        if (this.filteredUsers.length === 1) {
          return 'enter or click to select'
        }
        return 'click to select'
      }
    },
    summaryTotal() {
      var total = 0
      var participants = this.selectedUsers.length
        if (this.categoryType !== null && this.wordcount !== null && participants !== 0) {
          total = this.wordcount/(this.pointDivider[this.categoryType.toString()].val*participants)
        console.log(this.wordcount)
        }
      return Math.round(total)
    }
  }
}
</script>
