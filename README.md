# GASJsonParse

Google Drive API は面倒
<br>
ブラウザでjsonダウンロードまでは手動
<br>
ダウンロードしたファイルをもとに、ディレクトリを作ってGASプロジェクトを再構成する

作ったものをgithubにまとめたいと思った
<br>
自動化したかったけどかかる労力に見合わないのでここまで
<br>
GAS自体スプレッドシートと紐づけてしか動かさないし動かせない


ID = "ur google app script project id";
<br>
https://script.google.com/feeds/download/export?id=" + ID + "&format=json
<br>
json file download and set root directory
<br>

@since 2022/07/12
