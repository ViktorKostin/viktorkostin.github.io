function Input() {
	self=this;

	this.rightKey=false;
	this.leftKey=false;
	this.upKey=false;
	this.zoomIn=false;
	this.keyDown=false;
	this.zoomOut=false;

	function handleKeyPress(e, condition) {
	if(e.keyCode==39) {
		self.rightKey=condition;
		console.log(e);
	}
	if (e.keyCode==37) {
		self.leftKey=condition;
	}
	if (e.keyCode==38) {
		self.upKey=condition;
	}
	if (e.keyCode==90) {
		self.zoomIn=condition;
	}
	if (e.keyCode==40) {
		self.keyDown=condition;
	}
	if (e.keyCode==88) {
		self.zoomOut=condition;
	}

}

	document.addEventListener('keydown', function(e){handleKeyPress(e, true)})
	document.addEventListener('keyup', function(e){handleKeyPress(e, false)})
}