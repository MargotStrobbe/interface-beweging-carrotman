var buttonEat = document.getElementById('button_eat');
var buttonWind = document.getElementById('button_wind');
var buttonFall = document.getElementById('button_fall');
var video = document.getElementById('video');

buttonEat.addEventListener('click', speelEat);
buttonWind.addEventListener('click', speelWind);
buttonFall.addEventListener('click', speelFall);

function speelEat() {
    setTimeout(function(){
        video.src = "./Carrotman_files/eten.mp4";
        document.getElementById("body").classList.add('body1');
        document.getElementById("body").classList.remove('body2' && 'body3');  }, 750);
    
    document.getElementById("transistion").classList.add('animated');
        setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
        }, 1500);
    console.log('run eat');
    }

function speelWind() {
    setTimeout(function(){    
        video.src = "./Carrotman_files/wind.mp4";
        document.getElementById("body").classList.add('body2');
        document.getElementById("body").classList.remove('body1' && 'body3');
        }, 750);
    
    document.getElementById("transistion").classList.add('animated');
        setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
        }, 1500);
    
    console.log('run wind');
    }

function speelFall() {
    setTimeout(function(){     
        video.src = "./Carrotman_files/fall.mp4";
        document.getElementById("body").classList.add('body3');
        document.getElementById("body").classList.remove('body1' && 'body2'); 
        }, 750);
    
    document.getElementById("transistion").classList.add('animated');
        setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
        }, 1500);
    
    console.log('run fall');
    }    
