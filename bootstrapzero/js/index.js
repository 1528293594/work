$(function () {
    var num = 0;
    //下拉菜单
    $(".brand").click(function (event) {
        $("#themeMenu").slideToggle(200);
        event.stopPropagation();
    })
    $("#themeMenu li").mouseover(function () {
        $(this).css("backgroundColor", "#EEEEEE");

        $(this).siblings().css("backgroundColor", "#ffffff");
    })
    $("#themeMenu li").mouseout(function () {
        $(this).css("backgroundColor", "#ffffff");

    })
    // 侧边栏
    $("#side_nav").click(function (event) {
        $(".side").animate({ right: "0px" });
        $(".shadow").show();
        //阻止事件冒泡
        event.stopPropagation();
    })
    $(document).click(function () {
        $(".side").animate({ right: "-310px" });
        $("#themeMenu").slideUp(200);
        $(".search").hide();
        $(".shadow").hide();
    })
    // 搜索框
    $(".right li").eq(2).click(function (event) {

        if (num === 0) {
            $(".search").show();
            num = 1;
        } else {
            $(".search").hide();
            num = 0;
        }
        event.stopPropagation();
    })
    //轮播图
    // var current=0;
    // function next(cur){
    //     $(".banner .container .row ul li").eq(cur).animate({left:"0px"});
    //     // 焦点
    //     $(".banner .dots button").eq(cur).children().addClass("active");
    //     $(".banner .dots button").eq(cur).siblings().children().removeClass("active");
    // }
    // // setInterval(function(){
    //     next(current);
    //     current++;
    //     if(current===5){
    //         current=0;
    //     }
    // },3000);
    // 轮播图重写
    var cur = 0;
    var leftarr = [0, 2000, 4000, 6000, 8000, 10000];
    var each;
    var li = $(".banner .container .row ul li");

    // 下一个
    function next() {
        for (var i = 0; i < leftarr.length; i++) {
            if (leftarr[i] === 0) {
                leftarr[i] = 10000;
            } else {
                leftarr[i] -= 2000;
            }
        }
        if (cur === 5) {
            cur = 0;
        } else {
            cur++;
        }
        $.each(li, function (j, ele) {
            ele.animate({ left: leftarr[j] + "px" });
        });
        $(".banner .dots button").eq(cur).children().addClass("active");
        $(".banner .dots button").eq(cur).siblings().children().removeClass("active");
    }
    // 上一个
    function pre() {
        for (var i = 0; i < leftarr.length; i++) {
            if (leftarr[i] === 10000) {
                leftarr[i] = 0;
            } else {
                leftarr[i] += 2000;
            }
        }
        if (cur === 0) {
            cur = 5;
        } else {
            cur--;
        }
        $.each(li, function (j, ele) {
            ele.animate({ left: leftarr[j] + "px" });
        })

    }
    // 制作定时器
    // setInterval(function(){
    //     next();
    //    $(".banner .container .row ul li").each(function(j,ele){
    //     ele.animate("left",left[j]+"px");
    //    })
    // },3000);
    setInterval(function () {
        next();
    }, 3000);
    // // 点击焦点切换
    $(".banner .dots button").click(function () {
        $(this).children().addClass("active");
        $(this).siblings().children().removeClass("active");
        if ($(this).index() > cur) {
            for (var k = 0; k < cur - $(this).index(); k++) {
                next();
            }
        } else {
            for (var h = 0; h < $(this).index(); h++) {
                pre();
            }
        }
        cur = $(this).index();
    })
    $(".hov").mouseover(function () {
        $(this).children().removeClass("white");
    })
    $(".hov").mouseout(function () {
        $(this).children().addClass("white");
    })

})