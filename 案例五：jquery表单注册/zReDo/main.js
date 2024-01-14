// 入口文件

// 选中


// 解析


// 验证

$(function () {
  'use strict';

  var $inputs = $('[data-rule]');
  var $form = $('#signup');
  var inputs = []; // 修改变量名避免冲突

  $inputs.each(function (index, node) {
    var inputObj = new Input(node); // 创建Input实例
    inputs.push(inputObj); // 将实例添加到数组中
  });

  $form.on('submit', function (e) {
    e.preventDefault();
    $inputs.trigger('blur'); // 触发所有输入的blur事件，这假设Input构造函数绑定了blur事件

    for (var i = 0; i < inputs.length; i++) { // 使用inputs.length作为循环条件
      var item = inputs[i];
      var r = item.validator.is_valid(); // 假设是is_valid方法
      if (!r) {
        alert('invalid');
        return;
      }
    }
  });
});

 


  // var test = new Input('#test');
  // var valid = test.validator.validate_max();
  // console.log('valid:',valid);
  // console.log('rule:',Input.parse_rule);












// })






// $(function() {
//   'use strict';
  
//   var here_validator = new Validator(5, { max: 100 });
//   var result = here_validator.validate_max();
//   console.log('result:', result);
// });