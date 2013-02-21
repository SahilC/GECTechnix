
$(".content").hover(function () {
  $(this).children("div.grey").fadeOut(0);
  $(this).children("div.color").fadeIn(0);
  $(this).children("div.item").animate({"top":"-=200px"},"medium");
  $(this).children("div.item").css("background-color","rgba(255,255,255,1)");
  $(this).children("div.item").css("color","#000");
},function () {
  $(this).children("div.color").fadeOut(0);
  $(this).children("div.grey").fadeIn(0);
  $(this).children("div.item").css("background-color","rgba(0,0,0,0.8)");
  $(this).children("div.item").css("color","#eee");
  $(this).children("div.item").animate({"top":"+=200px"},"fast");
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
    google.load("maps","2", {"other_params":"sensor=false"});
    function init() {
      map = new google.maps.Map2(document.getElementById("map"));
      var myLatLng = new google.maps.LatLng(15.423089,73.980517);
      var myMarker = new google.maps.Marker(myLatLng, {"draggable":"true","title":"Goa College of Engineering"});
      map.setCenter(myLatLng,16);
      map.addControl(new google.maps.LargeMapControl());
      map.addControl(new google.maps.MapTypeControl());
      map.setMapType(G_HYBRID_MAP);
      map.addOverlay(myMarker);
    };
    google.setOnLoadCallback(init);
