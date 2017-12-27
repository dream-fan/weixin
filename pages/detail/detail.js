// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      singer:{},
      tfboys: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData ({
        singer:options
      })
  },
  addhero: function () {
    var user = { title: this.data.name}
    var tfboys = this.data.tfboys;
    tfboys.push(user);
    this.setData({
      tfboys: tfboys
    })
    this.setData({
      title: "",
    })
  },
  binkinput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  binkinputAge: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  // deletehero: function (e) {
  //   var index = e.currentTarget.dataset.index;
  //   var tfboys = this.data.tfboys;
  //   tfboys.splice(index, 1);
  //   this.setData({
  //     tfboys: tfboys
  //   })

  // },
  // deletehero: function (e) {
  //   var index = e.currentTarget.dataset.index;
  //   var movies = this.data.movies;
  //   movies.splice(index, 1);
  //   this.setData({
  //     movies: movies
  //   })

  // },

  tabClick: function (e) {
   
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