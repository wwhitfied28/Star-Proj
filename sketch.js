

function start(){
 //t=new logo(300,100,0,"can1");
//l=new line(20,20,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="blue";
t.set1(350,250,0);
star(t,strAr[0],strAr[1],strAr[2],strAr[3]);

}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
