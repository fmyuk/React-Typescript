const str = `{"id": 1, "username": "patty"}`;
const user: any = JSON.parse(str);

console.log(user.id, user.address);
