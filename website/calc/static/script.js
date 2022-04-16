var counter = 0;

var settingsMenu = document.querySelector(".settings-menu");

function likebtn() {
    counter++;
    document.getElementById("votes").innerHTML = counter;
}

function dislikebtn() {
    counter--;
    document.getElementById("votes_1").innerHTML = counter;
}

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}


function comment_fun(){
    const question=document.getElementById("question").value;
    console.log(question)
    // const dict_values={question}
    // const s=JSON.stringify(dict_values);
    // console.log(s);
    // $.ajax({
    //     URL:'/comment',
    //     type:'POST',
    //     contentType:'application/json',
    //     data:JSON.stringify(s)
    // });
}