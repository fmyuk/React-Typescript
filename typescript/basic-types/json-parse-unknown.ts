const str1 = `{ "id": 1, "username": "patty" }`;
const user1: unknown = JSON.parse(str1);

console.log(user1.id, user1.address.zipcode);
