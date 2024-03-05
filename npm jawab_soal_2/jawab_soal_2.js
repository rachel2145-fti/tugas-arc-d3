const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const students = {
  'Rachel': 17,
  'Micel': 21,
  'Juna': 27,
  'Jo': 18
};

function fetchStudentDataAsync(studentName) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const age = students[studentName];
      if (age !== undefined) {
        resolve(age);
      } else {
        reject('Student not found');
      }
    }, 1000); 
  });
}


function fetchStudentDataCallback(studentName, callback) {
  
  setTimeout(() => {
    const age = students[studentName];
    if (age !== undefined) {
      callback(null, age);
    } else {
      callback('Student not found', null);
    }
  }, 1000); 
}

async function main() {
  
  rl.question('Enter student name to get age: ', async (input) => {
    try {
      
      const ageAsync = await fetchStudentDataAsync(input);
      
      console.log('Age of ${input} (Async/await): ${ageAsync}');

      
      fetchStudentDataCallback(input, (error, ageCallback) => {
        if (error) {
          console.error(error);
        } else {
          
          console.log('Age of ${input} (Callback): ${ageCallback}');
        }
        
        rl.close();
      });
    } catch (error) {
      console.error(error);
      
      rl.close();
    }
  });
}

main();
