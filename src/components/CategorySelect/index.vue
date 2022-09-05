<template>
  <div>
    <!-- inline:代表行类表单 一行放多个表单元素 -->
    <el-form :inline="true" class="demo-form-inline" :model="categoryForm">
      <el-form-item label="一级分类">
        <el-select
          placeholder="请选择"
          v-model="categoryForm.category1Id"
          @change="handler1"
          :disabled="show"
        >
          <el-option
            :label="c1.name"
            :value="c1.id"
            v-for="(c1, index) in list1"
            :key="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          placeholder="请选择"
          v-model="categoryForm.category2Id"
          @change="handler2"
          :disabled="show"
        >
          <el-option
            :label="c2.name"
            :value="c2.id"
            v-for="(c2, index) in list2"
            :key="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          placeholder="请选择"
          v-model="categoryForm.category3Id"
          @change="handler3"
          :disabled="show"
        >
          <el-option
            :label="c3.name"
            :value="c3.id"
            v-for="(c3, index) in list3"
            :key="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Level } from 'chalk';
export default {
  name: "CategorySelect",
  props:['show'],
  data() {
    return {
      list1: [],
      list2: [], //二级分类
      list3: [], //三级分类
      // 收集相应的一级二级三级分类的id
      categoryForm: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
      },
    };
  },
  mounted() {
    this.getCategory1List();
  },
  methods: {
    // 获取一级分类
    async getCategory1List() {
      let res = await this.$API.attr.reqCategory1List();
      if (res.code == 200) {
        this.list1 = res.data;
      }
    },
    // 一级分类的select回调(当一级分类的option发生改变的时候获取相应的二级分类数据)
    async handler1() {
      //清除数据
      this.list2 = [];
      this.list3 = [];
      this.categoryForm.category2Id = "";
      this.categoryForm.category3Id = "";
      // 结构出一级分类id
      const { category1Id } = this.categoryForm;
      this.$emit("getCategoryId", {categoryId:category1Id,level:1});
      let res = await this.$API.attr.reqCategory2List(category1Id);
      if (res.code == 200) {
        this.list2 = res.data;
      }
    },
    // 二级分类的select回调(当二级分类的option发生改变的时候获取相应的三级分类数据)
    async handler2() {
      //清除数据
      this.list3 = [];
      this.categoryForm.category3Id = "";
      const { category2Id } = this.categoryForm;
      this.$emit("getCategoryId", {categoryId: category2Id,level:2});
      let res = await this.$API.attr.reqCategory3List(category2Id);
      if (res.code == 200) {
        this.list3 = res.data;
      }
    },
    handler3() {
      const {category3Id} = this.categoryForm;
      this.$emit("getCategoryId", {categoryId:category3Id,level:3});
    },
  },
};
</script>

<style>
</style>template