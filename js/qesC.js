function showSteps() {
  var table = document.getElementById("solvingSteps").style;
  var btn = document.getElementById("steps");
  if (table.display === "inline-block") {
    table.display = "none";
    btn.innerHTML = "იხილეთ ამოხსნა ნაბიჯ-ნაბიჯ";
    btn.style.backgroundColor = "white";
    btn.style.color = "rgba(0, 255, 213, 0.808)";
    btn.style.boxShadow = "2px 2px 5px rgba(59, 57, 57, 0)";
    btn.style.padding = "0 1%";
    btn.style.fontSize = "2em";
    document.getElementById("fulleqntt").style.display = "none";
  } else {
    table.display = "inline-block";
    btn.innerHTML = "ჩახურეთ დეტალური ამოხსნა";
    btn.style.backgroundColor = "rgba(0, 255, 213, 0.808)";
    btn.style.color = "white";
    btn.style.boxShadow = "2px 2px 5px rgba(59, 57, 57, 0.4)";
    btn.style.padding = "0 3%";
    btn.style.fontSize = "2.3em";
  }
}
function initSteps() {
  if (document.getElementById("answer").innerHTML !== "") {
    document.getElementById("steps").style.display = "inline-block";
  } else {
    document.getElementById("steps").style.display = "none";
  }
  var a = input1.value;
  var b = input2.value;
  var c = input3.value;
  var bSq = Math.pow(b,2);
  var acNume = 4 * a * c;
  var deno = a * 2;
  var bac = bSq - acNume;
  var bacSqrt = Math.round(Math.sqrt(bac)*100)/100;
  var numeOne = -b + bacSqrt;
  var numeTwo = -b - bacSqrt;
  var xOne = numeOne/deno;
  var xTwo = numeTwo/deno;

  if (input2.value === "") {
    var b = 0;
  }
  if (input3.value === "") {
    var c = 0;
  }
  document.getElementById("firstVal").innerHTML = a;
  document.getElementById("secondVal").innerHTML = "+" + b;
  document.getElementById("thirdVal").innerHTML = "+" + c;
  if (b < 0) {
    document.getElementById("secondVal").innerHTML = b;
  }
  if (c < 0) {
    document.getElementById("thirdVal").innerHTML = c;
  }
  if (a == 1) {
    document.getElementById("firstVal").innerHTML = "";
  }
  if (a == 0) {
    document.getElementById("fV-container").innerHTML = "";
  }
  if (a == -1) {
    document.getElementById("firstVal").innerHTML = "-";
  }
  if (b == 1) {
    document.getElementById("secondVal").innerHTML = "+";
  }
  if (b == -1) {
    document.getElementById("secondVal").innerHTML = "-";
  }
  
  document.getElementById("ნაბიჯი3").innerHTML = "a = " + a + ", b = " + b + ", c = " + c;
  document.getElementById("ნაბიჯი4").innerHTML = "-(" + b + ") &#177&#8730(" + b + ")<sup>2</sup>-4(" + a + ")(" + c + ")<hr>2(" + a + ")";
  document.getElementById("ნაბიჯი5").innerHTML = "-" + b + "<span>&#177&#8730</span>" + bSq + "-" + acNume + "<hr>" + deno;
  if (acNume < 0) {
    document.getElementById("ნაბიჯი5").innerHTML = "-" + b + "<span>&#177&#8730</span>" + bSq + "+" + (acNume * -1) + "<hr>" + deno;
  }
  document.getElementById("ნაბიჯი6").innerHTML = "-" + b + "<span>&#177&#8730</span>" + bac + "<hr>" + deno;
  document.getElementById("ნაბიჯი7").innerHTML = "-" + b + "<span>&#177</span>" + bacSqrt + "<hr>" + deno;
  document.getElementById("ნაბიჯი8a").innerHTML = "-" + b + "+" + bacSqrt + "<hr>" + deno;
  document.getElementById("ნაბიჯი8b").innerHTML = "-" + b + "-" + bacSqrt + "<hr>" + deno;
  document.getElementById("ნაბიჯი9a").innerHTML = Math.round(numeOne*100)/100 + "<hr>" + deno;
  document.getElementById("ნაბიჯი9b").innerHTML = Math.round(numeTwo*100)/100 + "<hr>" + deno;
  document.getElementById("ნაბიჯი10a").innerHTML = Math.round(xOne*100)/100;
  document.getElementById("ნაბიჯი10b").innerHTML = Math.round(xTwo*100)/100;
}
function changeContent1() {
  document.getElementById("refresh").innerHTML = "&#8634";
}
function changeContent2() {
  document.getElementById("refresh").innerHTML = "&#8635";
}
function showTT() {
  document.getElementById("fulleqntt").style.animationName = "displayTT";
  document.getElementById("fulleqntt").style.display = "block";
  document.getElementById("fulleqntt").style.width = "0%";
  document.getElementById("fulleqntt").style.animationDuration = "6000ms";
}
function hideTT() {
  document.getElementById("fulleqntt").style.animationName = "";
}