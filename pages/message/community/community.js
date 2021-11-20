// pages/message/community/community.js
Page({

  data: {
    title: "一个月了还么有找到合适的工作",
    answerCnt: 181,
    followerCnt: 389,
    author: "想吃芝士披萨",
    content: "&nbsp;&nbsp;&nbsp;&nbsp;永远不要放弃，这还不是绝望坐标北京。可能我是北京人，所以每次裸辞后，同事都说羡慕你，但我内心的苦，真是只有自己知道。可能，每一个裸辞的人也都知道。\n\n&nbsp;&nbsp;&nbsp;&nbsp;第一次裸辞时候，我26，丝毫没有压力，仿佛就是修了个假，玩了一个月后立刻就找到工作了。工资基本没变，多了1000，但工作环境从央企变成了私企。在那干了八个月，我觉得我老了五岁，因为天天加班，内心怨气和悔意比较重，胖了十斤......！！？？是的。之后我又裸辞了，这一次有点怀疑自己，觉得自己跳槽太频繁，但老天给了我一个工资翻倍的机会。\n\n&nbsp;&nbsp;&nbsp;&nbsp;然后又玩了一个月。结果这个单位更压抑，人和人之间连话都不说那种，交流都是企业微信。入职半年就俩人留了微信。又裸辞了。怎么办啊。唉。电影下载的太多，手机内存都满了，但就是看不进去，有时候看一半把手机给摔了，当然是往床上摔，我可舍不得往地上摔。九个月了吧得。我都放弃了。\n\n&nbsp;&nbsp;&nbsp;&nbsp;唉。现在呢？后来又上班了，薪水也比较满意，环境也还不错。要说唯一美中不足的？大概就是我太胖了，懒得减肥了。是啊，都会过去的。有些时候生活就是会很绝望。但都会过去的。和朋友念叨这个事，他说你这个根本不叫惨，你还有房子住。其实，最惨的，就是自己的内心那状态。不堪回首。",
    /* operationList: [
      {
        icon: "like-o",
        count: 33,
      },
      {
        icon: "star-o",
        count: 96,
      },
      {
        icon: "chat-o",
        count: 15,
      }
    ], */
    scrollTop: 0,
    offsetTop: 0,
    commentList: [
      {
        avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/4KGDYpurPJqldDWbjicEvibQdK21BdT6PjVYRCuNgKHwmKJVNyTmKiczCPv5yY9CpcgibOiabQicmtCNiaFv68Zib9dpyw/132",
        nickname: "小美人鱼公主",
        comment: "你真的好惨哦~~",
        date: "10-16",
        thumbCnt: 8
      },
      {
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/139.jpg",
        nickname: "芝士披萨",
        comment: "同情加一",
        date: "11-05",
        thumbCnt: 3
      },
    ]
  },

  onLoad: function (options) {

  },

  onScroll(event) {
    wx.createSelectorQuery()
      .select('#scroller')
      .boundingClientRect((res) => {
        this.setData({
          scrollTop: event.detail.scrollTop,
          offsetTop: res.top,
        });
      })
      .exec();
  },

})