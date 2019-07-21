<template>
  <div style="display:flex; background: white;">
    <div class="menu">
      <div 
      :class="currentTab === 'dashboard' ? 'current' : ''"
      class="menu-item"
      @click="changeTab('dashboard')">
        <div style="width: 50px; float: left;">
          <i class="el-icon-menu menu-icon"></i>
        </div>
        <span class="menu-label">Dashboard</span>
      </div>
      <div 
      :class="currentTab === 'points' ? 'current' : ''"
      class="menu-item"
      @click="changeTab('points')">
        <div style="width: 50px; float: left;">
          <i class="el-icon-coin menu-icon"></i>
        </div>
        <span class="menu-label">Points</span>
      </div>
      <div 
      :class="currentTab === 'shop' ? 'current' : ''"
      class="menu-item"
      @click="changeTab('shop')">
        <div style="width: 50px; float: left;">
          <i class="el-icon-goods menu-icon"></i>
        </div>
        <span class="menu-label">Shop</span>
      </div>
      <div 
      :class="currentTab === 'settings' ? 'current' : ''"
      class="menu-item"
      @click="changeTab('settings')">
        <div style="width: 50px; float: left;">
          <i class="el-icon-setting menu-icon"></i>
        </div>
        <span class="menu-label">Settings</span>
      </div>
      <div 
      :class="currentTab === 'admin' ? 'current' : ''"
      class="menu-item"
      @click="changeTab('admin')">
        <div style="width: 50px; float: left;">
          <i class="el-icon-s-custom menu-icon"></i>
        </div>
        <span class="menu-label">Admin</span>
      </div>
    </div>
    <div
    >
      <!-- <el-menu 
        style="text-align: left"
        @select="handleSelect"
        :collapse="sidebarCollapse"
      >
        <el-menu-item index="dashboard"
        @mouseover="func()">
          <i class="el-icon-menu"></i>
          <span slot="title">Dashboard</span>
        </el-menu-item>
        <el-menu-item index="points">
          <i class="el-icon-coin"></i>
          <span slot="title">Points</span>
        </el-menu-item>
        <el-menu-item index="shop">
          <i class="el-icon-goods"></i>
          <span slot="title">Shop</span>
        </el-menu-item>
        <el-menu-item index="settings">
          <i class="el-icon-setting"></i>
          <span slot="title">Settings</span>
        </el-menu-item>
        <el-menu-item index="admin">
          <i class="el-icon-setting"></i>
          <span slot="title">Admin</span>
        </el-menu-item>
      </el-menu> -->
      </div>
      <el-main style="padding: 0px; height: calc(100vh);">
      <Dashboard
        v-if="currentTab === 'dashboard'"
      />
      <Points
        v-if="currentTab === 'points'"
      />
      <Shop
        v-if="currentTab === 'shop'"
      />
      <Settings
        v-if="currentTab === 'settings'"
      />
      <Admin
        v-if="currentTab === 'admin'"
      />
      </el-main>
    </div>
</template>

<style lang="scss">
.menu {
  width: 70px;
  height: calc(100vh);
  background-color: white;
  border-right: 2px solid rgb(230, 230, 230);
  overflow: hidden;
  -webkit-transition: .4s ease-in-out;
  -moz-transition: .4s ease-in-out;
  -o-transition: .4s ease-in-out;
  -ms-transition: box-shadow .4s ease-in-out;
  transition: .4s ease-in-out;
  text-align: left;
  color: grey;
  &:hover {
    width: 200px;
    color: rgb(110, 110, 110);
  }
  .current {
      background-color: rgb(246, 246, 246);
      color: rgb(58, 220, 248);
    }
  .menu-item {
    padding: 25px;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
      background-color: rgb(241, 248, 251);
    }
  }
}


  .el-header {
    background-color: #5D5f67;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
import Dashboard from '@/components/Dashboard.vue'
import Points from '@/components/Points.vue'
import Shop from '@/components/Shop.vue'
import Settings from '@/components/Settings.vue'
import Admin from '@/views/admin/LogPoints.vue'
  export default {
    components:{ 
      Dashboard,
      Points,
      Shop,
      Settings,
      Admin
    },
    data() {
      return {
        currentTab: '',
        sidebarCollapse: true,
      }
    },
    methods: {
      load () {
        this.count += 2
      },
      changeTab(key) {
        console.log("change tab"
        )
        this.currentTab = key
      },
      func() {
        console.log("MOSUEOVER")
      }
    }
  };
</script>