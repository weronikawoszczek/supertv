"use strict";app.common={mainInit:function(){$(".text-banner__content").marquee({duration:1e4,pauseOnHover:!0,pauseOnCycle:!1}),$(".nav-icon1").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).toggleClass("open"),$(".topMenu").toggleClass("opened"),$("body").toggleClass("freeze"),$(".header-scroll").hasClass("scrolled")&&$(".header-scroll").removeClass("scrolled"),$(document).on("click",function e(){$(".topMenu").hasClass("opened")?($(".topMenu").removeClass("opened"),$(".menuToggle").removeClass("open"),$("body").toggleClass("freeze")):$(document).on("click",e)})}),$(".nav-el").on("click",function(e){$(".nav-el").removeClass("active"),$(this).addClass("active")})}},$(function(){$(document).ready(function(){app.common.mainInit()});var e=$(".video").outerWidth();$(".video").height(9*e/16)}),$(window).resize(function(){var e=$(".video").outerWidth();$(".video").height(9*e/16)});