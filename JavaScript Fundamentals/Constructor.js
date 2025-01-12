function user(params) {
  console.log(new.target);
}
user();
new user();

function Tablo() {
  this.place = "New york";
  return;
}
console.log(new Tablo().place);

function NewFun() {
  this.name = "James";
  return { name: "Jacob" };
}
console.log(new NewFun().name);
