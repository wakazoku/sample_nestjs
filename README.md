## このリポジトリは
Nest.jsをちょっと試してみるリポジトリ  
https://docs.nestjs.com/


## 準備

### 1.nestのcliをインストールしとく
```bash
npm i -g @nestjs/cli
```

### 2.適当にプロジェクトを作ってみる
```bash
nest new sample
``` 
※パッケージマネージャーはyarnではなくnpmにしてみた

## 3.MySQLを用意する
```
docker-compose -f stack.yml up
```