$(function(){
  'use strict';

  window.Input = function(selector){
    var $ele,
    $error_ele,
    me = this,
    rule = {};

    this.load_validator = function(){
      var val = this.get_val();
      console.log("rule1",rule);
      this.validator = new Validator(val, rule);
    };

    this.get_val = function(){
      return $ele.val();
    };


    function init() {
      find_ele();
      get_error_ele();
      parse_rule();
      me.load_validator();
      listen();
    }

    function listen() {
      $ele.on('blur', function () {
        console.log("me.get_val()",me.get_val());
        var valid = me.validator.validate_max(me.get_val());
        if (valid)
          $error_ele.hide();
        else
          $error_ele.show();
      })
    }

    function get_error_ele() {
      $error_ele = $(get_error_selector());
    }

    function get_error_selector() {
      return '#' + $ele.attr('name') + '-input-error';
    }



    function find_ele(){
      $ele = (selector instanceof jQuery) ? selector : $(selector);
    }

    function parse_rule(){
      var rule_string = $ele.data('rule');
      if (!rule_string) return;
  
      var rule_arr = rule_string.split('|'); 
      for (var i = 0; i < rule_arr.length; i++){
        var item_str = rule_arr[i];
        var item_arr = item_str.split(':');
        rule[item_arr[0]] = JSON.parse(item_arr[1]);
      }
      console.log(rule);
    }

    init(); // 此处调用init来初始化
  };

});