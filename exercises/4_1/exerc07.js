
let gradePercentage = 65;
let perceentage = '';

if(gradePercentage < 0 || gradePercentage > 100)
    perceentage = 'Error';
else if(gradePercentage >= 90)
    perceentage = 'A';
else if(gradePercentage >=80)
    perceentage = 'B';
else if(gradePercentage >=70)
    perceentage = 'C';
else if(gradePercentage >=60)
    perceentage = 'D';
else if(gradePercentage >=50)
    perceentage = 'E';
else
    perceentage = 'F';

if(perceentage != 'Error')
    console.log("Student's Grade -> " + perceentage)
else
    console.log("Error: Type a different Grade Percentage")