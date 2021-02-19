function square(a){
    
    return a*a;
}


square(5);
document.write("square of number:"+square(5)+"<br><br>");


var num=function(a){
    return a*a;
}
document.write("square of number:"+num(9)+"<br><br>");


(function(c){
    document.write("square of number:"+ c*c+"<br><br>");
})(8);
