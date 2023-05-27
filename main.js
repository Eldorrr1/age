var age = prompt("Yoshingizni kiriting");







if(age >= 0 && age <= 18 ){
    console.log("Yoshsiz. O'qishingiz kerak");
  } else if(age <= 18 && age <=50){
    console.log('Ishlashingiz kerak');
  } else if(age >= 50 && age <= 59){
    console.log('Yaqinda pensiyaga chiqasiz');
  } else if (age >= 59 && age <=150){
    console.log("Pensionerga o'xshaysiz, hali tirik bo'lsangiz");
  } else {
    console.log("Nimadir noto'g'ri ketib qoldi");
  }
  alert("Natijani ko'rish uchun bosing")