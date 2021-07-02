// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.
var ball_y = 0;
var ball_x = 0;
var hole_y = 400;
var hole_x = 800;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png" , function(Img) {
		hole_object = Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_object.set ({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_object);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png" , function(Img) {
		ball_object = Img;
		ball_object.scaleToHeight(50);
		ball_object.scaleToWidth(50);
		ball_object.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((ball_x == hole_x) && ball_y == hole_y) {
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML = "You Have Hit The Goal !!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	{

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
}

function up()
	{
		if(ball_y >= 0)
		{   ball_y = ball_y - 10;
			console.log("Ball x =" + ball_x + "Ball y" + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y <= 450)
		{   ball_y = ball_y + 10;
			console.log("Ball x =" + ball_x + "Ball y" + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >= 0)
		{   ball_x = ball_x - 10;
			console.log("Ball x =" + ball_x + "Ball y =" + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
			// Write a code to move ball left side.
	}

	function right()
	{
		if(ball_x <= 950)
		{
			ball_x = ball_x + 10;
			console.log("Ball x =" + ball_x + "Ball y =" + ball_y);
			canvas.remove(ball_object);
			new_image();
			
		}
		   // Write a code to move ball right side.
	}

