<template>
  <div>
    <el-card>
      <el-checkbox label="转为事件" border></el-checkbox>

      <el-form-item label="活动名称">
        <el-col :span="8">
          <el-input ></el-input>
        </el-col>
      </el-form-item>
    </el-card>

    <el-card>
      <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0"
        >查询</el-button
      >
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-table
        :data="authorInfoList"
        border
        style="width: 100%"
        max-height="560"
      >
        <el-table-column
          type="selection"
          prop="prop"
          width="80"
          style="margin-left: 10px"
        ></el-table-column>
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column prop="author_code" label="人物编码" width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>

        <el-table-column prop="photo" label="头像" width="120">
          <template slot-scope="{ row, $index }">
            <el-image
              class="table-td-thumb"
              :src="`@/assets/${row}`"
            ></el-image>
          </template>

          <!-- <template slot-scope="scope">
        <el-image   
          :src="require('../../../assets/'+scope.row.img)"
        ></el-image>
        </template> -->
          <!-- <img :src="photo" alt="" width="70" height="70"></img> -->
          <!-- <template slot-scope="{row, $index }">
            <img :src="require(row.photo)"  style="width: 70px; height: 70px" />
        </template>  -->
          <!-- <template v-slot="scope">
          <img :src="scope.row.photo" alt="" width="70" height="70">
        </template> -->
          <!-- 
          <img :src=`"@/views/product/AuthorInfo"+$` alt="" width="90" height="90"> -->
          <!-- <template v-slot="scope"></template>
            <img :src=`"@/views/product/AuthorInfo"+${scope.row.photo}` alt="" width="90" height="90"></img>
        </template> -->
        </el-table-column>

        <el-table-column prop="author_org" label="所属机构" width="120">
        </el-table-column>
        <el-table-column prop="idcard_no" label="身份证号码" width="200">
        </el-table-column>
        <el-table-column prop="author_desc" label="作者简介" width="120">
        </el-table-column>
        <el-table-column
          prop="creat_time"
          label="创建日期"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="update_time"
          label="修改时间"
          width="150"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="warning" icon="el-icon-edit" size="mini"
              >修改</el-button
            >
            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        style="margin-top: 20px; text-align: center"
        :current-page="1"
        :total="99"
        :page-size="3"
        :pager-count="7"
        :page-sizes="[3, 5, 10]"
        @size-change="handleSizeChange"
        layout="prev, pager, next, jumper,->,sizes,total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "AuthorInfo",
  data() {
    return {
      authorInfoList: [],
      imgUrl: [],
    };
  },
  mounted() {
    this.getAuthorInfoList();
  },
  methods: {
    async getAuthorInfoList() {
      let res = await this.$API.authorInfo.reqAuthorInfoList();
      // console.log(res);
      if (res.code == 200) {
        this.authorInfoList = res.data;
        this.authorInfoList.forEach((item) => {
          this.imgUrl.push(item.photo);
        });
      }
    },
    handleCurrentChange(pager) {
      this.page = pager;
    },
    handleSizeChange(limit) {
      this.limit = limit;
    },
  },
};
</script>

<style>
</style>