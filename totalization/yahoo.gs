function yahoo() {

  reduction();

  const spreadSheet = SpreadsheetApp.openById('1yeiu7a0m57C5pkJwNO-CqBvtZb_3-O9VpPxVOfKcYP4');
  const totalizationSheet = spreadSheet.getSheetByName('集計');
  let lastRow = totalizationSheet.getLastRow();

  let bo113 = totalizationSheet.getRange(5, 1, lastRow, 4).getValues();
  bo113 = picupA(bo113);
  totalizationSheet.getRange(5, 1, lastRow - 1, 4).clear();
  totalizationSheet.getRange(5, 1, bo113.length, 4).setValues(bo113);
  
  let bo112 = totalizationSheet.getRange(5, 5, lastRow - 1, 4).getValues();
  bo113 = picupA(bo112);
  totalizationSheet.getRange(5, 5, lastRow - 1, 4).clear();
  totalizationSheet.getRange(5, 5, bo112.length, 4).setValues(bo112);

  let bo111 = totalizationSheet.getRange(5, 9, lastRow - 1, 4).getValues();
  bo111 = picupA(bo111);
  totalizationSheet.getRange(5, 9, lastRow - 1, 4).clear();
  totalizationSheet.getRange(5, 9, bo111.length, 4).setValues(bo111);

  let bo000 = totalizationSheet.getRange(5, 13, lastRow - 1, 5).getValues();
  bo000 = picupB(bo000);
  totalizationSheet.getRange(5, 13, lastRow - 1, 5).clear();
  totalizationSheet.getRange(5, 13, bo000.length, 5).setValues(bo000);

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