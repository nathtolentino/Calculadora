function calculateIMC() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    
    if (weight === "" || height === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var bmi = weight / ((height / 100) ** 2);
    var result = "";

    if (bmi < 18.5) {
        result = "Abaixo do peso: Pessoas que estão abaixo do peso recomendável podem apresentar quadros de desnutrição. Além disso, é importante verificar se não há alguma patologia por trás do peso baixo, principalmente se o emagrecimento aconteceu de maneira repentina.";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Peso normal";
    } else if (bmi >= 25 && bmi < 30) {
        result = "Sobrepeso: O sobrepeso envolve muito mais do que fatores estéticos. Por exemplo, se a circunferência abdominal for muito elevada, os riscos para o surgimento de doenças metabólicas são maiores. Além disso, se os cuidados não forem tomados para reduzir o sobrepeso, é possível passar para um quadro de obesidade.";
    } else {
        result = "Obesidade: Como a obesidade é provocada por uma ingestão de energia que supera o gasto do organismo, a forma mais simples de tratamento é a adoção de um estilo de vida mais saudável, com menor ingestão de calorias e aumento das atividades físicas. Essa mudança não só provoca redução de peso como facilita sua manutenção.";
    }

    document.getElementById("result").innerHTML = "Seu IMC é: " + bmi.toFixed(2) + " - " + result;
}
