# sample wallet

Next.js(ver13) solana-suite を用いたウォレットシステムサンプル

## stack

- React
- Typescriot
- ChakraUI

## ディレクトリ構成

必要に応じて追加予定

- components  
  各コンポーネント配置用
- solana  
  solana-suiteに関わるロジック
- pages  
  各ページ配置用
- hooks  
  汎用的なhooks
- types  
  独自の型定義ファイル
- styles  
  global style, colorなど。chakraのthemeなども
- utils  
  便利系の関数とかを入れておくところ

## ライブラリ

- axios
- react query 
- react hook form
- prettier
- eslint
- [solana-suite](https://github.com/atonoy/solana-suite)

## 環境構築

### Node / npm version

Node.js のバージョンは`.node-version`を参照してインストールしてください。

node.jsのバージョンは最低でも16以上であること
18.13.0(LTS)以上を必須にするかは要検討

[node公式](https://nodejs.org/ja/)

## 1. `git clone`

```bash
git@github.com:Fujiwara-Ken/Wallet-sample.git
```

## 2. `yarn install`

`yarn install`

```bash
# v1.22以上であることを確認
yarn -v

# パッケージをインストール
yarn install
```

## 3. `yarn dev`

`yarn dev`でローカルサーバーを立ち上げ。

```bash
yarn dev
```

## Local Access
http://localhost:3000

## ブランチ名ルール

| ブランチ名 | 役割                     | 派生元  | マージ先         | 
| ---------- | ------------------------ | ------- | ---------------- | 
| main       | 本番公開用              |         |                  | 
| develop    | 開発中のものを配置 一旦テスト環境も兼ねる       | main  | main           | 
| feature/   | 新機能開発中に使う       | develop | develop          | 
| hotfix/    | 公開中のもののバグ修正用 | master  | develop / master | 