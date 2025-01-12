let user = {
  name: "John",
};
let permission1 = { canView: true };
let permission2 = { canWrite: true };
Object.assign(user, permission1, permission2);
console.log(user.canView);
console.log(user.canWrite);
console.log(user.name);

let family = {
  member1: "Jincy",
  member2: "Dev",
};
let permissions1 = { canParticipateEvents: true };
let permissions2 = { canOrganizeEvents: true };
Object.assign(family, permissions2, permissions1 );

console.log(family.canOrganizeEvents);
console.log(family.canParticipateEvents);
console.log(family.member1);
console.log(family.member2);
