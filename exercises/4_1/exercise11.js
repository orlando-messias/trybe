let grossSalary = 3000;
let baseSalary;
let inss;
let ir;

if((grossSalary > 0) && (grossSalary <= 1556.94))
    inss = grossSalary * 0.08;
else if((grossSalary >= 1556.95) && (grossSalary <= 2594.92))
    inss = grossSalary * 0.09;
else if((grossSalary >= 2594.93) && (grossSalary <= 5189.82))
    inss = grossSalary * 0.11;
else
    inss = 570.88;

