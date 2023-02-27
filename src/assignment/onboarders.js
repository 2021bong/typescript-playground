// 상품의 옵션
// class Option {
//   name: string
//   value: string

//   constructor(name: string, value: string) {
//       this.name = name
//       this.value = value
//   }
// }
class Option {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

const Example = () => {
  // 사용자가 선택한 상품의 옵션 배열이라고 가정
  const options = [new Option('사이즈', 'L'), new Option('컬러', '빨강')];

  function makeReadableOptionValue() {
    let result = '';

    options.forEach((option) => {
      if (options.indexOf(option) < options.length - 1) {
        result += option.value + ' / ';
      } else {
        result += option.value;
      }
    });

    return result; // 결과: L/빨강
  }
};

console.log(Example());
