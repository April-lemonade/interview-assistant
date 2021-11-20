// pages/formwork/formwork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    framworks:[{
      id :'1',
      url:'https://s3.bmp.ovh/imgs/2021/11/60d03ff0e2c4123b.png',
      name:'运营类简历模板'
    },{
      id :'2',
      url:'https://s3.bmp.ovh/imgs/2021/11/9a0fa95ee6bd4cd9.png',
      name:'新媒体运营简历模板'
    },{
      id :'3',
      url:'https://s3.bmp.ovh/imgs/2021/11/d0946ef096eb5d4d.png',
      name:'蓝色简约简历模板'
    },{
      id :'4',
      url:'https://s3.bmp.ovh/imgs/2021/11/1b8429e17d4885d6.png',
      name:'商务简历模板'
    },{
      id :'5',
      url:'https://s3.bmp.ovh/imgs/2021/11/c68de09991e4680e.png',
      name:'数据分析师简历模板'
    },{
      id :'6',
      url:'https://s3.bmp.ovh/imgs/2021/11/19b3ac0d20617077.png',
      name:'春招应届生简历模板'
    }]
  },

  formworkDetail: function (e) {
    console.log(e.currentTarget.dataset)
    var obj = JSON.stringify(e.currentTarget.dataset.obj);
    wx.navigateTo({
      url: "/pages/formwork/formworkDetail/formworkDetail?obj="+encodeURIComponent(obj)
  })
  }
})