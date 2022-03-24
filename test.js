const { config  }= require('./index');

config('./test.json', {debug:true});
config('./test.json', {uppercase:false});
config(undefined, {debug:true});

console.log(process.env);