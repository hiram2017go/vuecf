<template>
  <el-tabs type="card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-rank"></i>内审</span>
      <SystemSetA/>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-tickets"></i>系统操作员</span>
      <SystemSetB/>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-tickets"></i>ip白名单</span>
      <SystemSetC/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import SystemSetA from '@/components/page/systemseta'
import SystemSetB from '@/components/page/systemsetb'
import SystemSetC from '@/components/page/systemsetc'

  export default {
    name:'UserMge',
    components:{
      SystemSetA,
      SystemSetB,
      SystemSetC
    }
  };
</script>
