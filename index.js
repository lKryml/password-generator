const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtn = document.getElementById("generate-btn")
const output1 = document.getElementById("output1")
const output2 = document.getElementById("output2")
const toggle = document.getElementById("toggle");
const icon = document.getElementById("icon")
let range = Math.floor(Math.random() * (20 - 8) + 8);

function generatePass() {
let password = ""
for (let i = 0; i < range; i++){
    password += characters[Math.floor(Math.random()*70)];
}
return password;
}

generateBtn.addEventListener("click", () => {
    let pass1 = generatePass();
    let pass2 = generatePass();
    output1.value = pass1;
    output2.value = pass2;
})

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        icon.src = "./moon.png";

    } else {
         icon.src = "./sun.png";
    }
})
