// pages/weixin/weixin.js
Page({
  data: {
    moves:[
      { src:"../publick/emoji-13.png",name:"小孔",val:"好好学习"},
      { src:"../publick/emoji-4.png", name: "小梦", val: "好的"},
      { src:"../publick/emoji-11.png", name: "小雯", val: "喜欢你"}
    ],
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  // onLoad: function () {
  //   this.setData({
  //     icon20:"../publick/emoji-13.png",
  //     icon60:"../publick/emoji-4.png",
  //     icon70: "../publick/emoji-11.png"
  //   });
  // },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});