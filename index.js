function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  //Challenge #1
  let BMI = weight/Math.pow(height*0.01, 2);
  alert(`your BMI is ${parseInt(BMI)}!`);

  //challenge #2
  if (BMI<18.5){ alert('underweight');
  }else if(BMI>=18.5 && BMI<24.9){ alert('Healthy weight');
  }else if(BMI>=25 && BMI<29.9){ alert('overweight');
  }else if(BMI>=30){ alert('above Obesity');
  }else { alert('your BMI is imaginary');
  }

  //challenge #3
  if (age>18 && age<25){
    if(BMI>=19 && BMI<25){alert('Healthy..by age');}
    //else if (BMI<19){alert('Low BMI..oh no!');}
    else{alert('not healthy..by age')}

  }else if(age>=25 && age<35){ 
    if(BMI>=20 && BMI<26){alert('Healthy..by age');}
    // else if (BMI<20){alert('Low BMI..oh no!');}
    else{alert('not Healthy..by age')}

  }else if(age>=35 && age<45){ 
    if(BMI>=21 && BMI<27){alert('Healthy..by age');}
    // else if (BMI<21){alert('Low BMI..oh no!');}
    else{alert('not Healthy..by age')}

  }else if(age>=45 && age<55){ 
    if(BMI>=22 && BMI<28){alert('Healthy..by age');}
    // else if (BMI<22){alert('Low BMI..oh no!');}
    else{alert('not Healthy..by age')}

  }else if(age>=55 && age<65){ 
    if(BMI>=23 && BMI<29){alert('Healthy..by age');}
    // else if (BMI<23){alert('Low BMI..oh no!');}
    else{alert('not Healthy..by age')}

  }else if (age>=65){
    if(BMI>=24 && BMI<30){alert('Healthy..by age');}
    // else if (BMI<24){alert('Low BMI..oh no!');}
    else{alert('not Healthy..by age')}
  }



}
