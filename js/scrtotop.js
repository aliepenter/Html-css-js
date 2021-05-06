//  $("#pageth").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#pageth").offset().top
//     }, 2000);
//     // $('#menuHeader').removeClass('menuActive');
//     // $('#opAll').removeClass('opacityAll');
// });
// $("#page2").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#page2").offset().top
//     }, 500);
//     $('#menuHeader').removeClass('menuActive');
//     $('#opAll').removeClass('opacityAll');
// });
//   $("#page3").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#page3").offset().top
//     }, 500);
//     $('#menuHeader').removeClass('menuActive');
//     $('#opAll').removeClass('opacityAll');
// });
// $("#page4").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#page4").offset().top
//     }, 500);
//     $('#menuHeader').removeClass('menuActive');
//     $('#opAll').removeClass('opacityAll');
// });
// function scroll_to_div(div_id)
// {
//  $('html,body').animate(
//  {
//   scrollTop: $("#"+div_id).offset().top
//  },
//  'slow');
// }
// $(document).ready(function() {
//     $('#dvlink').click = function() {
//         $(document).scrollTo('#dv');
//     }
// });

$(document).ready(function() {
    $('#click1').click(function(){
       $('html,body').animate(
        {
        scrollTop: $("#page1").offset().top - 102
        },'slow');
       $('#menuHeader').removeClass('menuActive');
       $('#opAll').removeClass('opacityAll');
       flags = true;
    });
    $('#click2').click(function(){
       $('html,body').animate(
        {
        scrollTop: $("#page2").offset().top - 102
        },'slow');
       $('#menuHeader').removeClass('menuActive');
       $('#opAll').removeClass('opacityAll');
       flags = true;
    });
    $('#click3').click(function(){
       $('html,body').animate(
        {
        scrollTop: $("#page3").offset().top - 102
        },'slow');
       $('#menuHeader').removeClass('menuActive');
       $('#opAll').removeClass('opacityAll');
       flags = true;
    });
    $('#click4').click(function(){
       $('html,body').animate(
        {
        scrollTop: $("#page4").offset().top - 102
        },'slow');
       $('#menuHeader').removeClass('menuActive');
       $('#opAll').removeClass('opacityAll');
       flags = true;
    });
   $('#click5').click(function(){
       $('html,body').animate(
        {
        scrollTop: $("#page5").offset().top - 102
        },'slow');
       $('#menuHeader').removeClass('menuActive');
       $('#opAll').removeClass('opacityAll');
       flags = true;
    });
});
