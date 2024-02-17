document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var results = document.getElementById("results");
  var status;
  var bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height == "" && weight == "") {
    results.innerHTML = "Please enter valid height and weight!";
  } else if (height == "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height!";
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight!";
  } else {
    if (bmi < 18.6) {
      status = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      status = "Normal";
    } else if (24.9 < bmi) {
      status = "Overweight";
    }
    results.innerHTML = "BMI = " + bmi + " kg/m<sup>2</sup> " + "(" + status + ")";
  }
});
