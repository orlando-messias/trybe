// Calculate taxes

let grossSalary = 4000;
let baseSalary = 0; netSalary = 0; inss = 0; ir = 0;

if((grossSalary > 0) && (grossSalary <= 1556.94))
    inss = grossSalary * 0.08;
else if((grossSalary >= 1556.95) && (grossSalary <= 2594.92))
    inss = grossSalary * 0.09;
else if((grossSalary >= 2594.93) && (grossSalary <= 5189.82))
    inss = grossSalary * 0.11;
else
    inss = 570.88;

baseSalary = grossSalary - inss;

if((baseSalary > 0) && (baseSalary <= 1903.98))
    ir = 0;
else if((baseSalary >= 1903.99) && (baseSalary <= 2826.65))
    ir = (baseSalary * 0.075) - 142.8;
else if((baseSalary >= 2826.66) && (baseSalary <= 3751.05))
    ir = (baseSalary * 0.15) - 354.8;
else if((baseSalary >= 3751.06) && (baseSalary <= 4664.68))
    ir = (baseSalary * 0.225) - 636.13;
else if(baseSalary > 4664.68)
    ir = (baseSalary * 0.275) - 869.36;

netSalary = baseSalary - ir;
console.log('Net Salary is R$', netSalary)


