var weight = document.getElementById("weight");
var height = document.getElementById("height");
var calc = document.getElementById("calculate");
var avg = 0;

var yourbmi = document.getElementById("yourbmi");
var yourtype = document.getElementById("yourtype");
var conc = document.getElementById("conc");
var desc = document.getElementById("desc");

out.style.display = "none";

function underweight(avg){
    out.style.display = "inline";

    yourbmi.innerHTML = (Math.round(avg * 100) / 100).toFixed(2);
    yourtype.innerHTML = "Underweight";
    conc.style.backgroundColor = "rgb(81, 132, 243)";
    desc.innerHTML = "Being underweight could be a sign you're not eating enough or you may be ill. If you're underweight, a GP can help.";
    
}


function normal(avg){
    out.style.display = "inline";

    yourbmi.innerHTML = (Math.round(avg * 100) / 100).toFixed(2);
    yourtype.innerHTML = "Normal";
    conc.style.backgroundColor = "rgb(81, 243, 135)";
    desc.innerHTML = "Keep up the good work! For tips on maintaining a healthy weight, check out the food and diet and fitness sections.";

}

function overweight(avg){
    out.style.display = "inline";

    yourbmi.innerHTML = (Math.round(avg * 100) / 100).toFixed(2);
    yourtype.innerHTML = "Overweight";
    conc.style.backgroundColor = "rgb(255, 202, 56)";
    desc.innerHTML = "The best way to lose weight if you're overweight is through a combination of diet and exercise.";
}


function obese(avg){
    out.style.display = "inline";

    yourbmi.innerHTML = (Math.round(avg * 100) / 100).toFixed(2);
    yourtype.innerHTML = "Obese";
    conc.style.backgroundColor = "rgb(243, 81, 81)";
    desc.innerHTML = "The best way to lose weight if you're obese is through a combination of diet and exercise, and, in some cases, medicines. See a GP for help and advice.";

}

calc.addEventListener('click', function(){
    cm = parseFloat(height.value) * parseFloat(height.value);
    kg  = parseFloat(weight.value)
    var avg = kg / cm;
    console.log(avg);
    if( avg < 18.5)
        underweight(avg);
    else if( avg >= 18.5 && avg < 25) 
        normal(avg);
    else if (avg >= 25 && avg < 30)
        overweight(avg);
    else
        obese(avg);
});
