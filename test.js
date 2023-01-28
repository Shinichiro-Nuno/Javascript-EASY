const object = {
  age: 35,
  weight: 80
}

const changeAge = (number, obj) => {
  object.age = number;
  return object
}

console.log(changeAge(30, object));