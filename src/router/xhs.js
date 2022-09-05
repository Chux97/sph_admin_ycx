let str1 = "3 3 10"
let str2 = "1 2 3"

const [n,m,k] = str1.split(' ').map(Number);
let str = str2.split(' ').join('');
let res;
let flag = 0;
for(let i=0;i<m && k <= flag;i++){
  res = str + str.split('').reverse().join('');
  console.log(res);
  str = res;
  flag = res.length;
}
console.log(res.charAt(k-1))