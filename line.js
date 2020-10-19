class line{

constructor(xs,ys,str){
this.xs=xs;this.ys=ys;this.xf=0;this.yf=0;
this.can=document.getElementById(str);
this.c=this.can.getContext("2d");this.c.beginPath();
}

drawLine(xs,ys,xf,yf){
this.xs=xs;this.ys=ys;
this.xf=xf;this.yf=yf;
this.c.moveTo(this.xs,this.ys);
  this.c.lineTo(this.xf,this.yf);
  this.c.stroke();
}

}