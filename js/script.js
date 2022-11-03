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
''
    document.getElementById("grade1").innerHTML = n1;
    document.getElementById("grade2").innerHTML = n2;
    document.getElementById("ovr").innerHTML = ovr;
    document.getElementById("situation").innerHTML = situation;
    document.getElementById("situation").style.color = color; 
    document.getElementById("name").innerHTML = name;
}

function verifySituation(){    
    // JS DO IMC
    let peso = parseFloat(prompt("Peso em kg?"));

    let altura = parseFloat(prompt("Altura em metros?"));
    let imc = peso / (altura * altura);
    let situation = "";
    let color = "";
    if (imc < 17) {
    situation = "Muito abaixo do peso";
    color = "red";
    } else if (imc >= 17 && imc < 18.50) {
    situation = "Abaixo do peso";
    color = "orange";
    } else if (imc >= 18.50 && imc < 25) {
    situation = "Normal";
    color = "green";
    } else if (imc >= 25 && imc < 30) {
    situation = "Excesso de peso";
    color = "yellow";
    } else if (imc >= 30 && imc < 35) {
    situation = "Obesidade I";
    color = "orange";
    } else if (imc >= 35 && imc < 40) {
    situation = "Obesidade II";
    color = "purple";
    } else if (imc >= 40) {
    situation = "Obesidade III";
    color = "red";
    }

    document.getElementById("pesoKg").innerHTML = peso;
    document.getElementById("alturaMetros").innerHTML = altura;
    document.getElementById("imcTotal").innerHTML = imc;
    document.getElementById("situation").innerHTML = situation;
    document.getElementById("situation").style.color = color;
}

    // JS DO APPENDCHILD
    function myFunction() {
    
    const node = document.createElement("li");
    
    const textnode = document.createTextNode("Abacaxi");
    
    node.appendChild(textnode);
    
    document.getElementById("myList").appendChild(node);
}