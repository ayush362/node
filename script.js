function reverseString(s) {
  try {
    splitString = s.split("");
    rs = splitString.reverse();
    newString = rs.join("");
    console.log(newString);
  } catch (err) {
    console.log("s.split is not a function");
    console.log(s);
  }
}

reverseString("11235");
