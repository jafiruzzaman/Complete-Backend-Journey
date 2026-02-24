/**
 * What is Promise ?
 * Ans: A Promise represent a value that will be available in future.
 */
function findUserById(id) {
  return new Promise((resolve, reject) => {
    // simulate DB latency
    setTimeout(() => {
      const users = [
        {
          id: 101,
          name: "Jafiruzzaman",
          role: "admin",
        },
        {
          id: 102,
          name: "Tuhin",
          role: "user",
        },
      ];
      // find user
      const user = users.find((u) => u.id === id);
      if (!user) {
        return reject(new Error("User Not Found"));
      }
      resolve(user);
    }, 3000);
  });
}
console.log("before find by user promise");

findUserById(101)
  .then((v) => {
    console.log(`value`, v);
  })
  .catch((err) => {
    console.log(`error `, err);
  });

console.log("after find by user promise");
