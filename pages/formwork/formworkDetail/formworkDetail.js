// pages/formworkDetail/formworkDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: null
  },

  fillFormwork: function (e) {
    console.log(this.data.obj)
    var obj = JSON.stringify(this.data.obj);
    wx.navigateTo({
      url: "/pages/formwork/fillFormwork/fillFormwork?obj="+encodeURIComponent(obj)
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = JSON.parse(decodeURIComponent(options.obj))
    this.setData({
      obj: obj
    })
    console.log(this.data.obj.name)
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