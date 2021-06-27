# 初期セットアップ

## Next.js

```
yarn create next-app . --typescript
```

## 必要 module のインストール

```
yarn add classcat
yarn add -D eslint-plugin-simple-import-sort
yarn add -D prettier
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-jsx-a11y
yarn add -D @typescript-eslint/eslint-plugin
```

windows の場合は、

```
powershell -ExecutionPolicy RemoteSigned yarn xxx
```

と yarn の前に記述する。
powershell の実行時に実行権限を付与するため。

## src フォルダ作成

```
mkdir src
mv styles ./src
mv pages ./src
cd src
mkdir components
mkdir animation
mkdir hooks
mkdir providers
mkdir types
mkdir utils
```

## ESlint 設定

設定ファイルの名前変更　.eslintrc.js
ファイルの先頭に`module.exports =`を追加

## 開発サーバ起動

```
yarn dev
```

## tailwind css のインストール

```
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
yarn add -D eslint-plugin-tailwindcss
yarn add -D @jarrodldavis/eslint-plugin-tailwindcss@latest
yarn add -D prettier-plugin-tailwind
```

## tailwind.config.js, postcss.config.js の生成

```
npx tailwindcss init -p
```

## tailwind.config.js の purge 設定追加

purge に設定を追記
指定した tsx ファイルの中身を tailwind から css に変換する設定を入れる

`mode: 'jit',`を先頭に追加

```
module.exports = {
  mode: 'jit',
  purge: ["./src/**/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## globals.css の編集

/styles/global.css を書き換える

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## vs code のワークスペース設定

validate チェック off

## index.tsx の編集

index.tsx を下記のとおりに置き換える。
className でスタイルを当てていく
元々あった Home.module.css は削除しておく

```
const Home: React.FC = () => {
return (
 <div className="flex flex-col items-center justify-center min-h-screen font-mono">
Hello Nextjs
</div>
) }
export default Home
```
