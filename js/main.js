var pepsi_seen = false;
document.getElementById('inquiry_btn').style.visibility="hidden";
document.getElementById('brand_button_row').style.visibility="hidden";
document.getElementById('like').style.visibility="hidden";


function showBtn(){
	document.getElementById('inquiry_btn').style.visibility="visible";
	$('#inquiry_btn').addClass('animated fadeIn');

	switch(document.getElementById('inquiry_select').selectedIndex) {
	 case 1:
	  subject="Business%20Inquiry";
	  break;
	 case 2:
	  subject="Driver%20Inquiry";
	  break;
	 default:
	 subject = "General";
	}
	document.getElementById('inquiry_btn_link').href="mailto:mrfix84@gmail.com?subject=" +
													subject +
													"&amp;body=Hi%20Chassis%2C%0A%3C%3CINSERT%20YOUR%20MESSAGE%20HERE%3E%3E%20";
}

$('.bran_button_img').click(function(){
	var van = document.getElementById("van");	
	var brandSrc = this.getAttribute('src');
  //handle pepsi/coke easter egg
	if (brandSrc == "img/brand_buttons/pepsi.png" && !pepsi_seen){
		van.src = "img/cars/coke.png";
		pepsi_seen = true;
		setTimeout(function () {
			van.src = "img/cars/" + brandSrc.substring(brandSrc.lastIndexOf('/')+1);
    	}, 500);	
	}
  //handle facebook like easter egg
  else if(brandSrc == "img/brand_buttons/facebook.png"){
    van.src = "img/cars/" + brandSrc.substring(brandSrc.lastIndexOf('/')+1);
    $("#like").addClass("animated tada");  
    document.getElementById("like").style.visibility="visible";  
  }
	else{
    $("#like").removeClass("animated tada");
    document.getElementById("like").style.visibility="hidden";
		van.src = "img/cars/" + brandSrc.substring(brandSrc.lastIndexOf('/')+1);
	}
		
});

$(document).scroll(function(){
	var st = $(document).scrollTop();
    document.getElementById('debug').innerHTML = st;

    if (st > 360){
    	document.getElementById('brand_button_row').style.visibility="visible";
    	$('#brand_button_row').addClass('animated fadeInUp')
    }
});

var barChartData = {
              labels : ["San Francisco","New York City"],
              datasets : [
                {
                  label : "Uber",
                  // fillColor : "rgba(221,16,33,0.5)",
                  // strokeColor : "rgba(220,220,220,0.8)",
                  // highlightFill: "rgba(221,16,33,0.75)",
                  // highlightStroke: "rgba(220,220,220,1)",
                  fillColor : "rgba(0,0,0,0.5)",
                  strokeColor : "rgba(220,220,220,0.8)",
                  highlightFill: "rgba(0,0,0,0.75)",
                  highlightStroke: "rgba(220,220,220,1)",
                  data : [18000,16000]
                },
                {
                  label : "Lyft",
                  fillColor : "rgba(255, 0, 191,0.5)",
                  strokeColor : "rgba(220,220,220,0.8)",
                  highlightFill: "rgba(255, 0, 191,0.75)",
                  highlightStroke: "rgba(220,220,220,1)",
                  data : [15000,17000]
                }
              ]
            }
window.onload = function(){
  var ctx = document.getElementById("chart").getContext("2d");
  window.myBar = new Chart(ctx).Bar(barChartData, {
    responsive : true,
    scaleOverride : true,
    scaleSteps : 5,
    scaleStepWidth: 4000,
    scaleStartValue: 0,
    scaleShowLabels: true,
    scaleShowGridLines : false,
    barValueSpacing : 15,
    showTooltips: false
  });
}