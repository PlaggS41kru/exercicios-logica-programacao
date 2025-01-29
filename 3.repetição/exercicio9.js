const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Digite o número: ', (i) => {
  // TODO: Log the answer in a database

  for (let i = i; i<11; i++){
    console.log(i)
}

  rl.close();
});
