//Page Object
// 0 引用 用来发送请求的 方法 一定要把路径 补全
import { request } from "../../request/index";
Page({
  data: {
    //轮播图  数组
    swiperList:[],
    // 导航  数组
    catesList:[],
    floorList:[]

  },
  //页面开始加载，就会触发
  onLoad: function(options) {
    // 1 发送异步请求获取轮播图数据  优化的手段可以通过es6的 promise来解决这个问题
/*
    var reqTask = wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result) => {
        this.setData({
          swiperList:result.data.message
        })
      }
        });
      */
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();

  },

  //获取轮播图数据
  getSwiperList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
      .then(result=>{
        this.setData({
        swiperList:result.data.message
      })
    })
  },
    // 获取 分类导航数据
  getCatesList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
      .then(result=>{
        this.setData({
        catesList:result.data.message
      })
    })
  },
   // 获取 楼层数据
   getFloorList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
      .then(result=>{
        this.setData({
        floorList:result.data.message
      })
    })
  },
});
  