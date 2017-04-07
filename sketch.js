var boxSize = 40;
var rows, cols;
var grid = [];

function setup() {
	createCanvas(401, 401);
	var rows = floor(height/boxSize);
	var cols = floor(width/boxSize); 

	for(var i = 0; i<rows; i++){
		for(var j = 0; j<cols; j++){
			var cell = new Cell(boxSize, createVector(j,i));
			cell.init();
			grid.push(cell);
		}
	}

}

function draw() {
  background(0, 0, 0);
  stroke(255);
strokeWeight(1);
  for (var i = grid.length - 1; i >= 0; i--) {
  	grid[i].show();
  };


}

function Cell (_w, _pos){
	this.size = _w;
	this.pos = _pos;
	this.walls = [true,true,true,true]

	this.init= function (){

	}

	this.show = function (){
		push();
		//noFill();
		stroke(255);
		strokeWeight(1);
		translate(this.pos.x*this.size, this.pos.y*this.size)
		if(this.walls[0]){
			line(0, 0, 0, this.size);//top
		}
		if(this.walls[1]){
			line(this.size, 0, this.size, this.size);//right
		}
		if(this.walls[2]){
			line(0, this.size, this.size, this.size);//bottom
		}
		if(this.walls[3]){
			line(0, 0, 0, this.size);//left
		}
		//rect(0,0, this.size, this.size);
		pop();
	}

}