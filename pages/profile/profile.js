// pages/profile/profile.js
Page({

  data: {
    sumList: [
      {
        title: "讨论",
        value: "3"
      },
      {
        title: "关注",
        value: "10"
      },
      {
        title: "模板",
        value: "3"
      },
    ],
    barList: [
      {
        title: "我的信息",
        icon: "manager",
        url: ""
      },
      {
        title: "我的收藏",
        icon: "star",
        url: ""
      },
      {
        title: "我的关注",
        icon: "bell",
        url: ""
      },
      {
        title: "我的模板",
        icon: "label",
        url: ""
      },
      {
        title: "设置",
        icon: "setting",
        url: ""
      }
    ]
  },

  onLoad: function (options) {

  },

})