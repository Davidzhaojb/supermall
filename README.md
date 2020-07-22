# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## 项目相关
### 目录作用说明

- components---common 存放公共组件，根跟业务无关，可复用到其他项目
- components---content 存放公共组件，业务相关
- router 存放路由相关内容
- store 存放vuex相关内容
- netword 存放axios相关内容
- common-utils.js存放工具类
- common-const.js存放公共变量

### 添加公共的样式文件

> assets/css/base.css 

> assets/css/normalize.css

### 添加vue.config.js 进行一些配置，这个文件会自动合并到其他配置中，文件名不能错

### 添加.editorconfig 配置文件，统一代码风格

### 添加tabbar

### 安装路由 npm install vue-router --save