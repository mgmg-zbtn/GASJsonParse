/**
 * テスト用の場所
 */
function sandbox() {
  const spreadSheet = SpreadsheetApp.openById('1QG5HyjtWJz95tBoBkhEp_CoFyyh_bretOpxXC69N77o');
  let startMonth = '2021-8';
  startMonth = dayjs.dayjs(startMonth);
  let data = [];

  for (let i = 0; i <= 24 ; i++) {
    const m = startMonth.add(i, 'month');
    const targetSheet = spreadSheet.getSheetByName(m.format('YYYY-M'));
    const temp = targetSheet.getRange(13, 8).getValue();
    data = data.concat(temp);
    // console.log(i + ' : ' + temp);
  }

  let total = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // console.log('sum:' + total);
  console.log(total / 24);
}

// function sandbox() {
//   let text = 'ヤフオク';
//   let pattern = /ヤフオク/g;
//   console.log(text.match(pattern));
// }

// function sandbox() {
//   let arr = [[1,2], [2,4], [2,3], [3,4], [3,6], [3,8], [9,10], [2,0]];
//   for (let i = 0; i < arr.length; i++) {
//     const temp = arr[i];
//     if (2 === arr[i][0]) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i + ":" + arr[i]);
//   }
// }


// reduction cut pattern
// function sandbox() {
//   // let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arr = [[1,2], [3,4], [3,6], [3,8], [9,10]];
//   for (let i = 0; i < arr.length - 1; i++) {
//     const temp = arr[i];
//     if (temp[0] === arr[i + 1][0]) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i + ":" + arr[i]);
//   }
// }
