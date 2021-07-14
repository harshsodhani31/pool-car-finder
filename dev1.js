var x1=document.getElementById("Tag1");
var x2=document.getElementById("Tag2");
var x3=document.getElementById("Tag3");
var x4=document.getElementById("Tag4");
 document.getElementById("tag1").addEventListener("click",function(){
    
    x1.style.display = "flex";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";

    document.getElementById("tag1").style.backgroundColor="black";
    document.getElementById("tag2").style.backgroundColor="white";
    document.getElementById("tag3").style.backgroundColor="white";
    document.getElementById("tag4").style.backgroundColor="white";
});
 document.getElementById("tag2").addEventListener("click",function(){
    x1.style.display = "none";
    x2.style.display = "flex";
    x3.style.display = "none";
    x4.style.display = "none";
    
    document.getElementById("tag1").style.backgroundColor="white";
    document.getElementById("tag2").style.backgroundColor="black";
    document.getElementById("tag3").style.backgroundColor="white";
    document.getElementById("tag4").style.backgroundColor="white";
});
 document.getElementById("tag3").addEventListener("click",function(){
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "flex";
    x4.style.display = "none";
    
    document.getElementById("tag1").style.backgroundColor="white";
    document.getElementById("tag2").style.backgroundColor="white";
    document.getElementById("tag3").style.backgroundColor="black";
    document.getElementById("tag4").style.backgroundColor="white";
});
 document.getElementById("tag4").addEventListener("click",function(){
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "flex";
    
    document.getElementById("tag1").style.backgroundColor="white";
    document.getElementById("tag2").style.backgroundColor="white";
    document.getElementById("tag3").style.backgroundColor="white";
    document.getElementById("tag4").style.backgroundColor="black";
});