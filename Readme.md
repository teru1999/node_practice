# nodePractice

## 手順

```
1. Dockerfileをもとにイメージを作る
docker-compose build

2. コンテナを作り、デタッチでデーモンとして起動する。
docker-compose up -d

3. 確認
docker container ls -a

4. 操作
docker container stop node-container
docker container start node-container

（5. 後処理をしたい時）
コンテナのみ消したいとき
docker-compose down
コンテナとイメージを消したいとき
docker-compose down --rmi all

```

## 操作メモ

```
基本
docker container ls
docker image ls

ログの確認
docker logs コンテナ名 -f
docker-compose logs コンテナ名 -f

仮想環境をシェルでいじる時
docker-compose exec app /bin/bash

```

## 参考
https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

https://qiita.com/hbjpn/items/f638303d5960e24fa794

https://qiita.com/syabuo/items/4cf2e26b376f583d1ba3

https://qiita.com/yukin01/items/4f54496fd2f577c56b1d

https://blog.kasei-san.com/entry/2018/03/12/060801