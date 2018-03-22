// components/ZFSelectItem/ZFSelectItem.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {

    // title图片
    titleIcon:{
      type: String,
      value: ''
    },
    // title
    title:{
      type:String,
      value:'标题'
    },
    //content
    detail: {
      type: String,
      value: ''
    },
    // detailIcon
    detailIcon: {
      type: String,
      value: ''
    },
    isSwith:{
      type:Boolean,
      value:false
    },
    isLine:{
      type:Boolean,
      value:true,
    }
  },

  /**
   * 
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
