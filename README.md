# GASDownload

 * Google Drive API は面倒なのでブラウザでjsonダウンロードまでは手動
 * ダウンロードしたファイルをもとに、ディレクトリを作ってGASプロジェクトを再構成する感じ
 * 
 * 自動化したかったけどかかる労力に見合わない
 * GAS自体スプレッドシートと紐づけてしか動かさないし動かせない
 * 元々作ったものをgithubにまとめるためにやってたやつ
 * 
 * 
 * ID = "ur google app script project id";
 * https://script.google.com/feeds/download/export?id=" + ID + "&format=json
 * json file download and set root directory
 * 
 * @since 2022/07/12