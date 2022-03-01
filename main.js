canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d")

greencar_width= 75;
greencar_height= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

x= 5;
y= 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground();
	background_imgTag.src= background_image

	background_imgTag = new Image();
	background_imgTag.onload = uploadgreencar();
	background_imgTag.src= greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(background_imgTag, x, y, greencar_width, greencar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(y >=  0){
		y = y-10
		console.log("when pressed x = " + x +"when y pressed = "+y)
	uploadBackground()
	uploadgreencar()
	}
}

function down()
{
	if(y <=  700){
		y = y + 10
		console.log("when pressed x = " + x +"when y pressed = "+y)
	uploadBackground()
	uploadgreencar()
	}
}

function left()
{
	if(x >=  0){
		x = x-10
		console.log("when pressed x = " + x +"when y pressed = "+y)
	uploadBackground()
	uploadgreencar()
	}
}

function right()
{
	if(x <=  0){
		x = x+10
		console.log("when pressed x = " + x +"when y pressed = "+y)
	uploadBackground()
	uploadgreencar()
	}
}
