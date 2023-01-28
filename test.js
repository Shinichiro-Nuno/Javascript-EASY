const person = {name: "Mike", age: 23};
const personInfo = {...person, ...{country: "America", job: "software engineer"}};
console.log(personInfo);