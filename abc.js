function first(){
    var Person= new Object();
    Person.name="pavan";
    Person.age=17;
    return Person;
}
var bg=first();
document.write("name: "+bg.name+"<br><br>"+"aged: "+bg.age+"<br><br>");

function first11(){
    var Person= {};
    Person.name="adi";
    Person.age=17;
    return Person;
}
var bg=first11();
document.write("name: "+bg.name+"<br><br>"+"aged: "+bg.age+"<br><br>");

function first2(){
    var Person={
        name:"manju",
        age:56
    }
    return Person;
}
var gouri=first2();
document.write("name: "+gouri.name+"<br><br>"+"aged :"+gouri.age+"<br><br>");

function second(){
    this.name="javali",
    this.age=23
}
var df=new second();
document.write("name: "+df.name+"<br><br>"+"aged:"+df.age+"<br><br>");

var Animal={
    type:"enter the server",
    displayType:function(){alert("yes:  "+this.type);}
}
var dog=Object.create(Animal);
dog.displayType();
