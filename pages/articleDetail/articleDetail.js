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
    url: '',
    liked: 'false',
    stared: 'false',
    obj: null,
    showShare: false,
    options: [{
        name: '微信',
        icon: 'wechat',
        openType: 'share'
      },
      {
        name: '微博',
        icon: 'weibo'
      },
      {
        name: '复制链接',
        icon: 'link'
      },
      {
        name: '分享海报',
        icon: 'poster'
      },
      {
        name: '二维码',
        icon: 'qrcode'
      },
    ],
  },
  onClick(event) {
    this.setData({
      showShare: true
    });
  },

  onClose() {
    this.setData({
      showShare: false
    });
  },

  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },
  liked: function () {
    var that = this;
    console.log(that.data.liked)
    that.setData({
      liked: !that.data.liked
    })
  },

  stared: function () {
    var that = this;
    console.log(that.data.stared)
    that.setData({
      stared: !that.data.stared
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
  }
})