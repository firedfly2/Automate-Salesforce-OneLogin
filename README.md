# [Auto login to SS with OL](https://chrome.google.com/webstore/detail/auto-login-to-ss-with-ol/ohblnbdkchcjpfalemlicmljpdmlmmmc)

OneLogin連携したSalesforceに自動ログインするGoogle Chrome向けの拡張機能です。

## なぜ作ったのか

SalesforceにOneLoginを組み合わせると自動ログアウトしたあとシングルサインオンエラーになる場合があります。
クエリパラメータを削除すると正常にログインできるので、リダイレクトして自動ログインするようにしました。

https://xxxxx.my.salesforce.com/ のようなドメインが対象です。

## 開発

### 初期設定

```bash
yarn install
```

yarnで必要なパッケージをインストールします。

### ビルド

```bash
yarn webpack
```

webpackでTypeScriptをJavaScriptにコンパイルし、distフォルダに出力します。

### インストール

Google Chromeの拡張機能画面にてデベロッパーモードにし「パッケージ化されていない拡張機能を読み込む」にてdistフォルダを指定してください。

## 参考文献

- [TypeScriptで作るイマドキChrome拡張機能開発入門](https://qiita.com/markey/items/ea9ed18a1a243b39e06e)
