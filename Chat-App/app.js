//Sir i'm working on it .. although it is incomplete for now but i've done functionality to fetch and store data in database but now i'm trying to make big
//application like whatsapp so it will take some time .. hope you will consider this app as in progress not incomplete assignment
// And A very very thankfull to you all teachers who made me elibible to make this beautiful web application


let myName
let profilepic
let currentUserKey

const facebookLogin = () => {




    document.getElementById("afterFBLogin").classList.remove('d-none', 'd-md-block')
    document.getElementById("chatPanel").classList.add('d-none', 'd-md-block')
    document.getElementById("divStart").classList.add("d-none")

    //document.getElementById("chatPanel").removeAttribute("style")
    //document.getElementById("divStart").setAttribute("style","display:none")


    document.getElementById('lnksignIn').style = 'display:none'
    document.getElementById('lnksignOut').style = ''
    document.getElementById("lnkNewChat").style = ''



    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // The signed-in user info.
            var user = result.user;
            console.log("user===>", user)
            console.log("user===>", user.displayName)
            console.log("user===>", user.password)
            myName = user.displayName
            profilepic = user.photoURL

            document.getElementById("ppic").src = user.photoURL;
            document.getElementById("ppic1").src = user.photoURL;
            document.getElementById("ppic1").title = user.displayName;
            document.getElementById("personName").innerHTML = "&nbsp &nbsp " + myName
            document.getElementById("personName1").innerHTML = myName

            var userProfile = { name: '', photoURL: '', userid: '' }
            userProfile.name = firebase.auth().currentUser.displayName
            userProfile.photoURL = firebase.auth().currentUser.photoURL
            userProfile.userid = firebase.auth().currentUser.uid


            //duplicate id prevention
            var flag = false
            var db = firebase.database().ref('users')
            db.on('value', function (users) {
                users.forEach(function (data) {
                    var usr = data.val()
                    if (usr.userid === userProfile.userid) {
                        currentUserKey = data.key;
                        flag = true
                    }
                })
                if (flag === false) {
                    firebase.database().ref("users").push(userProfile, callback)
                }
                else {
                    document.getElementById("ppic").src = firebase.auth().currentUser.photoURL
                    document.getElementById("ppic").title = firebase.auth().currentUser.displayName

                    document.getElementById("ppic1").src = firebase.auth().currentUser.photoURL
                    document.getElementById("ppic1").title = firebase.auth().currentUser.displayName

                    document.getElementById("personName").innerHTML = "&nbsp &nbsp " + myName

                    document.getElementById('lnksignIn').style = 'display:none'
                    document.getElementById('lnksignOut').style = ''
                }
            })



            // window.location = "home.html"
            // ...
        }).catch(function (error) {
            console.log(error.message)

        });

}

function callback(error) {

    if (error) {
        alert(error)
    }
    else {

        document.getElementById("ppic").src = firebase.auth().currentUser.photoURL
        document.getElementById("ppic").title = firebase.auth().currentUser.displayName

        document.getElementById("ppic1").src = firebase.auth().currentUser.photoURL
        document.getElementById("ppic1").title = firebase.auth().currentUser.displayName

        document.getElementById("personName").innerHTML = "&nbsp &nbsp " + myName

        document.getElementById('lnksignIn').style = 'display:none'
        document.getElementById('lnksignOut').style = ''
        document.getElementById("lnkNewChat").style = ''
    }
}
function showChatList() {

    document.getElementById("side-1").classList.remove('d-none', 'd-md-block')
    document.getElementById("afterFBLogin").classList.add('d-none')
    document.getElementById("chatPanel").classList.add('d-none')

}

function showchat() {

    document.getElementById("side-1").classList.add('d-none', 'd-md-block')
    document.getElementById("afterFBLogin").classList.add('d-none')
    document.getElementById("chatPanel").classList.remove('d-none')

}

function hideChat() {
    document.getElementById("side-1").classList.add('d-none', 'd-md-block')
    document.getElementById("afterFBLogin").classList.remove('d-none')
    document.getElementById("chatPanel").classList.add('d-none')
}

let chatName
function startChat(frndkey,frndname,frndphoto) {


    var frndList = {friendid: frndkey , userID: currentUserKey } 
//this will automatically make new collection in firebase named friendList and push data into it
    firebase.database().ref("friendList").push(frndList, function(error){
        if(error){
            alert(error)
        }
        else{

         
            chatName = document.getElementById(chatid).innerHTML
            document.getElementById("chatheading").innerHTML = chatName
        
            showchat()

        }
    })

   

}


const signOut = () => {
    firebase.auth().signOut()
        .then(() => {
            document.getElementById("ppic").src = "https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"
            document.getElementById("ppic").title = ''

            document.getElementById("ppic1").src = "https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"
            document.getElementById("ppic1").title = ''

            document.getElementById("personName").innerHTML = "&nbsp &nbsp " + "Anonymous"

            document.getElementById('lnksignIn').style = ''
            document.getElementById('lnksignOut').style = 'display:none'
            document.getElementById("lnkNewChat").style = 'display:none'
            

        })
        .catch(() => {
            document.getElementById("ppic").src = firebase.auth().currentUser.photoURL
            document.getElementById("ppic").title = firebase.auth().currentUser.displayName

            document.getElementById("ppic1").src = firebase.auth().currentUser.photoURL
            document.getElementById("ppic1").title = firebase.auth().currentUser.displayName

            document.getElementById("personName").innerHTML = "&nbsp &nbsp " + myName

            document.getElementById('lnksignIn').style = 'display:none'
            document.getElementById('lnksignOut').style = ''
            document.getElementById("lnkNewChat").style = ''

            // firebase.database().ref("users").push().set({
            //     "name": myName,
            //     "photoURL": firebase.auth().currentUser.photoURL,
            //     "userID": firebase.auth().currentUser.uid
            // })

        })
}


function getName() {
    console.log(myName)
    console.log(profilepic)


}
let aween
function check() {
    aween = document.getElementById("a").value
    console.log(aween)
}

function onKeyDown() {
    document.addEventListener("keydown", function (key) {
        if (key.keyCode === 13) {
            sendMessage()
        }

    })
}
function sendMessage() {
    let message = document.getElementById("message").value;




    let msg = `<div class="row justify-content-end mt-2">
   <div class="col-6 col-sm-6 col-md-6 sent" style="display: inline-block;">

       <div style="display: inline-block;">
           <h6 style="color: indianred;">
           ${myName}
           </h6>
           <p>
           ${document.getElementById('message').value}
               <span class="time float-right">6:12 pm</span>
           </p>
       </div>

   </div>
</div>`

    document.getElementById('messages').innerHTML += msg
    //document.getElementById('message').value = ""
    document.getElementById('message').focus()


    document.getElementById("messages").scrollTo(0, document.getElementById("messages").clientHeight)

    // firebase.database().ref("messages").push().set({
    //     "sender": myName,
    //     "message": message
    // })

    return false;

}

//listen for upcomming message
firebase.database().ref("messages").on("child_added", function (data) {
    var liData = ""

    //give each msg a unique id
    liData += "<li id='message-" + data.key + "' >"

    if (data.val().sender == myName) {
        liData += "<button data-id='" + data.key + "' onclick = 'delMsg(this);'>";
        liData += "Delete"
        liData += "</button>"
    }


    //  liData += "<li>"
    liData += data.val().sender + "   &nbsp==>&nbsp   " + data.val().message

    liData += "</li>"

    //document.getElementById("messages").innerHTML += liData
})

var msgID
function delMsg(self) {
    //get message id
    msgID = self.getAttribute("data-id");
    // console.log(msgID)
    //delete message
    firebase.database().ref("messages").child(msgID).remove()

}
//attach listner for delete message
firebase.database().ref("messages").on("child_removed", function (data) {

    //Remove the message node
    document.getElementById("message-" + data.key).innerHTML = "This message has been removed"
})


// function onFirebaseStateChanged() {
//     firebase.auth().onAuthStateChanged(onStateChange)
// }

// function onStateChange(user) {
//     if (user) {


//     }
//     else {

//     }
// }

//call with state change
//onFirebaseStateChanged()


//to loading circle in friend list popup
function populateFrndList() {
    document.getElementById('lstFrnd').innerHTML = `<div class="text-center">
                                                        <span class="spinner-border text-primary mt-5" style="width:7rem; height:7rem" ></span>
                                                    </div>`;


    //fetching users list data from database
    var lst = ''
    var db = firebase.database().ref('users')
    db.on('value', function (users) {

        if (users.hasChildren()) {
            //search bar
            lst = `<div class="col-md-11">
                    <input type="text" placeholder="Search or start new chat"
                        class="form-rounded form-control">
                    </div>`
        }


        users.forEach(function (data) {
            var usr = data.val()
            
            if(usr.userid !== firebase.auth().currentUser.uid){

                //list
            lst += `<li class="list-group-item list-group-item-action" data-dismiss="modal" style="cursor: pointer;"
            onclick="startChat('${data.key}','${usr.name}','${usr.photoURL}')">
            <div class="row">



                <div class="col-md-2">
                    <img src="${usr.photoURL}"
                        alt="" class="freindpics rounded-circle">

                </div>

                <div class="col-md-10">
                    <div class="name">
                        <h6 id="1">${usr.name}</h6>
                    </div>
                </div>
            </div>
        </li>`


            }
                    })

        document.getElementById('lstFrnd').innerHTML = lst

    })

}
