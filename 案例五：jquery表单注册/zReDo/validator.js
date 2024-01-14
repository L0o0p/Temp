// 独立模块：验证器

$(function(){
  
    window.Validator = function (val, rule) {
    
     // 最大值
     this.validate_max = function (val) {
      console.log('validate_max',val);
      val = parseFloat(val);
      val = val || val;
      if(val){
        val = val}; 
      return val <= rule.max;
    };
// 返回布尔类型
  }

})
