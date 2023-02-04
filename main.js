alert ("JS TEST")
// Define function to calculate the total potatoes
const lifetimeSupplyCalculator = (name, currentAge, maxAge, amountPerWeek) => {
    const weeks = (maxAge - currentAge) * 52;
    const totalPotatoes = weeks * amountPerWeek;
    return `${name} has ${maxAge - currentAge} years and will eat ${totalPotatoes} potatoes until age of ${maxAge}.`;
  };
  // Define 3 users as objects
  const user1 = {
    name: "John",
    currentAge: 30,
    maxAge: 75,
    amountPerWeek: 20
  };
  const user2 = {
    name: "Jane",
    currentAge: 50,
    maxAge: 80,
    amountPerWeek: 30
  };
   const user3 = {
    name: "Carl",
    currentAge: 28,
    maxAge: 90,
    amountPerWeek: 40
  };
   // Store 3 messages in 3 variables
  const message1 = lifetimeSupplyCalculator(user1.name, user1.currentAge, user1.maxAge, user1.amountPerWeek);
  const message2 = lifetimeSupplyCalculator(user2.name, user2.currentAge, user2.maxAge, user2.amountPerWeek);
  const message3 = lifetimeSupplyCalculator(user3.name, user3.currentAge, user3.maxAge, user3.amountPerWeek);
  
  // Test function with the 3 users
  console.log(message1);
  console.log(message2);
  console.log(message3);
  