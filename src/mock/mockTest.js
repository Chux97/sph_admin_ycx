import authorInfo from './authorInfo.json';
//引入mockjs插件开始模拟数据
import Mock from 'mockjs';

Mock.mock("/mock/authorInfo", { code: 200, data: authorInfo});