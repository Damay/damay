/**
 * Created with JetBrains WebStorm.
 * User: damei
 * Date: 13-9-2
 * Time: 下午9:15
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    $(".hotul li").mouseover(function(){
        $(this).children(".tishi").show();
    }).mouseout(function(){
            $(this).children(".tishi").hide();
    });

    $(".active_tab").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab_line").removeClass();
        $(this).children("span").addClass("tab_line");
        $(".active_content ul").eq($(this).index()).addClass("current_ul").siblings().removeClass("current_ul");
    });
});