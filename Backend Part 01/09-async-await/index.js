/**
 * Async/Await is syntactic sugar over Promises
 * 1. async function always returns a Promise
 * 2. await can be used only inside async functions
 * 3. await pauses the execution of the async function
 *    until the Promise is resolved or rejected
 */

function delay(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

async function getUserById(id) {
  await delay(3000);
  const users = [
    { id: 101, name: "Jafiruzzaman", role: "admin" },
    { id: 102, name: "Tuhin", role: "user" },
  ];
  const user = users.find((u) => u.id === id);
  return user;
}

console.log("before async function");

getUserById(102).then((user) => {
  console.log("User:", user);
});

console.log("after async function");

// try-catch block in async-await
const getAllUsers = async () => {
  try {
    await delay(3000);
    console.log(`find all users from the database`);
  } catch (error) {
    console.log(`error `, error);
  }
};
console.log("before try-catch block ");
getAllUsers();
console.log("after try-catch block ");
