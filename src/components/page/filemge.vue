<template>
  <el-tabs type="card">
    <el-button type="danger">批量删除</el-button>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-tickets"></i>已通过</span>
      <FileMgeA/>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-download"></i>未通过</span>
      <FileMgeB/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import FileMgeA from '@/components/page/filemgea'
import FileMgeB from '@/components/page/filemgeb'

  export default {
    name:'FileMge',
    components:{
      FileMgeA,
      FileMgeB
    }
  };
</script>
