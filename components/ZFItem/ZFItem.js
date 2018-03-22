// components/ZFItem/ZFItem.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    top:{
      type:String,
      value:'0rpx'
    },
    itemWidth:{
      type:String,
      value: '50vw',
    },
    img_path:{
      type:String,
      value: '/images/yyms@2x.png',
    },
    img_width: {
      type: String,
      value: '100rpx',
    },
    img_height: {
      type: String,
      value: '100rpx',
    },
    text_title: {
      type: String,
      value: '天天特价',
    },
    text_size: {
      type: String,
      value: '35rpx',
    },
    text_color: {
      type: String,
      value: 'red',
    },
    detail_title: {
      type: String,
      value: '特惠不打烊',
    },
    detail_size: {
      type: String,
      value: '30rpx',
    },
    detail_color: {
      type: String,
      value: '#999',
    },
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

  }
})
