const { odd, even } = require("./var");
// 다른 함수 명으로 import할 수 도 있다.
const checkNumber = require("./func");

const checkStringOddOrEven = (str) => {
  if (str.length % 2) {
    return odd;
  }
  return even;
};

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hi"));

// import를 사용하기 위해선 import 이름 from 위치 형태를 사용하고, export default 이름 으로 사용해야 한다. 또한 노드에서 module기능을 이용하기 위해선 확장자를 mjs 로 설정해야한다. 안그러면 package.json에 type:'modlue'을 지정해야한다.
