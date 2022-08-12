const test = (length, given, search) => {
  const arr = given.toString().split("");
  for (let i = 0; i < length; i++) {
    if (arr[i] === search.toString()) {
      console.log(i);
      return;
    }
  }
  console.log(-1);
};

test(5, 12345, 9);
