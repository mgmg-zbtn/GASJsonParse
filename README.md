# GASJsonParse

Google Drive API は面倒 
ブラウザでjsonダウンロードまでは手動
ダウンロードしたファイルをもとに、ディレクトリを作ってGASプロジェクトを再構成する

作ったものをgithubにまとめたいと思った
自動化したかったけどかかる労力に見合わないのでここまで
GAS自体スプレッドシートと紐づけてしか動かさないし動かせない


ID = "ur google app script project id";
https://script.google.com/feeds/download/export?id=" + ID + "&format=json
json file download and set root directory

@since 2022/07/12