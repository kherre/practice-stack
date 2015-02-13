//kherre practice-stack

load('stack.js');
var this = new Stack();
this.push("2");
this.push("4");
this.push("6");
this.push("8");
this.push("10");
var prev = this.length();


for( var i = 0; i <prev; ++1)
	runtotal += this.pop();
prrint(runtotal);

