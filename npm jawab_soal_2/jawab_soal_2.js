const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const orang = {
  'Rachel': 17,
  'Micel': 21,
  'Juna': 27,
  'Jo': 18
};

function NamaAsync(namaSiswa) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const age = orang[namaSiswa];
      if (age !== undefined) {
        resolve(age);
      } else {
        reject('Oh tidak, ga ketemu!');
      }
    }, 1000); 
  });
}


function NamaCallback(namaSiswa, callback) {
  
  setTimeout(() => {
    const age = orang[namaSiswa];
    if (age !== undefined) {
      callback(null, age);
    } else {
      callback('Yah, ga ada!', null);
    }
  }, 1000); 
}

async function main() {
  
  rl.question('Masukin namanya: ', async (input) => {
    try {
      
      const ageAsync = await NamaAsync(input);
      
      console.log(`Umur si ${input} (Async/await): ${ageAsync}`);

      
      NamaCallback(input, (error, ageCallback) => {
        if (error) {
          console.error(error);
        } else {
          
          console.log(`Umur si ${input} (Callback): ${ageCallback}`);
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
