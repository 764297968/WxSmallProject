// pages/NewsShow/NewsShow.js

 var WxSearch = require('../../wxSearch/wxSearch.js')
 var data_={
    stock:1,
    keyword:'智能电视',
    page:1,
    _format_:'json'
 }
 var app = getApp()
Page({
  data:{
    productdata:null,
  },
  onLoad:function(){
     var that=this;
     app.getRequest("https://so.m.jd.com/ware/hotKeyWord.action?_format_=json",{},function(res){
       WxSearch.init(that, 43, JSON.parse(res.data.hotKeyWord).owner);
     })
     //热门搜索 https://so.m.jd.com/ware/hotKeyWord.action?_format_=json
   
 
 app.getRequest("https://so.m.jd.com/ware/searchList.action",data_,function(res){
 that.setData({
      productdata: JSON.parse(res.data.value).wareList.wareList
    })
    })
 
    // 页面初始化 options为页面跳转所带来的参数
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
  },detail:function(event){
    //详情页 
    var wareId=event.currentTarget.dataset.wareid;
   
     wx.navigateTo({
          url:"../ProductDetail/ProductDetail?wareId="+wareId
        })
   
  },
   wxSearchFn: function(e){
    var that = this
    WxSearch.wxSearchAddHisKey(that);
    var keyword=that.data.wxSearchData.value;
  
  data_.keyword=keyword;
    app.getRequest("https://so.m.jd.com/ware/searchList.action",data_,function(res){
 that.setData({
      productdata: JSON.parse(res.data.value).wareList.wareList
    })
    })
  },
  wxSearchInput: function(e){
    var that = this
    WxSearch.wxSearchInput(e,that);
    
    var data={
      keyword: e.detail.value,
      _format_: "json"
    }
    // data_.keyword=e.detail.value;
    //https://so.m.jd.com/ware/tip.action
    //https://so.m.jd.com/ware/searchSuggestion.action
  
       // WxSearch.initMindKeys(['weappdev.com','微信小程序开发','微信开发','微信小程序']);
     app.getRequest("https://so.m.jd.com/ware/searchSuggestion.action", data,function(res){
       console.log(JSON.parse(res.data.searchTipList));
       var data = JSON.parse(res.data.searchTipList);
       var keys=[];
       if (data!=null)
       {
         for (var i = 0; i < data.length; i++) {
           keys.push(data[i].text);
         }
       }
       
       WxSearch.initMindKeysArr(keys);
      
      })
     console.log(WxSearch.mindKeys);//下拉感应
  },
  wxSerchFocus: function(e){
    var that = this
    WxSearch.wxSearchFocus(e,that);
  },
  wxSearchBlur: function(e){
    var that = this
    WxSearch.wxSearchBlur(e,that);
  },
  wxSearchKeyTap:function(e){
    var that = this
    WxSearch.wxSearchKeyTap(e,that);
  },
  wxSearchDeleteKey: function(e){
    var that = this
    WxSearch.wxSearchDeleteKey(e,that);
  },
  wxSearchDeleteAll: function(e){
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function(e){
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },
   // 上拉加载回调接口
    onReachBottom: function () {
      var that=this;
      var datalist=[];
      datalist=this.data.productdata;
      
      data_.page+=1;
        app.getRequest("https://so.m.jd.com/ware/searchList.action",data_,function(res){
          var list=JSON.parse(res.data.value).wareList.wareList;
          datalist=datalist.concat(list);
          console.log(JSON.parse(res.data.value));
            that.setData({
            productdata: datalist
                })
            
    })
    
     
        // 我们用total和count来控制分页，total代表已请求数据的总数，count代表每次请求的个数。
        // 上拉时需把total在原来的基础上加上count，代表从count条后的数据开始请求。
        
        // 网络请求
        
       
    }
})