// pages/profile/myFollow/myFollow.js
Page({

  data: {
    specialList: [
      {
        id: 1,
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/139.jpg",
        name: "肖于根",
        company: "丝泉科技",
        followerCnt: 6643,
        experts: "修改简历",
        isFollow: true
      },
      {
        id: 2,
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/170.jpg",
        name: "陈佳丽",
        company: "文华科技",
        followerCnt: 4376,
        experts: "制作简历",
        isFollow: true
      },
      {
        id: 3,
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/10.jpg",
        name: "王东海",
        company: "丝泉科技",
        followerCnt: 1574,
        experts: "修改简历",
        isFollow: true
      }
    ],
    articleList: [
      {
        title: "一个月了还没找到适合的工作",
        nickName: "想吃芝士披萨",
        avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/4KGDYpurPJqldDWbjicEvibQdK21BdT6PjVYRCuNgKHwmKJVNyTmKiczCPv5yY9CpcgibOiabQicmtCNiaFv68Zib9dpyw/132",
        outline: "对于一份工作，我们不能仅仅基于对它的部分了解就认为我们不适合他。就如我自己，刚刚开始，我总会觉得，这对我太难了。",
        approve: "112",
        comment: "58"
      },
      {
        title: "软件架构师的必备素养",
        nickName: "王旭阳",
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/125.jpg",
        outline: "作为一名合格的软件架构师，我们需要掌握的不仅仅是套用模板去开发，而要足够的灵活，能够针对不同的业务。作出相应的分析，并给出结果",
        approve: "376",
        comment: "74"
      },
    ],
  },

  onLoad: function (options) {

  },

  swichFollow(e) {
    const that = this
    const specialList = this.data.specialList
    specialList.forEach((item,index) => {
      if (item.id == e.detail) {
        specialList[index].isFollow = !item.isFollow
        that.setData({
          specialList
        })
      }
    })
  }

})