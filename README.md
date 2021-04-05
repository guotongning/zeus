# 我的VUE练习项目

## 构建项目

- 创建项目目录
```text
# 项目名称：zeus
mkdir zeus
cd zeus
npm init -y
```
- 创建完成后
    - 创建完成后会看到控制台如下信息，就算是初始化成功了。
    ```shell
     ~/my_vue_project/zeus/ npm init -y
    Wrote to /Users/guotongning/my_vue_project/zeus/package.json:
    
    {
      "name": "zeus",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```
    - 文件介绍 
        - package.json 初始化完成之后回生成这个文件。打包配置文件
        - README.md 项目说明书。项目托管git时，创建这个文件，用于说明项目。
- 安装webpack
    ```shell
    # 项目打包需要用到webpack，因此需要通过下面指令来安装webpack
     ~/my_vue_project/zeus/ [master] npm install -D webpack webpack-cli
    added 124 packages in 3s
     ~/my_vue_project/zeus/ [master*]
    ```
    - 文件介绍
        - package-lock.json webpack安装成功后会生成这个文件
        - node_modules 项目依赖文件夹
        - package.json 在安装完webpack之后会发生变化 devDependencies 表示项目开发时候会依赖到的东西
        ```json
        {
          "name": "zeus",
          "version": "1.0.0",
          "description": "这是一个vue练习项目",
          "main": "index.js",
          "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
          },
          "keywords": [],
          "author": "guotongning@58.com",
          "license": "ISC",
          "devDependencies": {
          "webpack": "^5.30.0",
          "webpack-cli": "^4.6.0"
          }
        }
        ```
  