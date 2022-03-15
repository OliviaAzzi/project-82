event_mouse="empty";
var canvas=document.getElementById("myCanvas");
canvas.addEventListener("mousedown",mouse1);
ctx=canvas.getContext("2d");
function mouse1(e){
    event_mouse="mouse_down";
}
canvas.addEventListener("mousemove",mouse2);
function mouse2(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if (event_mouse=="mouse_down") {
        ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.moveTo(lastx,lasty);
ctx.lineTo(currentx,currenty);
ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
canvas.addEventListener("mouseup",mouse3);
function mouse3(e){
    event_mouse="mouse_up";
}
canvas.addEventListener("mouseleave",mouse4);
function mouse4(e){
    event_mouse="mouse_leave";
}