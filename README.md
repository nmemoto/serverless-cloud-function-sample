# serverless framework

## 概要
* 本リポジトリは, 以下のページの内容を実施した際のソースコードである。
    * https://codeburst.io/apollo-graphql-server-express-google-cloud-function-serverless-framework-dbb6b5cf4bb3

## 上記以外にやったこと
* プロジェクトIDとクレデンシャル情報を含むファイルを別ファイル(config/dev.yml)に記載し、serverless.ymlで読み込むようにした。
    * 参考URL: https://dev.classmethod.jp/cloud/serverless-framework-conf-change/
    * `config/sample.yml` にサンプルファイルを記載
* Cloud Functions API の有効化
    * コンソールで有効化の操作を行った

## 調べたこと
* 2018/5/6 現在の以下のページによると, Cloud Functions の Node.js の実行環境は *Node v6.11.5* である
    * https://cloud.google.com/functions/docs/writing/?hl=ja  
* `serverless remove` で作成したサービスを削除できる
    * https://serverless.com/framework/docs/providers/google/guide/services/