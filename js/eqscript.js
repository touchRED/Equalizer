var WIDTH = 1265;
var HEIGHT = 570;

swidth = 100;
sheight = 400;
ypos = 170;
//Height Variables for cleared rects

var h1 = 300;

var h2 = 300;

var h3 = 300;

var h4 = 300;

var h5 = 300;

var h6 = 300;

var h7 = 300;

var h8 = 300;

function init(){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	window.addEventListener('keydown',doKeyDown,true);
	window.addEventListener('keyup',doKeyUp,true);

	return setInterval(draw, 10);
}
	
function clear(){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw(){

	clear();

	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = "#ff0000";
	ctx.fillRect(130,ypos,swidth,sheight);
	ctx.clearRect(130, ypos,swidth, h1);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(260,ypos,swidth,sheight);
	ctx.clearRect(260, ypos,swidth, h2);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(390,ypos,swidth,sheight);
	ctx.clearRect(390, ypos,swidth, h3);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(520,ypos,swidth,sheight);
	ctx.clearRect(520, ypos,swidth, h4);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(650,ypos,swidth,sheight);
	ctx.clearRect(650, ypos,swidth, h5);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(780,ypos,swidth,sheight);
	ctx.clearRect(780, ypos,swidth, h6);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(910,ypos,swidth,sheight);
	ctx.clearRect(910, ypos,swidth, h7);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(1040,ypos,swidth,sheight);
	ctx.clearRect(1040, ypos,swidth, h8);

	//console.log(h1);
}

function doKeyDown(evt){
	switch(evt.keyCode){

		case 49:
		h1 = h1 - 280;
		Synth(100);
		break;
		case 50:
		h2 = h2 - 280;
		Synth(200);
		break;
		case 51:
		h3 = h3 - 280;
		Synth(300);
		break;
		case 52:
		h4 = h4 - 280;
		Synth(400);
		break;
		case 55:
		h5 = h5 - 280;
		Synth(500);
		break;
		case 56:
		h6 = h6 - 280;
		Synth(600);
		break;
		case 57:
		h7 = h7 - 280;
		Synth(700);
		break;
		case 48:
		h8 = h8 - 280;
		Synth(800);
		break;
	}

}

function doKeyUp(evt){
	switch(evt.keyCode){
		case 49:
		while(h1<300){
			h1++;
		}
		break;
		case 50:
		while(h2<300){
			h2++;
		}
		break;
		case 51:
		while(h3<300){
			h3++;
		}
		break;
		case 52:
		while(h4<300){
			h4++;
		}
		break;
		case 55:
		while(h5<300){
			h5++;
		}
		break;
		case 56:
		while(h6<300){
			h6++;
		}
		break;
		case 57:
		while(h7<300){
			h7++;
		}
		break;
		case 48:
		while(h8<300){
			h8++;
		}
		break;
	}
	console.log(evt.keyCode);
}

function Synth(frequency){
	var audiolet = new Audiolet();
    var sine = new Sine(audiolet, frequency);
    var modulator = new Saw(audiolet, 2 * frequency);
   	modulatorMulAdd = new MulAdd(audiolet, frequency/2, frequency);
   	var gain = new Gain(audiolet);
   	var envelope = new PercussiveEnvelope(audiolet, 0, 0.1, 0.5, 
   			function(){
   				audiolet.scheduler.addRelative(0.5);
   			}.bind(this)
   		);
	
	modulator.connect(modulatorMulAdd);
	modulatorMulAdd.connect(sine);
	envelope.connect(gain, 0, 1);
	sine.connect(gain);
	gain.connect(audiolet.output);
}

/*function animate(){
	h1++;
	if(level==300){
		clearInterval(timeVar);
	}
}*/

window.addEventListener('keydown',doKeyDown,true);
window.addEventListener('keyup',doKeyUp,true);

