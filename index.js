
localStorage.setItem("boolean","false");
const username = document.getElementById("name");
localStorage.setItem("username",username);
    document.addEventListener('submit',function (e) {
        e.preventDefault();
        var comboBox = document.getElementById("#comboBox");



        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        let userType =null;
        if (age<=12){
            userType = "child";
        }
        else if(age<=19 && age>=13)
            userType = "teen";
        else
            userType = "adults";

        console.log(userType);
        //going to the next page
        localStorage.setItem("userType",userType);

        window.location.assign("topic.html");

    })