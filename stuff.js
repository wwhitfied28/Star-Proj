

function star(t,num,len,num2,len2){
	for(let j=1;j<=num;j=j+1){
		t.fd(len);star1(t,num2,len2);t.bk(len);t.rt(360/num);
	}
	}
	
function star1(t,num,len){
	for(let j=1;j<=num;j=j+1){
		t.fd(len);t.bk(len);t.rt(360/num);
	}
	}
	
	function newStar(){
	str=document.getElementById("tex1").value;
	strAr=str.split(',');
	}
	
function poly(t,n,len){
	for(let j=1;j<=n;j=j+1){
		t.fd(len);t.rt(360/n);
	}
}
	
function polyAr(t,n,len){
	for(let j=0;j<n;j=j+1){
		t.fd(len);x[j]=t.xpos();
		y[j]=t.ypos();t.rt(360/n);
	}
    for(let k=0;k<n;k++){
    for(let j=0;j<n;j++){
		lAr.drawLine(x[k],y[k],x[j],y[j]);
	}
	}
}

function lineAr(){
	tur.set1(200,400,-90);
	polyAr(tur,12,100);
}

	function lines(){
		l=new line(50,50,"can1");
		//tur=new logo(300,300,0,"can1");//locally defined
		for(let j=1;j<21;j=j+1){
		l.drawLine(50,50,300,30*j);
		}
		tur.lt(90);
		for(let j=3;j<16;j=j+1){
		poly(tur,j,100);//we r embedding for statements
		}
	}
	
function lineDesign(){
tur.set1(300,300,-90,"can1");
for(let j=0;j<10;j=j+1){
tur.fd(20);x[j]=tur.xpos();y[j]=tur.ypos();
}	
tur.bk(200);tur.rt(90);
for(let j=10;j<20;j=j+1){
tur.fd(20);x[j]=tur.xpos();y[j]=tur.ypos();
}
for(let j=0;j<10;j=j+1){
	lAr.drawLine(x[9-j],y[9-j],x[10+j],y[10+j]);
}
}