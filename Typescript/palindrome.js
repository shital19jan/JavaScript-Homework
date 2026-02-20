let num11= 121;

let str = num11.toString();
let isPalindrome = true;
for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[((str.length - 1) - i)]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("not Palindrome");
}


let Input = -121;

if (Input < 0) {
    console.log(false);
} else {

    let str1 = Input.toString();
    let revserse = '';
    for (let i = str1.length - 1; i >= 0; i--) {
        revserse = revserse + str1[i];
    }

    if (srt1 === revserse) {
        console.log(true);
    } else {
        console.log(false);
    }
}


let num = 10;

if (num < 0) {
  console.log(false);
} else {
  let str = num.toString();
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  if (str === rev) {
    console.log(true);
  } else {
    console.log(false);
  }
}
