<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px">
      <b style="color: white;">
        Total points: 100
      </b>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="120">
            </el-table-column>
            <el-table-column prop="address" label="Address">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

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
      count: 0,
      transaction: {
        date: '10-20-2019',
        points: -100,
        type: 'earnings',
      }
    }
  }
}
</script>

