swidth = 100;
sheight = 400;
ypos = 90;
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
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	window.addEventListener('keydown',doKeyDown,true);
	window.addEventListener('keyup',doKeyUp,true);

	return setInterval(draw, 10);
}
	
function clear(){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(){

	clear();

	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = "#ff0000";
	ctx.fillRect(5,ypos,swidth,sheight);
	ctx.clearRect(5, ypos,swidth, h1);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(135,ypos,swidth,sheight);
	ctx.clearRect(135, ypos,swidth, h2);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(265,ypos,swidth,sheight);
	ctx.clearRect(265, ypos,swidth, h3);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(395,ypos,swidth,sheight);
	ctx.clearRect(395, ypos,swidth, h4);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(525,ypos,swidth,sheight);
	ctx.clearRect(525, ypos,swidth, h5);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(655,ypos,swidth,sheight);
	ctx.clearRect(655, ypos,swidth, h6);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(785,ypos,swidth,sheight);
	ctx.clearRect(785, ypos,swidth, h7);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(915,ypos,swidth,sheight);
	ctx.clearRect(915, ypos,swidth, h8);
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
		Synth(0);
		break;
		case 50:
		while(h2<300){
			h2++;
		}
		Synth(0);
		break;
		case 51:
		while(h3<300){
			h3++;
		}
		Synth(0);
		break;
		case 52:
		while(h4<300){
			h4++;
		}
		Synth(0);
		break;
		case 55:
		while(h5<300){
			h5++;
		}
		Synth(0);
		break;
		case 56:
		while(h6<300){
			h6++;
		}
		Synth(0);
		break;
		case 57:
		while(h7<300){
			h7++;
		}
		Synth(0);
		break;
		case 48:
		while(h8<300){
			h8++;
		}
		Synth(0);
		break;
	}
}
//Audiolet Synth
function Synth(frequency){
	if(frequency == 0){
		
	}else{
	var audiolet = new Audiolet();
    var sine = new Sine(audiolet, frequency);
    var modulator = new Saw(audiolet, 2 * frequency);
   	modulatorMulAdd = new MulAdd(audiolet, frequency/2, frequency);
   	var gain = new Gain(audiolet);
   	var envelope = new PercussiveEnvelope(audiolet, 0, 0.2, 0.5, 
   			function(){
   				audiolet.scheduler.addRelative(0.5, envelope.remove.bind(this));
   			}.bind(envelope)
   		);
	
	modulator.connect(modulatorMulAdd);
	modulatorMulAdd.connect(sine);
	envelope.connect(gain, 0, 1);
	sine.connect(gain);
	gain.connect(audiolet.output);
	}
}
