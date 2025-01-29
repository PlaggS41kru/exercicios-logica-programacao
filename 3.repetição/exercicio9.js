const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What? ', (k) => {
  // TODO: Log the answer in a database
  console.log(`number: ${k}`);

  for (let i = k; i<11; i++){
    console.log(i)
}

  rl.close();
});