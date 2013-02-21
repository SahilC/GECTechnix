$(window).load(function() {
            $(".notific").children("div").each(function(){
                $(this).typewriter();
            });
        });
            $(function() {
                $('#menu a').bind('click',function(event){
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500,'easeInOutExpo');
                    event.preventDefault();
                });
            });
            $("#menu").hover(function(){
                    $(this).stop().animate({left:"0%",},1000);
                },function(){
                    $(this).stop().animate({left:"-18%"},500);
                });
            $(".icon").hover(function () {
                 $(this).children("div.grey").fadeOut(0);
                 $(this).children("div.color").fadeIn(0);
                },function () {
                    $(this).children("div.color").fadeOut(0);
                     $(this).children("div.grey").fadeIn(0);
                    });
            $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.text(), progress = 0;
            $ele.text('');
            var timer = setInterval(function() {
                $ele.text(str.substring(0, progress++) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) clearInterval(timer);
            }, 100);
        });
        return this;
 };