$(document).ready(function(){


var car = $(".cars");
var store = $(".stores");
var heading = $(".heading");
var desc = $(".description");
var banner = $(".banner");
var menu = $(".menu");
var icon = $(".menu img")
var nav = $(".nav-responsive");

    store.click(function(){
        banner.css("background-image","url(Images/showroom.jpg)");
        car.removeClass("active");
        $(this).addClass("active");
        heading.text("STATE OF THE ART SHOWROOM");
        desc.text("Visit our showroom in Nairobi to view all the cars in our inventory");
        
    })
    car.click(function(){
        banner.css("background-image","url(Images/lamboghini.jpg)");
        store.removeClass("active");
        $(this).addClass("active");
        heading.text("AFRICAN LEADING SELLER OF EXOTIC CARS");
        desc.text("we pride ourselves in providing Africa with high-end exotic cars whose primary purpose is to convert fuel to adrenaline");
        
    })
    $(".copyright span").text(new Date().getFullYear());

    menu.click(function(){
        nav.toggleClass("open");
        if (icon.attr("src") == "Images/Icons/hamburger.png")
        {
            icon.attr("src","Images/Icons/cancel.png");
        }
        else
        {
            icon.attr("src","Images/Icons/hamburger.png");
        }
    })

});