// pages/ProductDetail/ProductDetail.js
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data:{
       imgUrls: [   
    ],  
    indicatorDots: true,  
    autoplay: true,  
    interval: 5000,  
    duration: 1000,  
    circular:true,
    userInfo: {} 
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     var that=this;
    var replyArr=[];
    
    wx.request({
  url: 'https://item.m.jd.com/ware/detail.json?wareId='+options.wareId+"", //仅为示例，并非真实的接口地址
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
   console.log(res.data);
    var images=res.data.ware.images;
    var image=[];
    //循环轮播
    for(var i=0;i<images.length;i++)
    {
      //var img={url:images[i].bigpath}
        image.push(images[i].bigpath.replace("/n0","/n12"));
    }
    that.setData({
       imgUrls:image
    });
    replyArr.push(res.data.ware.wi.code);
   for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray",'reply', replyArr.length, that)
      }
    }
     wx.showNavigationBarLoading()


wx.hideNavigationBarLoading()
  }
  })
   
     
     
 
   // https://item.m.jd.com/newComments/newCommentsDetail.json
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
   previewImage: function (e) {
    var current = e.target.dataset.src

    wx.previewImage({
      current: current,
      urls: this.data.imgUrls
    })
  },
})