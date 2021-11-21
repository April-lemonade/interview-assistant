// components/specialist/specialist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    specialist: {
      type: Object,
      value: {
        id: 0,
        avatarUrl: "",
        name: "",
        company: "",
        followerCnt: 0,
        experts: "",
        isFollow: false
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    swichFollow() {
      const that = this
      if (that.data.specialist.isFollow) {
        wx.showModal({
          content: '确定取消关注吗',
          success(res) {
            if (res.confirm) {
              that.triggerEvent("follow", that.data.specialist.id)
              wx.showToast({
                title: '取关成功',
              })
            }
          }
        })
      } else {
        that.triggerEvent("follow", that.data.specialist.id)
      }
    }
  }
})