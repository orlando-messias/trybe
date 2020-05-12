
// ==== EXERCICIO 01 =====

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const includeKey = (lesson, key, value) => lesson[key] = value;
  includeKey(lesson2, 'turno', 'manhã');    
  console.log(lesson2);

  // ======================== END ====================================



  // ==== EXERCICIO 02 =====

  const listKeys = obj => {
    const keys = Object.keys(obj)
    for(let i in keys){
        console.log(`${keys[i]}`)
    }
}

  // ======================== END ====================================



  // ==== EXERCICIO 03 =====

  const objSize = obj => Object.keys(obj).length
  console.log(objSize(lesson2))

  // ======================== END ====================================



  // ==== EXERCICIO 04 =====

  const listValues = obj => Object.values(obj)
  console.log(listValues(lesson1))

  // ======================== END ====================================



  // ==== EXERCICIO 05 =====

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
  console.log(allLessons)

  // ======================== END ====================================



  // ==== EXERCICIO 06 =====

  const totalStudents = Object.values(allLessons).reduce((total, num) => {
    return total + num.numeroEstudantes;
  }, 0)

  console.log(totalStudents)

  // ======================== END ====================================



  // ==== EXERCICIO 07 =====

  const getValueByNumber = (lesson, pos) => {
    const values = Object.values(lesson)
    return values[pos]
  }

  // ======================== END ====================================



// ==== EXERCICIO 08 =====

  const verifyPair = (lesson, key, value) => {
    const values = Object.entries(lesson)
    for(let i in values){
        if(values[i][0] === key && values[i][1] === value){
            return true
        }
    }
    return false;
  }

  // ======================== END ====================================
