<template>
  <div>
    <el-container class="header" style="height: 50px;">
      <span>Tom</span>
    </el-container>
  </div>
</template>

<style>
  
  .el-aside {
    color: #333;
    overflow: hidden;
  }
  .scrollable {
    overflow: auto
  }

.header{
    width: 100%;
    height: 139px;  
    background-color: #28292E;
}


#left_side{
    width: 210px;
    height: 700px;
    overflow:hidden; 
    position:absolute;
    font-size: 16px;
}
#content{
     height: auto;
     padding: 20px;
     margin-left: 230px;
     margin-right: 20px;
    padding-bottom: 30px;
    overflow: auto; 
 }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
       
      }
      return {
        tableData: Array(20).fill(item),
        totalPoints: 100,
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  };
</script>