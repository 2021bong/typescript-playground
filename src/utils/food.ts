import { FoodTypes } from '../types/types_jmc';

const hansik: string[] = [
  '김치찌개',
  '부대찌개',
  '제육볶음',
  '경양식돈까스',
  '뚝배기불고기',
  '삼겹살',
  '한식 파인다이닝',
  '낚지볶음',
  '비빔밥',
  '치킨',
  '국밥',
  '뼈해장국',
  '보쌈',
  '생선회',
];
const boonsik: string[] = [
  '떡볶이',
  '만두',
  '순대',
  '튀김',
  '라면',
  '우동',
  '김밥',
];
const yangsik: string[] = [
  '파스타',
  '스테이크',
  '리조또',
  '이태리피자',
  '에그베네딕트',
  '팬케이크',
  '빠에야',
  '샌드위치',
  '파인다이닝',
];
const ilsik: string[] = [
  '텐동',
  '사케동',
  '일식돈까스',
  '초밥',
  '라멘',
  '마제소바',
  '오챠즈케',
  '오마카세',
];
const joongsik: string[] = [
  '짜장면',
  '짬뽕',
  '탕수육',
  '계란볶음밥',
  '도삭면',
  '크림새우',
  '칠리새우',
  '꿔바로우',
  '마라탕',
  '마라샹궈',
];
const dongnamasik: string[] = [
  '포',
  '팟타이',
  '카오팟',
  '똠얌꿍',
  '분짜',
  '월남쌈',
  '짜조',
];
const worldsik: string[] = ['케밥', '포케', '타코'];

export const handleFoodArr = (types: FoodTypes[]) => {
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
      }
    })
    .flat()
    .filter((el) => el !== null);
  return selectedArr;
};
