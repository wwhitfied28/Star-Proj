class logo{

constructor(x,y,as,str){this.xs=x;this.ys=y;this.xf=x;this.yf=y;this.angle=as;this.can=document.getElementById(str);
this.c=this.can.getContext("2d");this.c.beginPath();}

  fd(len) {this.xf=this.xs+len*Math.cos(Math.PI*this.angle/180)
  this.yf=this.ys+len*Math.sin(Math.PI*this.angle/180)
  this.c.moveTo(this.xs,this.ys);
  this.c.lineTo(this.xf,this.yf);
  this.c.stroke();
  this.xs=this.xf;this.ys=this.yf;
  }

 bk(len) {this.xf=this.xs-len*Math.cos(Math.PI*this.angle/180)
  this.yf=this.ys-len*Math.sin(Math.PI*this.angle/180)
  this.c.moveTo(this.xs,this.ys);
  this.c.lineTo(this.xf,this.yf);
  this.c.stroke();
  this.xs=this.xf;this.ys=this.yf;
  }
 
 line(xst,yst,xfin,yfin){
  this.c.moveTo(xst,yst);
  this.c.lineTo(xfin,yfin);
  this.c.stroke();
   }
 
 set1(x,y, an){this.xs=x;this.ys=y;this.angle=an;}

 rt(an){this.angle=this.angle+an;
 if(this.angle<0){this.angle=this.angle%360+360;}
	  if(this.angle>=360){this.angle=this.angle%360;}
	 }
 
 lt(an){this.angle=this.angle-an;
 if(this.angle<0){this.angle=this.angle%360+360;}
	  if(this.angle>=360){this.angle=this.angle%360;}
	 }

 xpos(){return this.xf;}
 ypos(){return this.yf;}
 dir(){return this.angle;}

sketch(l,a,senten){
let news="";//sentence="A+A--A+A";
  for(let j=0;j<senten.length;j++){
    news=senten.charAt(j);
    switch(news){
      case "A":this.fd(l);break;
      case "B":this.fd(l);break;
      case "+":this.lt(a);break;
      case "-":this.rt(a);break;
}
  }}
  
poly(len,n){
for(let j=0;j<n;j++){
	this.fd(len);this.rt(360/n);
}}	
  
}
