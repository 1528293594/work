$(function () {
    var num = 0;
    //下拉菜单
    $(".brand").click(function (event) {
        $("#themeMenu").slideToggle(200);
        event.stopPropagation();
    })
    $("#themeMenu li").mouseover(function(){
       $(this).css("backgroundColor","#EEEEEE");
      
       $(this).siblings().css("backgroundColor","#ffffff");
    })
    $("#themeMenu li").mouseout(function(){
        $(this).css("backgroundColor","#ffffff");
       
    })
    // 侧边栏
    $("#side_nav").click(function (event) {
        $(".side").animate({ right: "0px" });
        //阻止事件冒泡
        event.stopPropagation();
    })
    $(document).click(function () {
        $(".side").animate({ right: "-310px" });
        $("#themeMenu").slideUp(200);
        $(".search").hide();
    })
    // 搜索框
    $(".right li").eq(2).click(function (event) {

        if (num === 0) {
            $(".search").show();
            num=1;
        }else{
            $(".search").hide();
            num=0;
        }
        event.stopPropagation();
    })
    //轮播图
    var current=0;
    function next(cur){
        $(".banner .container .row ul li").eq(cur).show().siblings().hide();
        // 焦点
        $(".banner .dots button").eq(cur).children().addClass("active");
        $(".banner .dots button").eq(cur).siblings().children().removeClass("active");
    }
    // setInterval(function(){
    //     next(current);
    //     current++;
    //     if(current===5){
    //         current=0;
    //     }
    // },3000);
    //点击焦点切换
    $(".banner .dots button").click(function(){
        $(this).children().addClass("active");
        $(this).siblings().children().removeClass("active");
        $(".banner .container .row ul li").eq($(this).index()).show().siblings().hide();
        current=$(this).index();
    })
    $(".hov").mouseover(function(){
        $(this).children().removeClass("white");
    })
    $(".hov").mouseout(function(){
        $(this).children().addClass("white");
    })
})