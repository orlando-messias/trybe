const sumAll = () => {
    return new Promise((resolve, reject) => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push( Math.round(Math.random() * 50) ** 2);
        }
        const sum = arr.reduce((total, num) => total + num);
        sum < 8000 ? resolve(sum) : reject('É mais de 8000! Essa promise deve estar quebrada!');
    })
}

const division = total => {
    let arr = [2, 3, 5, 10];
    return arr.map(num => total / num);
  }

const sumDivision = sum => {
    const result = sum.reduce((total, num) => total + num);
    console.log(result.toFixed(2));
}

sumAll()
    .then(division)
    .then(sumDivision)
    .catch(errorMsg => console.log(errorMsg));

