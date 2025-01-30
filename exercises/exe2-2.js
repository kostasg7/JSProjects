const user = {
  name: "Kostas",
  age: 41,
  city: "Athens"
}

function hello() {
  console.log('Hello ' + user['name'])
}

hello(user)