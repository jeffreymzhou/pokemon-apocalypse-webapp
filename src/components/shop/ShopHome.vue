<template>
  <div>
    <el-row>
      OPTIONAL PROMO BANNER
    </el-row>
    <el-row>
      Flavor text
    </el-row>
    <el-row type="flex" justify="space-around" style="min-width: 1000px;">
      <el-col :span="5" :offset="2">
        <div v-on:click.self="changeTab('character')" class="square-panel">
          CHARA
        </div>
      </el-col>
      <el-col :span="5">
        <div v-on:click.self="changeTab('rp')" class="square-panel">
          RP SHOP
        </div>
      </el-col>
      <el-col :span="5">
        <div v-on:click.self="changeTab('slots')" class="square-panel">
          SLOTS
        </div>
      </el-col>
      <el-col :span="5" >
        <div v-on:click.self="changeTab('items')" class="square-panel">
          ITEMS
        </div>
      </el-col>
      <el-col :span="2">
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

.square-panel {
  height: 200px;
  margin: 0 auto;
  width: 200px;
  line-height: 180px;
  border-radius: 5px;
  border: 1px; 
  font-size: 30px;
  color: white;
  font-weight: bold;
  background-image: linear-gradient( rgba(149, 141, 141, 0.315), rgba(149, 141, 141, 0.315) );
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
  text-shadow: 2px 2px #414141;
  &:hover {
    text-shadow: 5px 5px #888888;
    height: 200px;
    width: 200px;
    font-size: 32px;
    background-image: linear-gradient( rgba(78, 71, 71, 0.315), rgba(78, 71, 71, 0.315) )
  }
}
</style>

