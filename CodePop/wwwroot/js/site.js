// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
/*Topbar menu dropdown functionality*/
    $("#topbar-dropdown").click(function () { $("#sidebar").toggleClass("xs-hide") });
    $(".main-body").hover(function() { $("#sidebar").addClass("xs-hide") });
});