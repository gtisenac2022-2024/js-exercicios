//grades prompt function

function verifySituationPrompt(){
    //JS DAS NOTAS:
    let name = prompt ("Nome do aluno:");
    
    let n1 = parseFloat(prompt("Nota 1?"));
    let n2 = parseFloat(prompt("Nota 2?"));
    let situation = "";

    let ovr = (n1 + n2) / 2;
    let color = "";


    if (ovr >= 6) {
        situation = ' Aprovado';
        color = 'blue';
    } else {
        if (ovr >= 2 && ovr < 6) { 
            situation = ' Exame Final';
            color = 'orange';
        } else {
            situation = ' Reprovado';
            color = 'red';
        }
    }

    document.getElementById("grade1").innerHTML = n1;
    document.getElementById("grade2").innerHTML = n2;
    document.getElementById("ovr").innerHTML = ovr;
    document.getElementById("situation").innerHTML = situation;
    document.getElementById("situation").style.color = color; 
    document.getElementById("name").innerHTML = name;
}

//grades input function
function verifySituationInput(){
    let nameInpt = document.getElementById("nameInput").value;
    let n1 = parseFloat(document.getElementById("gradeInput1").value);
    let n2 = parseFloat(document.getElementById("gradeInput2").value);
    let ovr = (n1 + n2) / 2;

    let situation = "";
    let color = "";

    if (ovr >= 6) {
        situation = 'Aprovado';
        color = 'blue';
    } else {
        if (ovr >= 2 && ovr < 6) {
            situation = 'Exame Final';
            color = 'orange';
        } else {
            situation = 'Reprovado';
            color = 'red';
        }
    }
   
    document.getElementById("nameInputT").innerHTML = nameInpt;
    document.getElementById("gradeInput1T").innerHTML = n1;
    document.getElementById("gradeInput2T").innerHTML = n2;
    document.getElementById("ovrInputT").innerHTML = ovr;
    document.getElementById("situationInput").innerHTML = situation;
    document.getElementById("situationInput").style.color = color;
}

//calculate imc function
function calculateImc(){
    let weight = parseFloat(prompt("Informe seu peso:"));
    let height = parseFloat(prompt("Informe sua altura:"));
    let situation = "";
    let color = "";
    let imc = weight / (height * height);
    imc = imc.toFixed(1);

    if(imc < 17){
        situation = 'Muito abaixo do peso.';
        color = 'red';
    } else if(imc >= 17 && imc < 18.49){
        situation = 'Abaixo do peso.';
        color = 'orange';
        
    } else if(imc >= 17 && imc <= 24.99){
        situation = 'Peso normal';
        color = 'green';
        
    } else if(imc >= 25 && imc <= 29.99){
        situation = 'Excesso de Peso'
        color = 'orange';
        
    } else if(imc >= 30 && imc <= 34.99){
        situation = 'Obesidade I'
        color = 'red';
        
    } else if(imc >= 35 && imc <= 39.99){
        situation = 'Obesidade II'
        color = 'red';

    } else if(imc >= 40 ){
        situation = 'Obesidade III'
        color = 'red';
    }
    console.log(imc);
    console.log(weight);
    console.log(height);
    console.log(situation);
    
    document.getElementById("weight").innerHTML = weight;
    document.getElementById("height").innerHTML = height;
    document.getElementById("imcTotal").innerHTML = imc;
    document.getElementById("situationImc").innerHTML = situation;
    document.getElementById("situationImc").style.color = color;
}

//append list items function
function append(){
    
    let entrada = document.getElementById("entrada").value;
    //create list element
    let node = document.createElement("li");
    //element var
    let textnode = document.createTextNode(entrada);
    
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);

    //change created element color
    let color = "";
    color = document.querySelector('input[name="color"]:checked').value;
    node.style.color = color;


}


//call grade prompt function
document.getElementById("gradebtn").addEventListener("click", verifySituationPrompt);

//call grade input function
document.getElementById("gradeinputbtn").addEventListener("click", verifySituationInput);

//call imc function
document.getElementById("imcbtn").addEventListener("click", calculateImc);

//call append function
document.getElementById("appendbtn").addEventListener("click", append);

