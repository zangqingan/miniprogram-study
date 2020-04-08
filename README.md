# miniprogram-study
微信小程序学习
# 1.微信小程序的学习
小程序结构划分：最上层APP ->  多个pages -> 多个小组件组成一个pages
文件结构：
App 
  -app.js，创建App实例以及一些全局设置相关的代码。
  -app.json，全局的一些配置
  -app.wxss，全局的样式
Page
  -page.js，创建Page实例以及一些页面设置相关的代码。
  -page.json，页面业务的一些配置
  -page.wxml，具体页面的wxml页面布局
  -page.wxss，具体页面的样式
Component
  -compoment.js，创建Component实例以及一些组件设置相关的代码。
  -compoment.json，组件的一些配置
  -compoment.wxml，组件的wxml页面布局
  -compoment.wxss，组件的样式
