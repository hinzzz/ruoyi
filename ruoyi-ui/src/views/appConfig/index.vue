<template>
  <div>
    <el-form ref="info" :model="info" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="主题" prop="id">
        <el-radio-group v-model="info.id" size="medium">
          <el-radio @change="changeTheme()" v-for="(item, index) in idOptions" :key="index" :label="item.id"
            :disabled="item.disabled">{{item.name}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
      <el-image :src="info.url"></el-image>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getTheme,getConfigInfo } from '@/api/appConfig'
export default {
  components: {},
  props: [],
  data() {
    return {
      info: {},
      rules: {
        id: [{
          required: true,
          message: '主题不能为空',
          trigger: 'change'
        }],
      },
      idOptions: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
    }
  },
  computed: {},
  watch: {},
  created() {
    getConfigInfo().then((data)=>{
      this.info = data;
    });
    getTheme().then((data)=>{
      this.idOptions = data;
    })
  },
  mounted() {},
  methods: {
    changeTheme(){
      for(var i in this.idOptions){
        if(this.info.id  == this.idOptions[i].id ){
          this.info = this.copy(this.idOptions[i]);
        }
      }
    },
    submitForm() {
      this.$refs['info'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
  }
}

</script>
<style>
</style>
