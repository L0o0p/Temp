$(function () {
    'use strict';

    window.Validator = function(val, rule) {
        this.validate_max = function () {
            val = parasFloat(val);
            return val <= rule.max;
        }
    }
})

// rule = {
//     max: 100,
//     min: 10,
//     maxlength: 10,
//     numeric: false,
// }