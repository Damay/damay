/**
 * Created with JetBrains WebStorm.
 * User: damei
 * Date: 13-9-2
 * Time: 下午11:00
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    $(".active_hotul li").mouseover(function(){
        $(this).children(".tishi").show();
    }).mouseout(function(){
            $(this).children(".tishi").hide();
    });

});