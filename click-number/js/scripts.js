let btnNum = 30;
let colorDeg = 0;
let intervalId = null;

let params = new URLSearchParams(document.location.search);
if (params.get("num") > 0) {
	btnNum = params.get("num");
}

for (var num=btnNum;num>0;num--) {
	var elm = document.createElement("button");
	elm.innerHTML = num;
	elm.setAttribute("id", num); 
	elm.setAttribute("class", "circle"); 
	var function_name = "remove(" + num + ")" 
	elm.setAttribute("onclick", function_name);
	document.getElementById("main").appendChild(elm);

	var left_pos = 10;
	var top_pos = 100;
	var size = 60;
	var color = 0;
	var speed = 1;
	var direction = 0;

	left_pos = left_pos + Math.floor(Math.random() * 400);
	top_pos = top_pos + Math.floor(Math.random() * 400);
	size = size +  Math.floor(Math.random() * 100);
	color = color + Math.floor(Math.random() * 360);
	speed = speed + Math.floor(Math.random() * 9);
	direction = direction + Math.floor(Math.random() * 360);

	document.getElementById(num).style.left = left_pos + "px" ;
	document.getElementById(num).style.top = top_pos + "px" ;
	document.getElementById(num).style.width = size + "px";
	document.getElementById(num).style.height = size + "px";
	document.getElementById(num).style.backgroundColor = `hsl(${color} 100% 50%)`;
	document.getElementById(num).dataset.speed = speed;
	document.getElementById(num).dataset.direction = direction;
}

var next = 1;
document.remove = function (id) {
	if (id === next) {
		document.getElementById("main").removeChild(document.getElementById(id));
		next = next + 1;
	}
    if (id == btnNum) {
        intervalId = setInterval(function() {
            document.body.style.backgroundColor = `hsl(${colorDeg}, 100%, 50%)`;
            colorDeg = (colorDeg + 1) % 360;
        }, 1)
    } 
}

let colorDeg2 = 0;
setInterval(function() {
	for (var num=btnNum;num>0;num--) {
		if (!document.getElementById(num)) {
			break;
		}
		let speed = document.getElementById(num).dataset.speed;
		let direction = document.getElementById(num).dataset.direction;
		let size = parseFloat(document.getElementById(num).style.width);

		let newX = parseFloat(document.getElementById(num).style.left) + Math.cos((direction * Math.PI) / 180) * speed;
		let newY = parseFloat(document.getElementById(num).style.top) + Math.sin((direction * Math.PI) / 180) * speed;

		if (newX < 0 | newX > window.innerWidth - size) {
			document.getElementById(num).dataset.direction = 180 - direction;
			newX = parseFloat(document.getElementById(num).style.left) + Math.cos((direction * Math.PI) / 180) * speed;
			color = Math.floor(Math.random() * 360);
			document.getElementById(num).style.backgroundColor = `hsl(${color} 100% 50%)`;
		}
		if (newY < 0 | newY > window.innerHeight - size) {
			document.getElementById(num).dataset.direction = -1 * direction;
			newY = parseFloat(document.getElementById(num).style.top) + Math.sin((direction * Math.PI) / 180) * speed;
			color = Math.floor(Math.random() * 360);
			document.getElementById(num).style.backgroundColor = `hsl(${color} 100% 50%)`;
		}

		document.getElementById(num).style.left = newX + "px" ;
		document.getElementById(num).style.top = newY + "px" ;
	}
}, 20)