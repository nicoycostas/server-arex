var nasarequest = new XMLHttpRequest();
nasarequest.open('GET','https://api.nasa.gov/planetary/apod?api_key=Yl0fPjonYnrmbzPW1p6thucTD6R3AuKyNXdihJ9K');

var roversrequest = new XMLHttpRequest();
roversrequest.open('GET','https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Yl0fPjonYnrmbzPW1p6thucTD6R3AuKyNXdihJ9K');



// picture of the day
nasarequest.onload = function(){
    var response = nasarequest.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    var img = parsedData.url;
    var explanation = parsedData.hdurl;
    document.querySelector(".title").innerText = parsedData.title;
   
    document.querySelector(".date").innerText= parsedData.date;
    document.querySelector(".pic-description").innerText= parsedData.explanation;
    // document.querySelector(".nasaimg").src = img;
    document.querySelector(".nasa-request-photo").style.backgroundImage =  "url("+ img +")";
    document.querySelector(".download").href = img;
    document.querySelector(".download").innerText = "Download";
    console.log(img);
    document.querySelector("#nasavid").src = img ;
    
}

nasarequest.send();

// Get year dynamically
const year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();