/**
 * （totalizationと）reduction が先に実行される
 * 備考に「ヤフオク」と含まれているデータだけ残す
 *
 * picupA : bo113,bo112, bo111
 *       [タイトル, 巻数, 金額, 備考]
 * picupB : bo000
 * [部門, タイトル, 巻数, 金額, 備考]

 * 集計シートからそれぞれデータを調べるので
 * 主要な部門と纏められた部門で備考の位置が違う
 * また抽出した後のデータも集計シートに設置しなおすので
 * 形式（要素数）は変更できない
 * 見た目の分かり易さ優先で2種類に関数を分けました
 */
function yahoo() {

  reduction();

  const spreadSheet = SpreadsheetApp.openById('1QG5HyjtWJz95tBoBkhEp_CoFyyh_bretOpxXC69N77o');
  const totalizationSheet = spreadSheet.getSheetByName('集計');
  let lastRow = totalizationSheet.getLastRow();

  /****************************************************************************/

  let bo113 = totalizationSheet.getRange(5, 1, lastRow, 4).getValues();
  bo113 = picupA(bo113);
  totalizationSheet.getRange(5, 1, lastRow, 4).clear();
  // 集計範囲によってはヤフオクが含まれない場合もある
  // 以下同様の処理
  if (0 < bo113.length) {
    totalizationSheet.getRange(5, 1, bo113.length, 4).setValues(bo113);
  }

  /****************************************************************************/

  let bo112 = totalizationSheet.getRange(5, 5, lastRow, 4).getValues();
  bo112 = picupA(bo112);
  totalizationSheet.getRange(5, 5, lastRow, 4).clear();
  if (0 < bo112.length) {
    totalizationSheet.getRange(5, 5, bo112.length, 4).setValues(bo112);
  }

  /****************************************************************************/

  let bo111 = totalizationSheet.getRange(5, 9, lastRow, 4).getValues();
  bo111 = picupA(bo111);
  totalizationSheet.getRange(5, 9, lastRow, 4).clear();
  if (0 < bo111.length) {
    totalizationSheet.getRange(5, 9, bo111.length, 4).setValues(bo111);
  }

  /****************************************************************************/

  let bo000 = totalizationSheet.getRange(5, 13, lastRow, 5).getValues();
  bo000 = picupB(bo000);
  totalizationSheet.getRange(5, 13, lastRow, 5).clear();
  if (0 < bo000.length) {
    totalizationSheet.getRange(5, 13, bo000.length, 5).setValues(bo000);
  }
}


function picupA(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i][3].match(/ヤフオク/g) === null) {
      data.splice(i, 1);
      i -= 1;
    }
  }
  return data;
}

function picupB(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i][4].match(/ヤフオク/g) === null) {
      data.splice(i, 1);
      i -= 1;
    }
  }
  return data;
}