// *****************************************
//             Assigment 6
// *****************************************

// *****************************************
//             Chapter # 21 - 25
// *****************************************

// ********** Task 1 **********

// var first = prompt("Enter Your First Name")
// var last = prompt("Enter Your Last Name")
// var fullname = first + " " + last
// alert("Welcome " + fullname)
// document.write("Welcome " + fullname)

// ********** Task 2 **********

// var mname = prompt("Enter Your Favorite Phone Name");
// var lm = mname.length;
// document.write("Your Favorite Phone is: " + mname + "<br>");
// document.write("String Length is: " + lm);

// ********** Task 3 **********

// var stng = "Pakistani";
// var fnd = stng.indexOf("n")
// document.write("String: " + stng + "<br>");
// document.write("Index of 'n': " + fnd)


// ********** Task 4 **********

// var stng = "Hello World";
// var fnd = stng.lastIndexOf("l")
// document.write("String: " + stng + "<br>");
// document.write("Index of 'l': " + fnd)


// ********** Task 5 **********

// var str = "Pakistani";
// var find = str.charAt(3);
// document.write("String: " + str + "<br>");
// document.write("Character at index 3: " + find);

// ********** Task 6 **********

// var first = prompt("Enter Your First Name")
// var last = prompt("Enter Your Last Name")
// var fullname = first.concat(last)
// alert("Welcome " + fullname)
// document.write("Welcome " + fullname)

// ********** Task 7 **********

// var str1 = "Hyderabad";
// var rplc = str1.replace("Hyder", "Islam")
// document.write("City: " + str1 + "<br>");
// document.write("After replacement: " + rplc)



// ********** Task 8 **********

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rplc = message.replace(/and/g, "&");
// document.write("Message: " + message + "<br>");
// document.write("After Replacement and to &: " + rplc)


// ********** Task 9 **********

// var str = "472";
// document.write("Value: " + str);
// document.write("<br>");
// document.write("DataType: String");
// document.write("<br>");
// var num = parseInt("472" + "<br>");
// document.write("Value: " + num);
// document.write("<br>");
// document.write("DataType: Number");


// ********** Task 10 **********

// var str = prompt("Enter Your Fruit Name");
// var rp = str.toUpperCase();
// document.write("User Input: " + str + "<br>");
// document.write("Uppercase: " + rp)

// ********** Task 11 **********

// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }

// var x = prompt("Enter Your Input")
// document.write("User Input: " + x + "<br>")
// document.write("Tittle Case: " + titleCase(x));

// ********** Task 12 **********

// var num = 35.36;
// document.write("Number: " + num + "<br>")
// document.write(("Result: " + num + '').replace('.', ''));

// ********** Task 13 **********

// var uname = prompt("Enter Your Username");
// var error = "@!,.";
// for (var i = 0; i < uname.length; i++) {
//     if (error.indexOf(uname.charAt(i)) != -1) {
//         alert("Enter A Valid Usrename! ")
//     }

// }


// ********** Task 14 **********

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter Your Snacks");
// var search = search.toLowerCase();

// if (arr.indexOf(search) !== -1) {
//     document.write(search + " is <b>available</b> at index " + arr.indexOf(search) + " in our bakery");

// } else {
//     document.write("We are Sorry! " + search + " is <b>not available</b> in our bakery");
// }


// ********** Task 15 **********


// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var user = prompt("Enter Your Password")
// var letter = /[a-zA-Z]/;
// var number = /[0-9]/;
// var valid = number.test(user) && letter.test(user);
// if (user.length >= 6 && !nums.includes(parseInt(user.charAt(0))) && valid) {

//     alert("Valid Passowrd")

// } else {

//     document.write("Entered Password: " + user + "<br>");
//     document.write("Password can not being with a number" + "<br>");
//     document.write("Please Enter a valid password");

// }


// ********** Task 16 **********

// var uni = "University of Karachi";
// for (var i = 0; i < uni.length; i++) {

//     document.write(uni[i] + "<br>")

// }

// ********** Task 17 **********

// user = prompt("Enter a string : ")
// for (var i = 0; i < user.length; i++) {

//     lc = user.slice(user.length - 1)
// }
// document.write("User input is : " + user + "<br>")
// document.write("Last Character is : " + lc)

// ********** Task 18 **********

// var sen = ("the quick brown fox jumps over the lazy dog ");
// document.write("Text :   " + sen + "<br>")

// var fw = "the";
// var x = 0,
//     y = 0;

// for (i = 0; i < sen.length; i++) {
//     if (sen[i] == fw[0]) {
//         for (j = i; j < i + fw.length; j++) {
//             if (sen[j] == fw[j - i]) {
//                 y++;
//             }
//             if (y == fw.length) {
//                 x++;
//             }
//         }
//         y = 0;
//     }
// }

// document.write("There are   " + x + "   occerence(s) of the word  " + "'the'.")


// *****************************************
//             Chapter # 26 - 30
// *****************************************

// ********** Task 1 **********

// positive_float = parseFloat(prompt("Enter a Positive Integer"))
// document.write(("Number: " + positive_float) + " <br> ");

// Round = Math.round(parseFloat(positive_float));
// document.write("Round of Value : " + Round + " <br> ")


// FloorRound = Math.round(parseFloat(positive_float));
// document.write("Floor Value : " + FloorRound + " <br> ")

// CeilRound = Math.ceil(parseFloat(positive_float));
// document.write("Ceil  Value : " + CeilRound)

// ********** Task 2 **********

// Negative_float = parseFloat(prompt("Enter a Positive Integer"))
// document.write(("Nnumber: " + Negative_float) + " <br> ");

// Round = Math.round(parseFloat(Negative_float));
// document.write("Round of Value : " + Round + " <br> ")


// FloorRound = Math.round(parseFloat(Negative_float));
// document.write("Floor Value : " + FloorRound + " <br> ")

// CeilRound = Math.ceil(parseFloat(Negative_float));
// document.write("Ceil  Value : " + CeilRound)

// ********** Task 3 **********

// var num = +prompt("Enter a Positive Integer");
// absa = Math.abs(num)
// document.write("The absolute value of " + num + " is " + absa)


// ********** Task 4 **********

// number = Math.random() * 5;
// document.write("Random Dice value is : " + Math.floor(number) + "<br>")

// numbers = Math.random() * 7;
// document.write("Random Dice value is : " + Math.floor(numbers))


// ********** Task 5 **********
// number = Math.random() * 5;
// numbers = Math.round(number)
// if (numbers % 2 == 0) {
//     document.write(numbers + "<br> Random value of coin :  Heads")

// } else {
//     document.write(numbers + "<br> Random value of coin :  Tails")
// }

// document.write("<br>")

// number1 = Math.random() * 5;
// numbers1 = Math.round(number1)

// if (numbers1 % 2 == 0) {
//     document.write(numbers1 + "<br> Random value of coin :  Heads")

// } else {
//     document.write(numbers1 + "<br> Random value of coin : Tails")
// }


// ********** Task 6 **********

// number = Math.random() * 101;
// numbers = Math.round(number)

// document.write("Random number between 1 to 100 : " + numbers)

// ********** Task 7 **********

// user = prompt("Enter your Weight")

// if (user === "50kgs") {

//     a1 = user.replace("kgs", " Kilogram")
//     document.write(a1)

// } else if (user === "50kg") {

//     a2 = user.replace("kg", " Kilogram")
//     document.write(a2)

// } else if (parseInt(user) === 50) {

//     document.write((user) + " Kilogram ")

// } else if (parseFloat(user) === 50.2) {

//     document.write((user) + " Kilogram ")

// }

// ********** Task 8 **********

// user_input = +prompt("Enter a number between 1 to 10")
// number = Math.random() * 11;
// numbers = Math.round(number)
// if (numbers != user_input) {

//     document.write("Sorry ! Try again")
// } else {
//     document.write("Congratulation ! You Win")

// }


// *****************************************
//             Chapter # 31 - 34
// *****************************************

// ********** Task 1 **********

// var rightNow = new Date();
// document.write(rightNow);

// ********** Task 2 **********

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var rightNow = new Date();
// var month = rightNow.getMonth()
// document.write(months[month]);

// ********** Task 3 **********

// var dayn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theday = now.getDay();
// var nameOftday = dayn[theday];
// document.write(nameOftday)

// ********** Task 4 **********


// var dayn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theday = now.getDay();
// var nameOftday = dayn[theday];
// if (nameOftday == "Saturday" || nameOftday == "Sunday") {
//     document.write("It's Funday")
// } else {
//     document.write("Sorry! Its not Funday because today is " + nameOftday)
// }



// ********** Task 5 **********


// var now = new Date();
// var date = now.getDate();
// if (date <= 15) {
//     document.write("First Fifteen Days Of Month");
// } else {
//     document.write("Last Fifteen Days Of Month");
// }

// ********** Task 6 **********

// var now = new Date();
// document.write("Current Date: " + now + "<br>");
// var d = new Date();
// var m = d.getMilliseconds();
// var mm = d.getMinutes();
// document.write("Elapsed milliseconds since January 1, 1970: " + m + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + mm);


// ********** Task 7 **********

// var d = new Date();
// var time = d.getHours();
// if (time >= 12) {
//     alert("Its PM")
// } else {
//     alert("Its AM")
// }

// ********** Task 8 **********

// var d = new Date();
// var laterdate = new Date();
// laterdate.setFullYear(2020, 11, 31, 12, 0, 0, 0);
// document.write("Later Date: " + laterdate);


// ********** Task 9 **********

// var d = new Date();
// var passd = new Date();
// passd.setFullYear(2015, 05, 15, 12, 0, 0, 0);
// var cdate = Math.ceil((d - passd) / 8.64e7);
// document.write(cdate + " Days passed since 1st Ramadan 2015");


// ********** Task 10 **********

// var begd = new Date("Jan 01, 2015");
// var begdateMili = begd.getTime();
// var refdate = new Date("Sat Dec 05, 2015 22:50:16");
// document.write("On reference date " + refdate + ", <br>")
// var refdateMili = refdate.getTime();
// var dif = refdateMili - begdateMili;
// dif = dif / (1000 * 60);
// document.write(Math.ceil(dif) + " seconds has passed since beginning of 2015");

// ********** Task 11 **********

// var date = new Date();
// document.write("current date: " + date + "<br>");
// var bhr = new Date(date.getTime() - (1000 * 60 * 60));
// document.write("1 hour ago, it was " + bhr);


// ********** Task 12 **********

// var date = new Date("Jun 18, 2020 ");
// document.write("current date: " + date + "<br>");
// var year = new Date("Jun 18, 1920 ");
// document.write("100 years back , it was " + year);


// ********** Task 13 **********

// var uage = +prompt("Enter Your Age");
// var d = new Date();
// var year = d.getFullYear();
// // document.write(year);
// var cage = year - uage;
// document.write("Birth Year " + cage);


// ********** Task 14 **********


// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var cname = prompt("Enter Customer Name");
// var d = new Date();
// var month = d.getMonth();
// // months[month]
// var nunit = +prompt("Enter number of Unit");
// var cunit = +prompt("Enter charges of Unit");
// var lpay = +prompt("Enter late payment surcharge");
// document.write("<h1> K-Electric Bill </h1>");
// document.write("Customer Name: " + "<b>" + cname + "</b>" + "<br>");
// document.write("Month: " + "<b>" + months[month] + "</b>" + "<br>");
// document.write("Number of units: " + "<b>" + nunit + "</b>" + "<br>");
// document.write("Number of units: " + "<b>" + cunit + "</b>" + "<br>");
// document.write("<br>");
// document.write("<br>");
// var namount = nunit * cunit;
// document.write("Net Amount Payable (within Due Date): " + "<b>" + namount + "</b>" + "<br>");
// document.write("Late payment surcharge: " + "<b>" + lpay + "</b>" + "<br>");
// var gamount = namount + lpay;
// document.write("Gross Amount Payable (after Due Date): " + "<b>" + gamount + "</b>");

// *****************************************
//             Chapter # 35 - 38
// *****************************************

// ********** Task 1 **********

// function currentdate() {
//     var d = new Date();
//     document.write(d)
// }
// currentdate();

// ********** Task 2 **********

// function fullname() {

//     funame = fname + "     " + lname;
//     document.write(funame)

// }
// fname = prompt("Enter your First name : ");
// lname = prompt("Enter your Last name : ");
// fullname()

// ********** Task 3 **********

// function adtn(a, b) {

//     return a + b;


// }
// fname = +prompt("Enter your First Number : ");
// lname = +prompt("Enter your Second Number : ");
// no = adtn(fname, lname);
// document.write("Sum of  two Numbers : " + no);

// ********** Task 4 **********

// function gth(a, b, c) {

//     if (a > b && a > c) {
//         return "A is greater  " + parseInt(a);

//     } else if (b > a && b > c) {
//         return "B is greater  " + parseInt(b);
//     } else
//         return "C is greater  " + parseInt(c);
// }

// fnum = +prompt("Find Greather In three Numbers \n Enter First Number : ");
// snum = +prompt("Enter Second Number : ");
// tnum = +prompt("Enter Third Number : ");

// no = gth(fnum, snum, tnum);
// document.write(no);

// ********** Task 5 **********

// function square(no) {

//     return no ** 2;

// }
// no = +prompt("Enter Number for compute square : ");
// sq = square(no);
// document.write("Square of " + no + "   is   " + sq);

// ********** Task 6 **********

// function factorialize(num) {
//     if (num === 0 || num === 1)
//         return 1;
//     for (var i = num - 1; i >= 1; i--) {
//         num = num * i;


//     }
//     return num;
// }
// no = +prompt("Enter a no: ")
// a = factorialize(no);
// document.write("Factorial of the " + no + " is " + a)


// ********** Task 7 **********

// function count(st, end) {
//     for (var i = st; i <= end; i++) {

//         document.write(i, "<br>")
//     }
// }
// start = +prompt("Enter Starting Number ");
// end = +prompt("Enter Ending Number ");
// count(start, end);

// ********** Task 8 **********

// function calculatehypotenuse(base, prependicular) {
//     function calculatesquare(side) {
//         return side * side;
//     }
//     return Math.sqrt(calculatesquare(base) + calculatesquare(prependicular));
// }
// base = +prompt("Enter base of the Traiangle");
// prep = +prompt("Enter prependicular of the Traiangle");
// document.write("Hypotenuse of triangle is :  " + calculatehypotenuse(base, prep));

// ********** Task 9 **********

// function arearec(width, height) {
//     return width * height;
// }
// height = +prompt("Enter the height of the triangle")
// area = arearec(10, height);

// document.write("Area of Rectangle is : " + area);

// ********** Task 10 **********

// function chkp(oint) {
//     strngsp = oint.split("");
//     var strngj = strngsp.reverse().join("");
//     if (oint == strngj) {
//         document.write(oint + " is palindrome");
//     } else {
//         document.write(oint + " is not palindrome");
//     }
// }
// ints = prompt("Enter String");
// chkp(ints);

// ********** Task 11 **********

// function titlecase(str) {
//     strs = str.toLowerCase().split(' ');
//     for (var i = 0; i < strs.length; i++) {
//         strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1);
//     }
//     return strs.join(' ');
// }
// str = prompt("Enter a String : ");
// document.write(titlecase(str));

// ********** Task 12 **********

// function lngw(str) {
//     var spstr = str.split(" ");
//     var lngw = 0;

//     for (var i = 0; i < spstr.length - 1; i++) {
//         if (lngw < spstr[i].length) {
//             lngw = spstr[i].length;
//             var fw = spstr[i];
//         }
//     }
//     return fw;
// }
// sw = prompt("Enter a Sentence or word : ");
// document.write(lngw(sw));


// ********** Task 13 **********

// function letf(str, lett) {
//     var x = 0,
//         y = 0;

//     for (i = 0; i < str.length; i++) {
//         if (str[i] == lett[0]) {
//             for (j = i; j < i + lett.length; j++) {
//                 if (str[j] == lett[j - i]) {
//                     y++;
//                 }
//                 if (y == lett.length) {
//                     x++;
//                 }
//             }
//             y = 0;
//         }
//     }
//     document.write("There are   " + x + "   occerence(s) of the word  " + "<b> '" + lett + "' </b>")
// }
// str = prompt("Enter a String : ");
// lett = prompt("Enter a Letter which you want to find");
// letf(str, lett);

// ********** Task 14 **********

// function ccf(r) {

//     return 2 * 3.142 * r;
// }
// radius = prompt("Enter a Radius : ")

// document.write("Circumfernce of Circle is : " + ccf(radius) + "<br>")



// function calcarea(r) {

//     return 3.142 * r * r;
// }
// radius = prompt("Enter a Radius : ")

// document.write("Area of Circle is " + calcarea(radius))