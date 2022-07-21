# GASJsonParse
  
GoogleAppScriptをローカルに保存する機能  

---
ブラウザでjson形式でダウンロード  
ファイルをもとに、ディレクトリを作ってGASプロジェクトをローカルに再構成する  
---
  
ID = "ur google app script project id";
  
https://script.google.com/feeds/download/export?id=" + ID + "&format=json
  
json file download and set root directory
  
@since 2022/07/12
  
---
作ったものをgithubにまとめたいと思った  
自動化したかったけどかかる労力に見合わないのでここまで  
GAS自体スプレッドシートと紐づけてしか動かさないし動かせない  
---

## totalization
[セットコミック販売履歴](https://docs.google.com/spreadsheets/d/1N6jmvDG8nuW8KOIi3unUIZL_-58r1PIPFpJGClVWptI/edit?usp=sharing)
手動での集計をGASで自動化させた実用例

|      GAS     |    ボタン		|
|--------------|------------|
| totalization |   重複集計	|
|   reduction  | 重複なし集計	|
|      yahoo   |  ヤフオク集計	|

