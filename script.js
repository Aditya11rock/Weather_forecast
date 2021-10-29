
function bandi()
{
    var val1=document.getElementById("mad1").value;
    var val2="http://api.weatherstack.com/current? access_key = 46f6f145d5f957d635df5c51eb2b05e5 & query ="+val1;

    fetch('http://api.weatherstack.com/current?access_key=46f6f145d5f957d635df5c51eb2b05e5&query='+val1).then((resp)=>{
        console.log(resp);    
    return resp.json();
    }).then(function(data){
        console.log(JSON.stringify(data.current));
        var cur=data.request;
        var loc=data.location;
        if(cur==undefined)
        {
            reset();
            alert("NOT FOUND!!!");
            
            return;
        }
        //console.log(cur.query);
      //  console.log(loc.country);
       // console.log(loc.name);
       // console.log(loc.region);
        var curobs=data.current;
       // console.log("temperature : "+curobs.temperature);
      //  console.log("wind speed : "+ curobs.wind_speed);
       // console.log("humidity : "+curobs.humidity);
       // console.log("observation time : "+curobs.observation_time);
        
        document.getElementById("country").innerHTML=loc.country;
        document.getElementById("region").innerHTML=loc.region;
        document.getElementById("temperature").innerHTML=curobs.temperature+" *C";
        document.getElementById("humidity").innerHTML=curobs.humidity+" %";
        document.getElementById("weatherdis").innerHTML=curobs.weather_descriptions[0];
        document.getElementById("windspeed").innerHTML=curobs.wind_speed+" km/hr";
        document.getElementById("start5").style.visibility="visible";
        document.getElementById("obst").innerHTML="observation-time: "+curobs.observation_time;

    })

    console.log(val1);
    document.getElementById("mad1").value="";
    //$("#mad4").toggle("bounce","slow");

}

function reset(){

    document.getElementById("start5").style.visibility="hidden";
    console.log("reset successful")

}


