// ==UserScript==
// @name         hide outlook rightbar
// @namespace    http://abelliu.com
// @version      0.1
// @description  hide outlook rightbar
// @author       abel
// @require      https://code.jquery.com/jquery-2.2.2.min.js
// @include      https://outlook.live.com/*
// @grant		 none
// ==/UserScript==

function hidebar(){
    
    $("._n_p").css("display","none");
    $(".conductorContent").parent().css("right","0px");
    
    console.log("hide");
    setTimeout(hidebar, 1000);
}

$(document).ready(function(){
    hidebar();
});
