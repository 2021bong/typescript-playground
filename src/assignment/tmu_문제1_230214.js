/*
1. 연음 컬러 선택기
selectColorsOfContinousSyllabe 함수는 wordGrpArr, colorArr라는 배열을 입력받아 output 배열을 리턴합니다.

동일한 그룹 번호를 가진 그룹은 없을 것이라 생각하여
wordGrpArr을 가공해 0이 없고 중복된 숫자가 없는 setWordGrpArr라는 배열을 생성합니다.
setWordGrpArr을 순회하여 그룹 번호를 key, 순서에 맞는 colorArr의 요소를 value로 하여 colorsOfGrp 객체에 담습니다.

반복문을 통해 wordGrpArr의 요소가 0이면 null, 0이 아니라면 wordGrpArr의 요소를 key로 colorsOfGrp에 접근하여 value를 output 배열에 담습니다.
*/
function selectColorsOfContinousSyllabe(wordGrpArr, colorArr) {
  const output = [];

  const setWordGrpArr = [...new Set(wordGrpArr)].filter(
    (grpNum) => grpNum !== 0
  );
  const colorsOfGrp = {};
  setWordGrpArr.forEach(
    (grpNum, i) => (colorsOfGrp[grpNum] = colorArr[i % colorArr.length])
  );

  wordGrpArr.map((wordNum) => {
    wordNum === 0 ? output.push(null) : output.push(colorsOfGrp[wordNum]);
  });
  return output;
}

// function selectColorsOfContinousSyllabe(
//   wordGrpArr: number[],
//   colorArr: string[]
// ) {
//   const output: (null | string)[] = [];

//   const setWordGrpArr = [...new Set(wordGrpArr)].filter(
//     (grpNum) => grpNum !== 0
//   );
//   const colorsOfGrp = {};
//   setWordGrpArr.forEach(
//     (grpNum, i) => (colorsOfGrp[grpNum] = colorArr[i % colorArr.length])
//   );

//   wordGrpArr.map((wordNum) => {
//     wordNum === 0 ? output.push(null) : output.push(colorsOfGrp[wordNum]);
//   });
//   return output;
// }
