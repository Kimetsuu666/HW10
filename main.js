"use strict";

function myBind(fun, context, array) {
    return function () {
        return fun.apply(context, array);
    };
}