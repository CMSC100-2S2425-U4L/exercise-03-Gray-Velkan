function validatePassword(p1, p2) {
    //password should match
    if (p1 !== p2) {
        return false;
    }

    //password has at least 8 characters
    if(p1.length < 8) {
        return false;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;

    for (let char of p1) {
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        if (char >= 'a' && char <= 'z') hasLowerCase = true;
        if (char >= '0' && char <= '9') hasNumber = true;
    }

    return hasUpperCase && hasLowerCase && hasNumber;
}

//function to reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = 0; i < str.length; i++) {
        ch = str.charAt(i); //get the characters
        reversed = ch + reversed; //concatenate each chracter in front of the string
    }

    return reversed; //return the reversed string
}

//function to store in an object
function storePassword(name, p1, p2) {
    const validChecker = validatePassword(p1, p2);
    if(validChecker) {
        reversed_string = reverseString(p1);
    } else {
        reversed_string = p1;
    }
    
    return {
        name: name,
        newpassword: reversed_string     //return the recersed string if valid else returns the p1
    };
}



//example test cases
console.log(validatePassword("helloworld", "hello")); // false
console.log(validatePassword("hello", "hello")); // false
console.log(validatePassword("hello1234", "hello1234")); //false
console.log(validatePassword("Hello1234", "Hello1234")); //true
console.log(reverseString("Hello1234")); // "4321olleH"
console.log(storePassword("John", "Pass1234", "Pass1234"));  // {name: "John", newpassword: "4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12354"));  // {name: "John", newpassword: "Pass123"}




