function reduction() {

  totalization();

  const spreadSheet = SpreadsheetApp.openById('1yeiu7a0m57C5pkJwNO-CqBvtZb_3-O9VpPxVOfKcYP4');
  const totalizationSheet = spreadSheet.getSheetByName('集計');
  let lastRow = totalizationSheet.getLastRow();

  let bo113 = totalizationSheet.getRange(5, 1, lastRow, 4).getValues();
  bo113 = reductA(bo113);
  totalizationSheet.getRange(5, 1, lastRow - 1, 4).clear();
  totalizationSheet.getRange(5, 1, bo113.length, 4).setValues(bo113);
  
  let bo112 = totalizationSheet.getRange(5, 5, lastRow - 1, 4).getValues();
  bo113 = reductA(bo112);
  totalizationSheet.getRange(5, 5, lastRow - 1, 4).clear();
  totalizationSheet.getRange(5, 5, bo112.length, 4).setValues(bo112);

  let bo111 = totalizationSheet.getRange(5, 9, lastRow - 1, 4).getValues();
  bo111 = reductA(bo111);
  totalizationSheet.getRange(5, 9, lastRow - 1, 4).clear();
  totalizationSheet.getRange(5, 9, bo111.length, 4).setValues(bo111);

  let bo000 = totalizationSheet.getRange(5, 13, lastRow - 1, 5).getValues();
  bo000 = reductB(bo000);
  totalizationSheet.getRange(5, 13, lastRow - 1, 5).clear();
  totalizationSheet.getRange(5, 13, bo000.length, 5).setValues(bo000);

}

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