# tools

> 开发过程中高频使用的工具集合，High-frequency tools used in the development process.

## 框架
* 使用vue-cli构建项目
* 使用element-ui组件框架
* 使用yarn包管理工具

## 安装说明

``` bash
# 安装依赖
yarn install

# 启动 localhost:8080
npm run dev

# 构建项目``
npm run build

# 构建项目并查看构建分析报告
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目目录结构
```
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- utils.js                     // 构建工具相关
|   |-- vue-loader.conf.js           // webpack loader配置
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置,构建开发本地服务器
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|-- src                              // 源码目录
|   |-- asset                        // 静态文件存放位置
|   |-- components                   // vue公共组件
|   |-- config                       // 配置文件
|   |   |-- element-ui               // 配置element-ui主题颜色
|   |   |-- header.json              // 配置导航条 
|   |-- pages                        // 页面
|   |   |-- background               // 后台页面 
|   |   |-- home                     // popup页面 
|   |   |-- tabs                     // 新窗口页面 
|   |-- utils                        // 工具类
|   |   |-- index.js                 // 静态工具类
|-- static                           // 静态文件，比如一些图片，json数据等
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- .postcsssrc                      // postcss配置文件
|-- README.md                        // 项目说明
|-- package.json                     // 项目基本信息,包依赖信息等
|-- yarn.lock                        // yarn版本控制文件 

```
