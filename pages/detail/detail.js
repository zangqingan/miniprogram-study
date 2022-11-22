
function request(url,data,success){
  return new Promise((resolve,reject) => {
    wx.request({
      url,
      data,
      success:res => {
        resolve(res)
      }
    })
  })
}


// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   // 请求接口
  //   wx.request({
  //     url: 'http://localhost:5000/api/list',
  //     success:res => {
  //       // console.log('res is',res)
  //       // 后端接口返回的赋值给data中的
  //       this.setData({
  //         list:res.data
  //       })
  //     }
  //   })
  // },
  // 封装后的onLoad函数-promise版
  // onLoad: function (options) {
  //   // 请求接口
  //   request('http://localhost:5000/api/list').then(res => {
  //     this.setData({
  //       list:res.data
  //     })
  //   })
  // },
  // 封装后的onLoad函数-异步函数版
  onLoad: async function (options) {
    // 请求接口
    let {data} = await request('http://localhost:5000/api/list')
    this.setData({
      list:data
    })

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