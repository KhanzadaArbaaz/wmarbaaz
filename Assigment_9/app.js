// *****************************************
//             Assignment 9
// *****************************************

// *****************************************
//             Chapter # 38 - 42
// *****************************************

// ********** Task 1 **********
// function power(a, b) {


//     return "value of a raised to b  :  " + a ** b

// }
// a = prompt("Enter a 1st number : ")
// b = prompt("Enter a 2nd number : ")
// document.write(power(a, b))


// ********** Task 2 **********

// function check_leapyear(){
//       var year; 
//     year = document.getElementById("year").value;
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }

// ********** Task 3 **********

// a = +prompt("Enter Side 1 : ")
// b = +prompt("Enter Side 2 : ")
// c = +prompt("Enter Side 3 : ")

// function areatrc(a,b,c) {
//     var a = (a + b + c) / 2;
//     return a;

// }

// function area() {

//     var size = areatrc(a,b,c)

//     var total = size * ((size - a) * (size - b) * (size - c))
//     return total;

// }
// document.write(area())

// ********** Task 4 **********

// var subj1 =  +prompt("Enter Subject 1 Score: ");
// var subj2 =  +prompt("Enter Subject 2 Score: ");
// var subj3 =  +prompt("Enter Subject 3 Score: ");

// function mainfunc(){


//     avrg();
//     document.write("<br>");
//     prc();



// }
// mainfunc(54,67,98);
// function avrg(){

//  avg = (subj1 + subj2 + subj3) / 3;
//  document.write("Average of 3 Subjects is: " + avg);

// }
// function prc(){

//     totalm = 300;
//     obtainm = subj1 + subj2  + subj3;

//     perc = (obtainm / totalm ) * 100;

//     document.write("Percentage of 3 subjects is: " + perc);

    
// }


// ********** Task 5 **********

// function indexOf(para, charc) {
//     let i=0;
//     while(i < para.length){
//         if(para[i] == charc){  // yes? just return the index i
//             document.write(i);
//             return i

//         }
//         i++                          // no? increase i and move on to next loop iteration
//     }
//     return -1;                       // made it through the loop and without returning. This means no match was found.
// }
// var para = prompt("Enter Sentence You Want To Write");
// var charc = prompt("Enter Character IndexOf");

// indexOf(para,charc);




// ********** Task 6 **********

//  function DeleteVowels(str) {
//      return str.replace(/[aeiou]/gi, '');
//  }
//     str = prompt("Enter Sentence");
//     document.write(DeleteVowels(str));

// ********** Task 7 **********

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   document.write(findOccurrences());

// ********** Task 8 **********

// citydst =  prompt("Enter the distance between 2 cities (in km): ");
// function main(citydst){    

//     meter();
//     document.write("<br>");
//     centimeter();
//     document.write("<br>");
//     feet();
//     document.write("<br>");
//     inches();

// }
// main(citydst)

// function meter(){

//     meteer = citydst * 1000;
//     document.write(citydst + "  Km" + " into meter is " + meteer);

// }
// function centimeter(){

//     cmeter = citydst * 1000 * 100;
//     document.write(citydst + "  Km" + " into centimeter is " + cmeter);

// }
// function feet(){

//     fet = citydst * 3280.84;
//     document.write(citydst + "  Km" + " into feet is " + fet);

// }
// function inches(){
//     inch = citydst * 39370.08;
//     document.write(citydst + "  Km" + " into inches is " + inch);
// }


// ********** Task 9 **********

// function overtpay(slry, hrs) {

//         if (hrs > 40) {
    
//             overtime = (hrs - 40) * 12;
    
//             salary = slry + overtime;
//             document.write("Your Overtime amount is: " + overtime + "<br>");
//             document.write("Salary of Employee with over time is: " + salary)
    
//         } 
//         else  {
    
    
//             overtime = hrs * 12;
//             document.write("Salary of Employee " + slry)
    
//         }
        
    
//     }
//     slry = +prompt("Enter your Salary : ")
//     hrs = +prompt("Enter your Hours : ")
    
//     overtpay(slry, hrs)



// ********** Task 10 **********


// function curconv(amount) {


//     Notes1000 = Math.floor(amount / 1000);

//     document.write(" There are " + Notes1000 + " Notes of 1000 in " + amount + "<br>")
//     RemainAmounts1000 = amount - (Notes1000 * 1000);

//     Notes500 = Math.floor(RemainAmounts1000 / 500);
//     document.write(" There are " + Notes500 + " Notes of 500 in " + amount + "<br>")
//     RemainAmounts500 = RemainAmounts1000 - (Notes500 * 500);


//     Notes100 = Math.floor(RemainAmounts500 / 100);
//     document.write(" There are " + Notes100 + "  Notes of 100 in " + amount + "<br>")
//     RemainAmounts100 = RemainAmounts500 - (Notes100 * 100);

//     Notes50 = Math.floor(RemainAmounts100 / 50);
//     document.write(" There are " + Notes50 + " Notes of 50 in " + amount + "<br>")
//     RemainAmounts50 = RemainAmounts100 - (Notes50 * 50);

//     Notes10 = Math.floor(RemainAmounts50 / 10);
//     document.write(" There are " + Notes10 + "  Notes of of 10 in " + amount + "<br>");
//     RemainAmounts = RemainAmounts50 - (Notes10 * 10);

// }
// amount = +prompt("Enter an amount : ")
// curconv(amount)


// *****************************************
//             Chapter # 43 - 48
// *****************************************

// ********** Task 1 **********
// function alertm(){

//     alert("Welcome Our Store")

// }
// ********** Task 2 **********
// function alertms(){

//     alert("ThankYou For Purchasing us")
// }


// ********** Task 3 **********

// function delete1(){
//     document.getElementById("tr1").remove();

// }
// function delete2(){
//     document.getElementById("tr2").remove();
// }
// function delete3(){
//     document.getElementById("tr3").remove();
// }
// function delete4(){
//     document.getElementById("tr4").remove();
// }
// function delete5(){
//     document.getElementById("tr5").remove();
// }
// function delete6(){
//     document.getElementById("tr6").remove();
// }
// function delete7(){
//     document.getElementById("tr7").remove();
// }
// function delete8(){
//     document.getElementById("tr8").remove();
// }
// function delete9(){
//     document.getElementById("tr9").remove();
// }
// function delete10(){
//     document.getElementById("tr10").remove();
// }


// ********** Task 4 **********

// function mouseov() {


//     ChangeImage = document.getElementById('img1')

//     ChangeImage.src = 'images/genbaj.jpg';

// }

// function mouseou() {
//     ChangeImage = document.getElementById('img1')
//     ChangeImage.src = 'images/imran.jpg';

// }


// ********** Task 5 **********


// count = 0;
// function inc() {
//     count++;
//     Inc = document.getElementById('id1')

//     Inc.innerHTML = count


// }

// function dec() {

//     count--;
//     Inc = document.getElementById('id1')
//     Inc.innerHTML = count;


// }

// *****************************************
//             Chapter # 49 - 52
// *****************************************

// ********** Task 1 **********

// function Data() {
//     Name = document.getElementById('name').value;
//     document.getElementById("tdname").innerHTML += Name + "<br>";
//     Name = document.getElementById('name').value = '';
//     Email = document.getElementById('email').value;
//     document.getElementById("tdemail").innerHTML += Email + "<br>";
//     Email = document.getElementById('email').value = '';
//     Phone = document.getElementById('PN').value;
//     document.getElementById('tdPN').innerHTML += Phone + "<br>";
//     Phone = document.getElementById('PN').value = '';
//     Password = document.getElementById('pass').value;
//     document.getElementById("tdpass").innerHTML += Password + "<br>";
//     Password = document.getElementById('pass').value = '';
//     CPass = document.getElementById('Cpass').value;
//     document.getElementById("tdCpass").innerHTML += CPass + "<br>";
//     CPass = document.getElementById('Cpass').value = '';
// }
// ********** Task 2 **********

// function readmore() {


//     var Para = 'We are an organization that believes in lighting up the lives of underprivileged people across the world. We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark. With over 60 different sectors, we feed thousands of hungry people each day, hundreds more are given the hope of life through medical health care, many are educated to become leaders of tomorrow and several are given the opportunity to stand on their feet financially.'

//     ValuePara = document.getElementById('para')

//     ValuePara.innerHTML = Para;
// }

// ********** Task 3 **********

// var info = document.getElementById("info")

// function data() {
//     var fname = document.getElementById("fname")
//     var lname = document.getElementById("lname")
//     var email = document.getElementById("email")
//     var pass = document.getElementById("pass")
//     console.log(fname.value)
//     var tr = document.createElement("tr")

//     var th1 = document.createElement("th")
//     var th2 = document.createElement("th")
//     var th3 = document.createElement("th")
//     var btn = document.createElement("button")
//     var edit = document.createElement("button")
      
//     var th1Text = document.createTextNode(fname.value)
//     var th2Text = document.createTextNode(lname.value)
//     var th3Text = document.createTextNode(email.value)
//     var btnText = document.createTextNode("Delete")
//     var editText = document.createTextNode("edit")

//     btn.setAttribute("onclick" , "dlt(this)")
//     btn.setAttribute("id" , "button")
//     btn.setAttribute("class" , "button")

//     edit.setAttribute("onclick" , "hide(this)")



//     th1.appendChild(th1Text)
//     th2.appendChild(th2Text)
//     th3.appendChild(th3Text)
//     btn.appendChild(btnText)
//     edit.appendChild(editText)

//     tr.appendChild(th1)
//     tr.appendChild(th2)
//     tr.appendChild(th3)
//     tr.appendChild(btn)
//     tr.appendChild(edit)

//     info.appendChild(tr)

// }

// function dlt(e){
//     e.parentNode.remove()

// }
// function hide(e){
//     var fname = document.getElementById("fname")
//     var lname = document.getElementById("lname")
//     var email = document.getElementById("email")


//     var form = document.getElementById("hiddenform")
//     var p1 = document.createElement("p")
//     var p2 = document.createElement("p")
//     var p3 = document.createElement("p")

//     var p1Text = document.createTextNode( "First Name : " + fname.value)
//     var p2Text = document.createTextNode( "Last Name : " + lname.value )
//     var p3Text = document.createTextNode(  "Email : " + email.value )

//     p1.appendChild(p1Text)
//     p2.appendChild(p2Text)
//     p3.appendChild(p3Text)

//     form.appendChild(p1)
//     form.appendChild(p2)
//     form.appendChild(p3)

// }

// *****************************************
//             Chapter # 53 - 58
// *****************************************

// ********** Task 1 **********

// function openModal() {
//     document.getElementById("myModal").style.display = "block";
//   }
  
//   function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//   }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }

// ********** Task 2 **********

// var font = 10;
//   function incf() {
//     var font = parseInt($("#a").css('font-size'));
//     font++;
//      document.getElementById('a').style.fontSize = font+ "px";
//     }
//     function decf() {
//         var font = parseInt($("#a").css('font-size'));
    
//         font--;
//          document.getElementById('a').style.fontSize =font+ "px";
//         }

// *****************************************
//             Chapter # 59 - 67
// *****************************************

// ********** Task 1 (I) **********


// var main = document.getElementById("main-content")
// var mainElements = main.childNodes

// ********** Task 2 (II) **********

// for(var i = 0 ; i  < mainElements.length ; i++){
//     document.write(mainElements[i].nodeName + "<br>")
// }

// ********** Task 1 (III) **********


// var render = document.getElementsByClassName("render")
// for(var i = 0 ; i < render.length ; i++){
//     document.write(render[i].firstChild.nodeValue + "<br>")
// }

// ********** Task 1 (IV) **********

// var main = document.getElementById("main-content")
// var fname = document.getElementById("first-name")
// fname.value =  main.childNodes[1].firstChild.nodeValue 
// console.log(fname.value)

// ********** Task 1 (V) **********

// var main = document.getElementById("main-content")
// var lname = document.getElementById("last-name")
// lname.value =  main.childNodes[2].firstChild.nodeValue 
// console.log(lname.value)

// var main = document.getElementById("main-content")
// var email = document.getElementById("email")
// email.value =  main.childNodes[3].firstChild.nodeValue 
// console.log(email.value)

// document.write("The value of element having id first name is " + fvalue + "<br>")

// ********** Task 2 (I) **********

// var form = document.getElementById("form-content")
// document.write("The node type of id form-content is " + form.nodeType + "<br>")

// ********** Task 2 (II) **********

// var last = document.getElementById("lastName")
// var child = last.firstChild.nodeValue
// document.write( "<br>" + "The node type of id lastName is " + last.nodeType + " and  child node is  " + child + "<br>")

// ********** Task 2 (III) **********

// var update = child = "Last Name : Price"
// document.write("The updated value of child node of id lastName is " + update + "<br>")

// ********** Task 2 (IV) **********

// var main = document.getElementById("main-content")
// document.write("The first child of id main-content is " + main.firstChild.nodeName + "<br>")

// ********** Task 2 (V) **********

// var last = document.getElementById("lastName")
// var next = last.nextSibling.nodeValue;
// var previous = last.previousSibling.nodeValue
// document.write("The next sibling of id last name is " + next + "<br>")
// document.write("The previous sibling of id last name is " + previous + "<br>")

// ********** Task 2 (VI) **********

// var email = document.getElementById("email")
// var parent = email.parentNode
// var type = email.nodeType
// document.write("The parent node  of element having id email is  " +parent.nodeName + "<br>")
// document.write("The node type of element having id email is  " +type)