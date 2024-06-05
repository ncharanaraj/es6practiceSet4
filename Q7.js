/*Write an ES6 function that takes the users' details and returns the data with team ID. Avoid
using in-built methods. */

const podAndTeamAllocation = (user) => {
  return { ...user, teamId: 667543 };
};

const userData = { firstName: "John", lastName: "Dee" };
console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}
