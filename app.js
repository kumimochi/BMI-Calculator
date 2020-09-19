function BMI() {
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;
  let bmi= weight/(height/100*height/100)
  let result = (bmi.toFixed(2));

  document.querySelector('.result').innerHTML="Your BMI is " + result;
}