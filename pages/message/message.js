// pages/message/message.js
Page({

  data: {
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
        title: "今年的北京怎么了，职位少，面试更少，石沉大海，你们呢？",
        nickName: "付小昕",
        avatarUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
        outline: "今年由于疫情的爆发，很多产业被迫停产和减产，这导致了对应岗员工的裁员。而北京作为国家的首都，人才济济",
        approve: "557",
        comment: "231"
      },
      {
        title: "面试前的准备工作",
        nickName: "陈大壮",
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/141.jpg",
        outline: "面试之前，我们应该对面试岗位所需的技能有熟练地掌握，这样我们在面对面试官的提问时，才能更有底气。",
        approve: "68",
        comment: "15"
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
    specialList: [
      {
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/139.jpg",
        name: "肖于根",
        company: "丝泉科技",
        followerCnt: 6643,
        experts: "修改简历",
        isFollow: true
      },
      {
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/170.jpg",
        name: "陈佳丽",
        company: "文华科技",
        followerCnt: 4376,
        experts: "制作简历",
        isFollow: false
      },
      {
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/10.jpg",
        name: "王东海",
        company: "丝泉科技",
        followerCnt: 1574,
        experts: "修改简历",
        isFollow: false
      },
      {
        avatarUrl: "https://itobase-local-life.oss-cn-hangzhou.aliyuncs.com/head/25.jpg",
        name: "刘盼盼",
        company: "思涵科技",
        followerCnt: 8635,
        experts: "性格与职位分析",
        isFollow: true
      },
    ]
  },

  onLoad: function (options) {

  },

  swichFollow(index) {
    console.log("index",index)
  }
})