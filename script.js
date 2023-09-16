console.log("Hello world")
var count = 0
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var currentBackgroundImage = document.getElementById("div1");
    var imgElement = currentBackgroundImage.getElementsByTagName("img")[0];
    if(imgElement){
        ev.dataTransfer.setData("backgroundImage",imgElement.getAttribute("alt"))
        return;
    }
    ev.dataTransfer.setData("backgroundImage",imgElement)
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var imgElement = ev.dataTransfer.getData("backgroundImage");
    if(count>0){
        afterTopping(data,imgElement)
        if(count==1){
            createButton();
        }
        count++
        return;
    }
    document.getElementById("div1").appendChild(document.getElementById(data)) 
    document.getElementById("div1").getElementsByTagName("img")[0].className= "";
    // console.log(temp)
    onSelectFunction();
   
    count++;
}
function createButton(){
    var plateDiv = document.getElementById("plate");
    console.log(plateDiv)
    // Set the class and role attributes
    var newButton = document.createElement("button");
    newButton.className = "button-19";
    newButton.setAttribute("role", "button");

    // Set the onclick event handler
    newButton.onclick = function() {
        bakeIt();
    };

    // Set the button text
    newButton.textContent = "BAKE IT!";
    plateDiv.appendChild(newButton)
}

function onSelectFunction(){
    document.getElementById("base").innerHTML = ""
    // Create a new div element
    var toppingsDiv = document.createElement("div");
    toppingsDiv.id = "toppings";

    // Create a new heading element (h6)
    var toppingsHeading = document.createElement("h4");
    toppingsHeading.id = "toppingsHeading"
    toppingsHeading.textContent = "CHOOSE YOUR TOPPINGS";

    // Create three img elements


    // Creating the greenBellPepper div
    var greenPepperDiv = document.createElement("div");
    var greenPepperImg = document.createElement("img");
    greenPepperImg.id = "greenPepper";
    greenPepperImg.src = "./images/greenBellPepper.png";
    greenPepperImg.alt = "Green Pepper";
    greenPepperImg.draggable = true;
    greenPepperImg.ondragstart = function(event) { drag(event); };
    var greenPepperTittle = document.createElement("h3");
    greenPepperTittle.id = "CapsicumTopingDiv"
    greenPepperTittle.textContent = "Capsicum"
    greenPepperDiv.appendChild(greenPepperImg);
    greenPepperDiv.appendChild(greenPepperTittle);

    // Creating the onion div
    var onionDiv = document.createElement("div");
    var onionImg = document.createElement("img");
    onionImg.id = "onion";
    onionImg.src = "./images/onion.png";
    onionImg.alt = "onion";
    onionImg.draggable = true;
    onionImg.ondragstart = function(event) { drag(event); };
    var onionTitle = document.createElement("h3");
    onionTitle.id = "OnionTopingDiv";
    onionTitle.textContent = "Onion"
    onionDiv.appendChild(onionImg);
    onionDiv.appendChild(onionTitle);



    // Creating the mushroom div 
    var mushroomDiv = document.createElement("div");
    var mushroomImg = document.createElement("img");
    mushroomImg.id = "mushroom";
    mushroomImg.src = "./images/mushroom.png";
    mushroomImg.alt = "mushroom";
    mushroomImg.draggable = true;
    mushroomImg.ondragstart = function(event) { drag(event); };
    var mushroomTittle = document.createElement("h3");
    mushroomTittle.id = "MushroomTopingDiv";
    mushroomTittle.textContent = "Mushroom";
    mushroomDiv.appendChild(mushroomImg);
    mushroomDiv.appendChild(mushroomTittle);
    
    
    // Append the elements to the toppingsDiv
    var temp = document.createElement("div");
    temp.id = "container1"
    temp.appendChild(toppingsHeading);
    temp.appendChild(greenPepperDiv);
    temp.appendChild(onionDiv);
    temp.appendChild(mushroomDiv);
    
    toppingsDiv.appendChild(temp);

    
    // temp.appendChild(toppingsDiv)
    // Assuming you have a container element with id 'container' in your HTML
    var container = document.getElementById("base");
    container.appendChild(toppingsDiv);
}

function afterTopping(data,imgElement){
    document.getElementById("div1").innerHTML = ""
    var newImage = document.createElement("img");
    newImage.id = "baseImage";
    console.log(data);
    if(data==="greenPepper"){
        if(imgElement==="Multi Grain" || imgElement==="Whole Wheat"){
            // Only capsicum topping 
            newImage.src = "./toppings/capsicum.png"; // Provide the correct path to your image
            newImage.alt = "capsicum"; // Add an appropriate description
        }
        else if(imgElement=="onion"){
            // capsicum + onion toping 
            newImage.src = "./toppings/onionCapsicum.png";
            newImage.alt = "capsicumOnion"; //
        }else if(imgElement=="mushroom"){
            // capsicum + mushroom topping
            newImage.src = "./toppings/capsicumMushroom.png";
            newImage.alt = "capsicumMushroom";
        }else{
            // capsicum + onion + Mushroom
            newImage.src = "./toppings/capsicumOnionMushroom.png";
            newImage.alt = "capsicumOnionMushroom";
        }
    }else if(data ==="onion"){
        if(imgElement==="Multi Grain" || imgElement==="Whole Wheat"){
            // Only Onion topping 
            newImage.src = "./toppings/onion.png"; // Provide the correct path to your image
            newImage.alt = "onion"; // Add an appropriate description
        }
        else if(imgElement=="capsicum"){
            // onion + capsicum toping 
            newImage.src = "./toppings/onionCapsicum.png";
            newImage.alt = "onionCapsicum"; //
        }else if(imgElement=="mushroom"){
            // capsicum + Mushroom topping
            newImage.src = "./toppings/onionMushroom.png";
            newImage.alt = "onionMushroom";
        }else{
            //  onion + mushroom + capsicum
            newImage.src = "./toppings/capsicumOnionMushroom.png";
            newImage.alt = "capsicumOnionMushroom";
        }
    }else{
        if(imgElement==="Multi Grain" || imgElement==="Whole Wheat"){
            // Only Onion topping 
            newImage.src = "./toppings/mushroom.png"; // Provide the correct path to your image
            newImage.alt = "mushroom"; // Add an appropriate description
        }
        else if(imgElement=="capsicum"){
            // onion + capsicum toping 
            newImage.src = "./toppings/capsicumMushroom.png";
            newImage.alt = "mushroomCapsicum"; //
        }else if(imgElement=="onion"){
            // capsicum + mushroom topping
            newImage.src = "./toppings/onionMushroom.png";
            newImage.alt = "onionMushroom";
        }else{
            //  onion + mushroom + capsicum
            newImage.src = "./toppings/capsicumOnionMushroom.png";
            newImage.alt = "capsicumOnionMushroom";
        }
    }
    newImage.class = "pizzaTopping";
    newImage.width = 100; // Example width value
    newImage.height = 100; // Example width value

    // Step 3: Append to Parent Element
    var parentElement = document.getElementById("div1"); // Replace with your parent element's ID
    parentElement.appendChild(newImage);
}


function bakeIt(){
    var imageElement = document.getElementById("baseImage");
    var angle = 0; // Initial rotation angle
var duration = 2000; // 2 seconds in milliseconds
var interval = 100; // Rotation every 100 milliseconds (adjust as needed)

var rotationInterval = setInterval(function() {
    angle += 10; // Increment angle by 10 degrees
    imageElement.style.transform = "rotate(" + angle + "deg)";

    if (angle >= 360) {
        clearInterval(rotationInterval); // Stop rotating after 360 degrees
        // rotationEnded();
    }
}, interval);

setTimeout(function() {
    clearInterval(rotationInterval); // Stop after 4 seconds
    rotationEnded();
}, duration);
}
function rotationEnded() {
    // This function will be called when the rotation ends
    console.log("Rotation ended!");
    var plateDiv = document.getElementById("plate");
    var temp = document.createElement("h3");
    temp.textContent = "YOUR PIZZA IS READY!"
    temp.id = "bakeText"
    plateDiv.appendChild(temp);
    setTimeout(()=>{
        var elementToRemove = document.getElementById("bakeText");
    if (elementToRemove) {
        elementToRemove.parentNode.removeChild(elementToRemove);
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
    },2000)
}