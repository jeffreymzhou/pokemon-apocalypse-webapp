<template>
  <div>
    <el-row type="flex" justify="space-between" style="min-width: 1000px; height: 50px; padding-top: 20px;">
      <el-col :span="4">
        <button class="shop-tab" @click="changeTab('character')">
          CHARA
        </button>
      </el-col>
      <el-col :span="4">
        <button class="shop-tab" @click="changeTab('rp')">
          RP SHOP
        </button>
      </el-col>
      <el-col :span="8">
        <button class="shop-tab" @click="changeTab('home')">
          Poke-Apocalypse Shop
        </button>
      </el-col>
      <el-col :span="4">
        <button class="shop-tab" @click="changeTab('slots')">
          SLOTS
        </button>
      </el-col>
      <el-col :span="4">
        <button class="shop-tab" @click="changeTab('items')">
          ITEMS
        </button>
      </el-col>
    </el-row>
    <ShopHome 
    v-if="currentTab === 'home'"/>
    <ShopCharacter
    v-if="currentTab === 'character'"/>
    
  </div>
</template>

<script>
import ShopHome from '@/components/shop/ShopHome.vue'
import ShopCharacter from '@/components/shop/ShopCharacter.vue'
export default {
  components: {
    ShopHome,
    ShopCharacter
  },
  data() {
    return{
      currentTab: 'home',
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style lang="scss">
.shop-tab {
  border: 0px;
  font-size: 15px;
  color: grey;
  &:hover {
    color: lightblue;
  }
  &:focus {
    outline: 0px;
  }
}


</style>


