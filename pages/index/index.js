// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showType:false,
    activeIndex:0,
    list:['lisi','zhangsan','wangwu'],
    menu:['椰果','珍珠','不顶','红茶'],
    classArr:[
      {id:'1',classFS:'1班',students:['zhangsan','lisi','wangwu']},
      {id:'2',classFS:'2班',students:['Jack','rose','ereasion']}
    ],
    invalue:'默认值'
  },
  // 登录方法
  login(){
    wx.showToast({
      title: '登录成功',
    })
  },
  // 删除
  del(e){
    console.log(e.currentTarget.dataset)
    let {i} = e.currentTarget.dataset
    this.data.list.splice(i,1)
    this.setData({
      list:this.data.list
    })
    wx.showToast({
      title: '删除成功',
    })
  },
  // 切换显示隐藏
  toggle(){
    this.setData({
      showType:!this.data.showType
    })
    
  },
  // 选择时改变背景样式
  selectMenu(e){
    let {i} = e.currentTarget.dataset
    this.setData({
      activeIndex:i
    })
  },
  // 页面跳转
  godetail(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  //数据双向绑定
  vmodel(e){
    const {value} = e.detail
    this.setData({
      invalue:value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})