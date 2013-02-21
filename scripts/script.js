$defaultViewMode="normal"; 
	$tsMargin=0; 
	$scrollEasing=1000; //scroll easing amount (0 for no easing) 
	$scrollEasingType="easeOutCirc"; //scroll easing type 
	$thumbnailsContainerOpacity=0.8; //thumbnails area default opacity
	$thumbnailsContainerMouseOutOpacity=0; //thumbnails area opacity on mouse out
	$thumbnailsOpacity=0.6; //thumbnails default opacity		$nextPrevBtnsInitState="show"; //next/previous image buttons initial state ("hide" or "show")
$keyboardNavigation="on"; //enable/disable keyboard navigation ("on" or "off")


$thumbnails_wrapper=$("#thumbnails_wrapper");
$outer_container=$("#outer_container");
$thumbScroller=$(".thumbScroller");
$thumbScroller_container=$(".thumbScroller .container");
$thumbScroller_content=$(".thumbScroller .content");
$thumbScroller_thumb=$(".thumbScroller .thumb");

$(window).load(function() {
	//thumbnail scroller
	$(".content").css('cursor','pointer');
	$("#copyright").typewriter();
	$("#cu").click(
	function()
	{	$("#information").fadeOut(0);
		$("#sponsors").fadeOut(0);
		$("#contacts").fadeIn(1000);
	});
	$("#closecu").click(
	function()
	{
		$("#contacts").fadeOut(0);
	});
	$("#sp").click(
	function()
	{	$("#contacts").fadeOut(0);
		$("#information").fadeOut(0);
		$("#sponsors").fadeIn(1000);
	});
	$("#closesp").click(
	function()
	{
		$("#sponsors").fadeOut(0);
	});
	$("#info").click(
	function()
	{
		$("#contacts").fadeOut(0);
		$("#sponsors").fadeOut(0);
		$("#information").fadeIn(1000);
	});
	$("#closeinfo").click(
	function()
	{
		$("#information").fadeOut(0);
	});
	$("#reachus").click(
	function()
	{
		$("#schedule").css("color","#333");
		$("#sched").fadeOut(0);
		$("#faq").css("color","#333");
		$("#faqinfo").fadeOut(0);
		$("#creds").css("color","#333");
		$("#credits").fadeOut(0);
		$("#reachus").css("color","#00ccff");
		$("#reach").fadeIn(1000);
	});
	$("#schedule").click(
	function()
	{
		$("#faq").css("color","#333");
		$("#faqinfo").fadeOut(0);
		$("#creds").css("color","#333");
		$("#credits").fadeOut(0);
		$("#reachus").css("color","#333");
		$("#reach").fadeOut(0);
		$("#schedule").css("color","#00ccff");
		$("#sched").fadeIn(1000);
	});
	$("#creds").click(
	function()
	{
		$("#schedule").css("color","#333");
		$("#sched").fadeOut(0);
		$("#faq").css("color","#333");
		$("#faqinfo").fadeOut(0);
		$("#reachus").css("color","#333");
		$("#reach").fadeOut(0);
		$("#creds").css("color","#00ccff");
		$("#credits").fadeIn(1000);
	});
	$("#faq").click(
	function()
	{
		$("#schedule").css("color","#333");
		$("#sched").fadeOut(0);
		$("#creds").css("color","#333");
		$("#credits").fadeOut(0);
		$("#reachus").css("color","#333");
		$("#reach").fadeOut(0);
		$("#faq").css("color","#00ccff");
		$("#faqinfo").fadeIn(1000);
	});
	$thumbScroller_container.css("marginLeft",$tsMargin+"px"); //add margin
	sliderLeft=$thumbScroller_container.position().left;
	sliderWidth=$outer_container.width();
	$thumbScroller.css("width",sliderWidth);
	var totalContent=0;
	fadeSpeed=200;
	
	var $the_outer_container=document.getElementById("outer_container");
	var $placement=findPos($the_outer_container);
	
	$thumbScroller_content.each(function () {
		var $this=$(this);
		totalContent+=$this.innerWidth();
		$thumbScroller_container.css("width",totalContent);
		$this.children().children().children(".thumb").fadeTo(fadeSpeed, $thumbnailsOpacity);
	});
	$thumbScroller.mousemove(function(e){
		if($thumbScroller_container.width()>sliderWidth){
	  		var mouseCoords=(e.pageX - $placement[1]);
	  		var mousePercentX=mouseCoords/sliderWidth;
	  		var destX=-((((totalContent+($tsMargin*2))-(sliderWidth))-sliderWidth)*(mousePercentX));
	  		var thePosA=mouseCoords-destX;
	  		var thePosB=destX-mouseCoords;
	  		var pos=$("#last").position();
	  		if(mouseCoords>destX){
		  			$thumbScroller_container.stop().animate({left: -thePosA}, $scrollEasing,$scrollEasingType); 
	  		} else if(mouseCoords<destX){
		  		$thumbScroller_container.stop().animate({left: thePosB}, $scrollEasing,$scrollEasingType); 
	  		} else {
				$thumbScroller_container.stop();  
	  		}
		}
	});
	$thumbnails_wrapper.fadeTo(fadeSpeed, $thumbnailsContainerOpacity);
	

	$thumbScroller_thumb.hover(
		function(){ //mouse over
			var $this=$(this);
			$this.stop().fadeTo(fadeSpeed, 1);
			$this.getElementById("item")
		},
		function(){ //mouse out
			var $this=$(this);
			$this.stop().fadeTo(fadeSpeed, $thumbnailsOpacity);
		}
	);

	//on window resize scale image and reset thumbnail scroller
	$(window).resize(function() {
		FullScreenBackground("#bgimg",$bgimg.data("newImageW"),$bgimg.data("newImageH"));
		$thumbScroller_container.stop().animate({left: sliderLeft}, 400,"easeOutCirc"); 
		var newWidth=$outer_container.width();
		$thumbScroller.css("width",newWidth);
		sliderWidth=newWidth;
		$placement=findPos($the_outer_container);
	});

});
//function to find element Position
	function findPos(obj) {
		var curleft = curtop = 0;
		if (obj.offsetParent) {
			curleft = obj.offsetLeft
			curtop = obj.offsetTop
			while (obj = obj.offsetParent) {
				curleft += obj.offsetLeft
				curtop += obj.offsetTop
			}
		}
		return [curtop, curleft];
	}