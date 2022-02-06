const name1 = async () => {
  return "hello";
};

console.log("5", name1());

name1().then((data) => {
  console.log(data);
});
