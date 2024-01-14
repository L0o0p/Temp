

$(function(){
    'use strict'
    var name_validator = new Validator('15', { max: 100, min: 10, });
    name_validator.is_valid();
})