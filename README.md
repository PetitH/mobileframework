# 框架简介
基于uni-app实现h5端及各小程序端封装端简易框架，git clone就可以用了

# 目录结构
|一级目录| 二级目录|三级目录|
|:----: | :----:| :----:|
| src   |       |       |
|       | api   |       |
|       | fetct | 交互封装get，post|
|       | servers |  接口整理存放 |
|       | api   |       |
|       | api   |       |
|       | api   |       |
|       | api   |       |
src
    - api         
        - fetct       交互封装get，post
        - servers     接口整理存放
    - commom        公共类方法目录
    └─utils       正则验证
  └─components    公共组件
  └─static        静态资源目录  
    └─css         使用scss，里面有继承，混合等scss
    └─image       静态本地图片存放
    └─icon        图标
  └─page          项目页面

vue.config.json   webpack配置

