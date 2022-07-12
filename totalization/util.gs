function convert(data) {

  let l = Object.keys(data).length;
  let temp = new Array(l);
  for (let i = 0; i < l; i++) {
    temp[i] = new Array(4);
    temp[i][0] = data[i][1];
    temp[i][1] = data[i][2];
    temp[i][2] = data[i][3];
    temp[i][3] = data[i][4];
  }

  return temp;
}


function isSheetEists(spreadSheet, targetSheet) {
  let temp = spreadSheet.getSheets();
  for (let i = 0; i < temp.length; i++) {
    if (targetSheet === temp[i].getName()) return true;
  }
  return false;
}
