var nameIndex = 0;
var intIndex= 0;
const nameText = 'Akashneel?';
const intText= "Here's what you need to know"
var nameSpan, intTextDiv;
const nameSpeed = 80;

function init(){
    nameSpan= document.getElementById("name-span");
    intTextDiv= document.getElementById("intermidiate-text")
    nameWriter();
    setTimeout(removeName, 2850);
    setTimeout(intermediateWriter, 1400);
}

function nameWriter() {
  if (nameIndex < nameText.length) {
    nameSpan.innerHTML= nameText.substring(0,nameIndex);
    nameSpan.innerHTML += '_';
    nameIndex++;
    setTimeout(nameWriter, nameSpeed);
  }
  else{
    nameSpan.innerHTML=nameText;
  }
}

function removeName(){
  document.getElementById("name-div").style.display= "none";
}

function intermediateWriter(){
  if (intIndex < intText.length) {
    intTextDiv.innerHTML= intText.substring(0,intIndex);
    intTextDiv.innerHTML += '_';
    intIndex++;
    setTimeout(intermediateWriter, 80);
  }
  else{
    intTextDiv.innerHTML=intText;
  }
}