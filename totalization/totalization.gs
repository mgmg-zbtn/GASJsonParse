function totalization() {
  dayjs.dayjs().locale('ja');

  const spreadSheet = SpreadsheetApp.openById('1yeiu7a0m57C5pkJwNO-CqBvtZb_3-O9VpPxVOfKcYP4');
  const totalizationSheet = spreadSheet.getSheetByName('集計');
  let fromMonth = totalizationSheet.getRange("B1:C1").getValue();
  let toMonth = totalizationSheet.getRange("B2:C2").getValue();

  // console.log(isSheetEists(spreadSheet, fromMonth));
  // console.log(isSheetEists(spreadSheet, toMonth));
  if (!isSheetEists(spreadSheet, fromMonth) || !isSheetEists(spreadSheet, toMonth)) {
    // console.log('incorrect sheet');
    return;
  }

  fromMonth = dayjs.dayjs(fromMonth);
  toMonth = dayjs.dayjs(toMonth);

  const diffMonth = toMonth.diff(fromMonth, 'month');
  let data = [];
  // console.log(toMonth.format('YYYY-M') + ' - ' + fromMonth.format('YYYY-M') + ' = '+ diffMonth);

  if (0 <= diffMonth) {
    for (let i = 0; i <= diffMonth ; i++) {
      const m = fromMonth.add(i, 'month');
      const targetSheet = spreadSheet.getSheetByName(m.format('YYYY-M'));
      const lastRow = targetSheet.getLastRow();
      const temp = targetSheet.getRange(2, 1, lastRow - 1, 5).getValues();
      data = data.concat(temp);
    }
  } else {
    // console.log(diffMonth + ' error');
    return;
  }

  // initialize sheet clear content
  let tLastRow = totalizationSheet.getLastRow();
  totalizationSheet.getRange(5, 1, tLastRow, 17).clearContent();

  var bo113 = [];   // 少女
  var bo112 = [];   // 少年
  var bo111 = [];   // 大人
  var bo111a =[];   // 文庫コミック
  var bo111b =[];   // ワイドコミック
  var bo111c =[];   // コンビニコミック
  var bo105 = [];   // 児童書
  var bo102 = [];   // 雑誌
  var bo141 = [];   // 単行
  var bo000 = [];   // 111.112.113以外をまとめたもの

  for (let i = 0; i < data.length; i++) {
    switch (data[i][0]) {
      case '少女コミック': bo113[bo113.length] = data[i]; break;
      case '少年コミック': bo112[bo112.length] = data[i]; break;
      case '大人コミック': bo111[bo111.length] = data[i]; break;
      case '文庫コミック': bo111a[bo111a.length] = data[i]; break;
      case 'ワイドコミック': bo111b[bo111b.length] = data[i]; break;
      case 'コンビニコミック': bo111c[bo111c.length] = data[i]; break;
      case '児童書': bo105[bo105.length] = data[i]; break;
      case '雑誌': bo102[bo102.length] = data[i]; break;
      case '単行': bo141[bo141.length] = data[i]; break;
    }
  }

  bo113 = convert(bo113);
  bo112 = convert(bo112);
  bo111 = convert(bo111);

  bo000 = bo000.concat(bo111a);
  bo000 = bo000.concat(bo111b);
  bo000 = bo000.concat(bo111c);
  bo000 = bo000.concat(bo105);
  bo000 = bo000.concat(bo102);
  bo000 = bo000.concat(bo141);

  totalizationSheet.getRange(5, 1, bo113.length, 4).setValues(bo113);
  totalizationSheet.getRange(5, 5, bo112.length, 4).setValues(bo112);
  totalizationSheet.getRange(5, 9, bo111.length, 4).setValues(bo111);
  totalizationSheet.getRange(5, 13, bo000.length, 5).setValues(bo000);

  tLastRow = totalizationSheet.getLastRow();
  totalizationSheet.getRange(5, 1, tLastRow, 4).sort([
    {column: 1, ascending: true},
    {column: 2, ascending: true},
    {column: 3, ascending: true},
    {column: 4, ascending: true},
  ]);
  totalizationSheet.getRange(5, 5, tLastRow, 4).sort([
    {column: 5, ascending: true},
    {column: 6, ascending: true},
    {column: 7, ascending: true},
    {column: 8, ascending: true},
  ]);
  totalizationSheet.getRange(5, 9, tLastRow, 4).sort([
    {column: 9, ascending: true},
    {column: 10, ascending: true},
    {column: 11, ascending: true},
    {column: 12, ascending: true},
  ]);
  totalizationSheet.getRange(5, 13, tLastRow, 5).sort([
    {column: 13, ascending: true},
    {column: 14, ascending: true},
    {column: 15, ascending: true},
    {column: 16, ascending: true},
    {column: 17, ascending: true},
  ]);
}
