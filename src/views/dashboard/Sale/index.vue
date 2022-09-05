<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-tabs class="tab">
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visite"></el-tab-pane>
        <!-- 头部右侧内容 -->
      </el-tabs>
      <div class="right">
        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span>
        <!--    v-model="value1" -->
        <el-date-picker
          v-model="date"
          class="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>

    <div>
      <el-row :gutter="10">
        <el-col :span="18">
          <div class="charts" ref="charts">121</div>
        </el-col>
        <el-col :span="6">
          <div>112</div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      activeName: "销售额",
    };
  },
  mounted() {
    let mycharts = echarts.init(this.$refs.charts);

    mycharts.setOption({
      title:{
        text:"销售额趋势"
      },
      tooltip:{
        trigger:"axis",
        axisPointer:{
            type:"shadow",
        }
      },
      grid:{
        left:"3%",
        right:"4%",
        bottom:"3%",
        containLabel:true,
      },
      xAxis: {
        type: "category",
        data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        axisTick:{
            alignWithLabel:true,
        }
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130,167,99,198,200,188],
          type: "bar",
          color:"yellowgreen",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    });
  },
};
</script>

<style scoped>
.el-card__header {
  border-bottom: none;
}

.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0px;
}
.date {
  width: 250px;
  margin: 0px 20px;
}
.right span {
  margin: 0px 10px;
}
.charts {
  width: 100%;
  height: 300px;
}
ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0px;
}
ul li {
  height: 8%;
  margin: 10px 0px;
}
.rindex {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  color: white;
  text-align: center;
}
.rvalue {
  float: right;
}
</style>