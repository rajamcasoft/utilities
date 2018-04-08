var i=0;

function timedCount() {
    i=i+1;
   // postMessage(i);
    setTimeout("timedCount()", 500);
}


 var watchID;
         var geoLoc;
         



         function showLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
			 postMessage(latitude+','+longitude);
           // alert("Latitude : " + latitude + " Longitude: " + longitude);
			  //var output = document.getElementById("out");
			  //var d = new Date();
			     // output.innerHTML = output.innerHTML+d.toLocaleTimeString()+'<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
				  //console.log(d.toLocaleTimeString()+' Latitude is ' + latitude + 'Longitude is ' + longitude);


         }
         
         function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
         }
         
         function getLocationUpdate(){
            if(navigator.geolocation){
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:60000};
               geoLoc = navigator.geolocation;
               watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
            }
            
            else{
              // alert("Sorry, browser does not support geolocation!");
            }
         }
		 
		 getLocationUpdate();
//timedCount();