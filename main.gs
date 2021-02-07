// @ts-nocheck
function doGet(){
    var htmlOutput = HtmlService.createTemplateFromFile("index");

    var sn = [];
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    var shNum = ss.getNumSheets();

    for(i = 0;i < shNum;i++) {
  　  //i番目にあるシートの名前を取得する
  　  sn[i] = ss.getSheets()[i].getSheetName();
    }
    
    htmlOutput.sn = sn;

    return htmlOutput
    .evaluate()
    .setTitle('Postykey音声録音画面')
    .setFaviconUrl('https://media.discordapp.net/attachments/793454676867022889/794048742759596032/2.png')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function dbaccess(selsectRoom, autotext) {
  //　スプレットシートの操作
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(selsectRoom);

  var now = new Date();
  var time = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');

  // シートの最終行
  var lastRow = sheet.getLastRow();

  sheet.getRange(lastRow + 1, 1).setValue(time);
  sheet.getRange(lastRow + 1, 2).setValue(Session.getActiveUser().getUserLoginId());
  sheet.getRange(lastRow + 1, 3).setValue(autotext);

}

function newRoom(roomname) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.insertSheet(roomname);
  const sheet = ss.getSheetByName(roomname);
  sheet.setColumnWidth(1, 130);
  sheet.setColumnWidth(2, 180);
  sheet.setColumnWidth(3, 600);
  var lastRow = sheet.getLastRow();
  sheet.getRange(lastRow + 1, 1).setValue("タイムスタンプ");
  sheet.getRange(lastRow + 1, 2).setValue("ユーザーID");
  sheet.getRange(lastRow + 1, 3).setValue("コメント");
}

function sheetName() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = ss.getSheets();
  return sheetName
}