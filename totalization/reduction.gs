/**
 * totalizationが先に実行される
 * タイトル・巻数・金額・備考
 * 重複する（上記が全て完全一致した）データを削除する（1つだけ残る）
 * 
 * reductA : bo113,bo112, bo111
 *       [タイトル, 巻数, 金額, 備考]
 * reductB : bo000
 * [部門, タイトル, 巻数, 金額, 備考]
 * 
 * 集計シートからそれぞれデータを調べるので
 * 主要な部門と纏められた部門で備考の位置が違う
 * また抽出した後のデータも集計シートに設置しなおすので
 * 形式（要素数）は変更できない
 * 見た目の分かり易さ優先で2種類に関数を分けました
 */
function reduction() {

  totalization();

  const spreadSheet = SpreadsheetApp.openById('1QG5HyjtWJz95tBoBkhEp_CoFyyh_bretOpxXC69N77o');
  const totalizationSheet = spreadSheet.getSheetByName('集計');
  let lastRow = totalizationSheet.getLastRow();

  /****************************************************************************/

  let bo113 = totalizationSheet.getRange(5, 1, lastRow, 4).getValues();
  bo113 = reductA(bo113);
  totalizationSheet.getRange(5, 1, lastRow, 4).clear();
  totalizationSheet.getRange(5, 1, bo113.length, 4).setValues(bo113);
  
  /****************************************************************************/

  let bo112 = totalizationSheet.getRange(5, 5, lastRow, 4).getValues();
  bo113 = reductA(bo112);
  totalizationSheet.getRange(5, 5, lastRow, 4).clear();
  totalizationSheet.getRange(5, 5, bo112.length, 4).setValues(bo112);

  /****************************************************************************/

  let bo111 = totalizationSheet.getRange(5, 9, lastRow, 4).getValues();
  bo111 = reductA(bo111);
  totalizationSheet.getRange(5, 9, lastRow - 1, 4).clear();
  totalizationSheet.getRange(5, 9, bo111.length, 4).setValues(bo111);

  /****************************************************************************/

  let bo000 = totalizationSheet.getRange(5, 13, lastRow, 5).getValues();
  bo000 = reductB(bo000);
  totalizationSheet.getRange(5, 13, lastRow, 5).clear();
  totalizationSheet.getRange(5, 13, bo000.length, 5).setValues(bo000);

}

// totalizationでソートが完了しているので1つ先と比較する
function reductA(data) {
  for (let i = 0; i < data.length - 1; i++) {
    const temp = data[i];
    if (temp[0] === data[i + 1][0] &&
        temp[1] === data[i + 1][1] &&
        temp[2] === data[i + 1][2] &&
        temp[3] === data[i + 1][3]) {
      data.splice(i, 1);
      i -= 1;
    }
  }
  return data;
}

function reductB(data) {
  for (let i = 0; i < data.length - 1; i++) {
    const temp = data[i];
    if (temp[0] === data[i + 1][0] &&
        temp[1] === data[i + 1][1] &&
        temp[2] === data[i + 1][2] &&
        temp[3] === data[i + 1][3] &&
        temp[4] === data[i + 1][4]) {
      data.splice(i, 1);
      i -= 1;
    }
  }
  return data;
}