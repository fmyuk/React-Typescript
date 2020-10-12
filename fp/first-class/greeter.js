const greeter = (target) => () => console.log(`Hi, ${target}!`);
const greet = greeter("Jun");
greet();
