/**
 * Created with JetBrains WebStorm.
 * User: damei
 * Date: 13-9-5
 * Time: 下午6:50
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    $(".menu_hump li").click(function(){
        $(this).addClass("current").siblings().removeClass();
        //清除所有的下划线
        $(".menu_hump .tab_line").removeClass();
        //只在当前点中的tab加下划线
        $(this).children("span").addClass("tab_line");
        $(".detail_mail .content div").eq($(this).index()).addClass("current").siblings().removeClass();
    });
});