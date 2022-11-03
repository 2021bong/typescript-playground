const hansik: string[] = [
  '김치찌개',
  '부대찌개',
  '제육볶음',
  '경양식돈까스',
  '뚝배기불고기',
  '삼겹살',
];
const boonsik: string[] = ['떡볶이', '만두', '순대', '튀김', '라면', '우동'];
const yangsik: string[] = [
  '파스타',
  '스테이크',
  '리조또',
  '이태리피자',
  '에그베네딕트',
  '팬케이크',
  '빠에야',
  '샌드위치',
];
const ilsik: string[] = ['텐동', '사케동', '일식돈까스', '초밥', '라멘'];
const joongsik: string[] = ['짜장면', '짬뽕', '탕수육', '계란볶음밥'];
const dongnamasik: string[] = [
  '포',
  '팟타이',
  '카오팟',
  '똠얌꿍',
  '분짜',
  '월남쌈',
];
const worldsik: string[] = ['케밥', '포케', '타코'];

interface Types {
  id: number;
  type: string;
  selected: boolean;
}

export const handleFoodArr = (types: Types[]) => {
  const selectedArr = types
    .map((el) => {
      if (el.selected === true) {
        switch (el.id) {
          case 1:
            return hansik;
          case 2:
            return boonsik;
          case 3:
            return yangsik;
          case 4:
            return ilsik;
          case 5:
            return joongsik;
          case 6:
            return dongnamasik;
          case 7:
            return worldsik;
        }
      } else {
        return null;
      }
    })
    .flat()
    .filter((el) => el !== null);
  return selectedArr;
};
