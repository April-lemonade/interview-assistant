// pages/articleDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    date: '',
    from: '',
    id: 0,
    url:'',
    obj: null,
    articles: [{
      id: '1',
      url:"https://news.gmw.cn/2020-12/22/content_34482388.html"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // this.setData({
    //   title: options.title,
    //   date: options.date,
    //   from: options.from,
    //   id: options.id,
    //   url: this.data.articles[options.id].url
    // })
    var obj = JSON.parse(decodeURIComponent(options.obj))
    this.setData({
      // title: options.title,
      // vedios:  vedios
      obj: obj
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