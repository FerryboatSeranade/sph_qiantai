# sph-qiantai
尚品汇-前台项目

## 部署到GitHub pages
```
yarn add  gh-pages --save-dev
```
- 在packages.json中添加
```
"homepage": "https://<your-github-username>.github.io/<your-repo-name>/"
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

- 编译打包&部署
```
yarn build
yarn deploy
```
后续遇到的问题：
- 1.public目录下的文件可以通过地址栏直接访问,reset.css似乎只能放到这里。
该目录下的文件直接被copy到dist目录下，不会被编译。
- 2.src/assets目录下的文件会被编译，也无法通过地址栏直接访问。@是webpack中src的语法糖
- 3.开发环境中可以运行得很好，但是dist和github pages经常要404, 
需要通过修改路由配置index.js的mode和base,还有vue.config.js的publicPath来解决url问题。
