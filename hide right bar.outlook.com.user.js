// ==UserScript==
// @name         hide outlook rightbar
// @namespace    http://abelliu.com
// @version      0.4
// @description  hide outlook rightbar
// @author       abel
// @require      https://code.jquery.com/jquery-2.2.2.min.js
// @include      https://outlook.live.com/*
// @grant		 none
// @license      MIT
// ==/UserScript==

function hidebar(){
    $("#app").children("div:eq(0)").children("div:eq(1)").children("div:eq(0)").children("div:eq(0)").children("div:eq(3)").css("display","none");
    
    setTimeout(hidebar, 1000);
}

$(document).ready(function(){
    hidebar();
});
