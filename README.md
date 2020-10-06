# React-Typescript

## anyenv

```
$ brew install anyenv
$ echo 'eval "$(anyenv init -)"' >> ~/.zshrc
$ exec $SHELL -l
$ anyenv install nodenv
$ exec $SHELL -l
```

## nodenv-default-packages

```
$ mkdir -p $(anyenv root)/plugins
$ git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update
$ mkdir -p "$(nodenv root)"/plugins
$ git clone https://github.com/nodenv/nodenv-default-packages.git "$(nodenv root)/plugins/nodenv-default-packages"
$ touch $(nodenv root)/default-packages
```

## CRA

```
$ npx create-react-app hello-world --template typescript
```

## yarn

```
yarn install
```

迷ったら以下確認

```
source ~/.zshrc
```

パッケージ更新情報チェック・一括アップデート

```
yarn upgrade-interactive [--latest]
```
