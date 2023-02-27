/*
2. 투덥 방명록
get2DUBGuestBook 함수는 record라는 배열을 받아 output 배열을 리턴합니다.

users 객체는 모든 유저를 구분하는 유저 아이디를 key, 닉네임을 value로 가집니다.
반복문을 통해 users 객체에 유저 아이디에 따른 닉네임을 값을 저장합니다.
동작은 Write와 Leave뿐이므로 첫 단어가 Write가 아니라면 해당 유저 아이디에 대한 닉네임을 떠난 더비로 수정합니다.

Write 동작만 새 글 알림이 가능하므로 'Write'가 포함된 요소만 필터링한 후
유저 아이디로 users 객체에 접근해 닉네임을 포함한 문자열을 반환합니다.
*/
function get2DUBGuestBook(record) {
  const users = {};
  for (let i = 0; i < record.length; i += 1) {
    const [action, uid, nickname] = record[i].split(' ');
    action === 'Write' ? (users[uid] = nickname) : (users[uid] = '떠난 더비');
  }
  const output = record
    .filter((userStr) => userStr.includes('Write'))
    .map((userStr) => {
      const uid = userStr.split(' ')[1];
      return `${users[uid]}님이 방명록에 새글을 남겼습니다.`;
    });
  return output;
}
// function get2DUBGuestBook(record: string[]) {
//   const users = {};
//   for (let i = 0; i < record.length; i += 1) {
//     const [action, uid, nickname] = record[i].split(' ');
//     action === 'Write' ? (users[uid] = nickname) : (users[uid] = '떠난 더비');
//   }
//   const output = record
//     .filter((userStr) => userStr.includes('Write'))
//     .map((userStr) => {
//       const uid = userStr.split(' ')[1];
//       return `${users[uid]}님이 방명록에 새글을 남겼습니다.`;
//     });
//   return output;
// }
