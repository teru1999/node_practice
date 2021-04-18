# nodePractice
## 手順

```
docker build -t node-image .
docker run -it -d -p 9000:3000 -v $(pwd)/app:/app node-image 


Dockerfileをもとにイメージを作る
docker-compose build

コンテナを起動する
docker-compose up -d


仮想環境をシェルでいじる時
docker-compose exec app sh

消す時
docker rm コンテナ名
```


## 参考
https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

https://qiita.com/hbjpn/items/f638303d5960e24fa794

https://qiita.com/syabuo/items/4cf2e26b376f583d1ba3

https://qiita.com/yukin01/items/4f54496fd2f577c56b1d