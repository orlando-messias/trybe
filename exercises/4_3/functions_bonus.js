let num = 'XI'

let romanNumerals = [
    {
        roman: 'I',
        number: 1
    },
    {
        roman: 'V',
        number: 5
    },
    {
        roman: 'X',
        number: 10
    },
    {
        roman: 'L',
        number: 50
    },
    {
        roman: 'C',
        number: 100
    },
    {
        roman: 'D',
        number: 500
    },
    {
        roman: 'M',
        number: 1000
    }
]

let numerals = num.toUpperCase().split('')
let higherNumber = 0
console.log(numerals)

for(let i=0; i<numerals.length; i++){
    for(let key in romanNumerals){
        if(numerals[i] == romanNumerals[key].roman){
            if(romanNumerals[key].number > higherNumber)
                higherNumber = romanNumerals[key].number
                
        }
    }
    
}
console.log(higherNumber)