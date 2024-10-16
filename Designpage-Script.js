let count = 0;

document.getElementById("subtract").onclick = function(){
    count -=  1;
    document.getElementById("counter").innerHTML = count;

    document.getElementById("itemSelected").innerHTML = "125.00 x " + count + " "; 

    document.getElementById("counter").innerHTML = count;

    document.getElementById("itemTotal").innerHTML = count * 125 + ".00";

    if(count < 0){
       return document.getElementById("counter").innerHTML = (count = 0);

    }
    
}

document.getElementById("add").onclick = function(){
    count +=  1;
    document.getElementById("counter").innerHTML = count;

    document.getElementById("itemSelected").innerHTML = "125.00 x " + count + " "; 

    document.getElementById("counter").innerHTML = count;

    document.getElementById("itemTotal").innerHTML = count * 125  + ".00";


    if(count < 0){
        return document.getElementById("counter").innerHTML = (count = 0);
    }
}



function displayImg1Change(){
    document.getElementById("DisplayImg").src = "images/image-product-1.jpg";
}

function displayImg2Change(){
    document.getElementById("DisplayImg").src = "images/image-product-2.jpg";
}

function displayImg3Change(){
    document.getElementById("DisplayImg").src = "images/image-product-3.jpg";
}

function displayImg4Change(){
    document.getElementById("DisplayImg").src = "images/image-product-4.jpg";
}

function dropboxDisplay(){
  document.getElementById("showdisplay").style.display= "block";

  setTimeout(function(){
    document.getElementById("showdisplay").style.display= "none";
},5000);
}

function ClearSelecteditem(){
    document.getElementById("dropIteminfo").innerHTML = "Box is Empty";
}



