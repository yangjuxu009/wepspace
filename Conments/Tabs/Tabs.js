// Conments/Tabs/Tabs.js
Component({

  observers:{
    '**': function (e) { 
      
      // 每次 setData 都触发
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    itemData:{
      type:Array,
      value:[{name:"tab1"}]
    },
    onClicks:{
      type:Function
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
    onClicks: function (e) {
      this.setData({ index: e.currentTarget.dataset.name})
      this.triggerEvent('onClicks', { name: e.currentTarget.dataset.name });
    }
  }
})
