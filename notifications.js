const countNotifications = document.querySelector("#countNotifications");
const Mark = document.querySelector("#Mark");
const Angela = document.querySelector("#Angela");
const Jacob = document.querySelector("#Jacob");
const Rizky = document.querySelector("#Rizky");
const Kimberely = document.querySelector("#Kimberely");
const Nathan = document.querySelector("#Nathan");
const Anna = document.querySelector("#Anna");


function changeCount(params) {
    const countNotifications = document.querySelector("#countNotifications");
    const Mark = document.querySelector("#Mark");
    const Angela = document.querySelector("#Angela");
    const Jacob = document.querySelector("#Jacob");
    const Rizky = document.querySelector("#Rizky");
    const Kimberely = document.querySelector("#Kimberely");
    const Nathan = document.querySelector("#Nathan");
    const Anna = document.querySelector("#Anna");
    const Markdot = document.querySelector("#markDot");
    const Angeladot = document.querySelector("#angelDot");
    const Jacobdot = document.querySelector("#jacobDot");
    const Rizkydot = document.querySelector("#rizkyDot");
    const Kimberelydot = document.querySelector("#kimberelyDot");
    const Nathandot = document.querySelector("#nathanDot");
    const Annadot = document.querySelector("#annaDot");

    let countNotification = countNotifications.innerHTML;
    console.log(countNotification)

    Mark.addEventListener("click", function(){
        countNotifications.innerHTML--;
        document.getElementById("markDot").style.display = "none";
        document.getElementById("Mark").style.backgroundColor = "hsl(210, 60%, 98%)";
    },{ once: true }); //making the click event clickable only once//

    
    Angela.addEventListener("click", function(){
        countNotifications.innerHTML--;
        document.getElementById("angelaDot").style.display = "none";
        document.getElementById("Angela").style.backgroundColor = "hsl(210, 60%, 98%)";
    },{ once: true });

    Jacob.addEventListener("click", function(){
        countNotifications.innerHTML--;
        document.getElementById("jacobDot").style.display = "none";
        document.getElementById("Jacob").style.backgroundColor = "hsl(210, 60%, 98%)";
    },{ once: true });

    Rizky.addEventListener("click", function(){
        countNotifications.innerHTML--;
        document.getElementById("rizkyDot").style.display = "none";
        document.getElementById("Rizky").style.backgroundColor = "hsl(210, 60%, 98%)";
    },{ once: true });

    Kimberely.addEventListener("click", function(){
        countNotifications.innerHTML--;
        document.getElementById("kimberelyDot").style.display = "none";
        document.getElementById("Kimberely").style.backgroundColor = "hsl(210, 60%, 98%)";
    },{ once: true });

    Nathan.addEventListener("click", function(){
        countNotifications.innerHTML--;
        document.getElementById("nathanDot").style.display = "none";
        document.getElementById("Nathan").style.backgroundColor = "hsl(210, 60%, 98%)";
    },{ once: true });

    Anna.addEventListener("click", function(){
        countNotifications.innerHTML--;
        document.getElementById("annaDot").style.display = "none";
        document.getElementById("Anna").style.backgroundColor = "hsl(210, 60%, 98%)";
    },{ once: true });

}

changeCount();

function displayParagraph(params) {
    const Rizky = document.querySelector("#Rizky");
    const rizkyParagraph = document.querySelector("#paragraph");
    console.log(rizkyParagraph)
    const chevronUp = document.querySelector("#chevronUp");
    const chevronDown = document.querySelector("#chevronDown");

    chevronDown.addEventListener("click", function(){
        document.getElementById("paragraph").style.display = "block"
        chevronDown.style.display = "none"
        chevronUp.style.display = "inline-block"
    });
    chevronUp.addEventListener("click", function(){
        document.getElementById("paragraph").style.display = "none";
        chevronUp.style.display = "none"
        chevronDown.style.display = "inline-block"
    })
}

displayParagraph();

function clearNotifications(params) {
    const countNotifications = document.querySelector("#countNotifications");
    const Mark = document.querySelector("#Mark");
    const Angela = document.querySelector("#Angela");
    const Jacob = document.querySelector("#Jacob");
    const Rizky = document.querySelector("#Rizky");
    const Kimberely = document.querySelector("#Kimberely");
    const Nathan = document.querySelector("#Nathan");
    const Anna = document.querySelector("#Anna");
    const Markdot = document.querySelector("#markDot");
    const Angeladot = document.querySelector("#angelDot");
    const Jacobdot = document.querySelector("#jacobDot");
    const Rizkydot = document.querySelector("#rizkyDot");
    const Kimberelydot = document.querySelector("#kimberelyDot");
    const Nathandot = document.querySelector("#nathanDot");
    const Annadot = document.querySelector("#annaDot");
    const unread = document.querySelector("#unread");
    const chevronUp = document.querySelector("#chevronUp");
    const chevronDown = document.querySelector("#chevronDown");
    
    let countNotification = countNotifications.innerHTML;

    unread.addEventListener("click", function(){
        document.getElementById("Mark").style.backgroundColor = "hsl(210, 60%, 98%)";
        document.getElementById("markDot").style.display = "none";
        countNotifications.innerHTML = 0;
        document.getElementById("Anna").style.backgroundColor = "hsl(210, 60%, 98%)";
        document.getElementById("annaDot").style.display = "none";
        document.getElementById("Nathan").style.backgroundColor = "hsl(210, 60%, 98%)";
        document.getElementById("nathanDot").style.display = "none";
        document.getElementById("Angela").style.backgroundColor = "hsl(210, 60%, 98%)";
        document.getElementById("angelaDot").style.display = "none";
        document.getElementById("Jacob").style.backgroundColor = "hsl(210, 60%, 98%)";
        document.getElementById("jacobDot").style.display = "none";
        document.getElementById("Rizky").style.backgroundColor = "hsl(210, 60%, 98%)";
        document.getElementById("rizkyDot").style.display = "none";
        document.getElementById("Kimberely").style.backgroundColor = "hsl(210, 60%, 98%)";
        document.getElementById("kimberelyDot").style.display = "none";
        chevronDown.style.display = "none";
    }),{once: true};
}

clearNotifications()

function viewMark(params) {
    const Markprofile = document.querySelector("#Markprofile");
    const MarkPhoto = document.querySelector("#Markphoto");

    MarkPhoto.addEventListener("mouseover", function(){
        document.getElementById("Markprofile").style.display = "inline-block";
    
        Markprofile.addEventListener('mouseover', function(){
            document.getElementById("Markprofile").style.display = "inline-block";
        });
    });

    Markprofile.addEventListener("mouseout", function(){
        document.getElementById("Markprofile").style.display = "none";

    });

}
viewMark();

function viewAngela(params) {

    const Angelaprofile = document.querySelector("#Angelaprofile");
    const Angelaphoto = document.querySelector("#Angelaphoto");
    console.log(Angelaphoto, Angelaprofile)

    Angelaphoto.addEventListener("mouseover", function(){
        document.getElementById("Angelaprofile").style.display = "inline-block";
    
        Angelaprofile.addEventListener('mouseover', function(){
            document.getElementById("Angelaprofile").style.display = "inline-block";
        });
    });
    
    Angelaprofile.addEventListener("mouseout", function(){
        document.getElementById("Angelaprofile").style.display = "none";

    });
}

viewAngela();

function viewJacob(params) {

    const Jacobprofile = document.querySelector("#Jacobprofile");
    const Jacobphoto = document.querySelector("#Jacobphoto");

    Jacobphoto.addEventListener("mouseover", function(){
        document.getElementById("Jacobprofile").style.display = "inline-block";
    
        Jacobprofile.addEventListener('mouseover', function(){
            document.getElementById("Jacobprofile").style.display = "inline-block";
        });
    });
    
    Jacobprofile.addEventListener("mouseout", function(){
        document.getElementById("Jacobprofile").style.display = "none";

    });
}

viewJacob();


function viewRizky(params) {

    const Rizkyprofile = document.querySelector("#Rizkyprofile");
    const Rizkyphoto = document.querySelector("#Rizkyphoto");

    Rizkyphoto.addEventListener("mouseover", function(){
        document.getElementById("Rizkyprofile").style.display = "inline-block";
    
        Rizkyprofile.addEventListener('mouseover', function(){
            document.getElementById("Rizkyprofile").style.display = "inline-block";
        });
    });
    
    Rizkyprofile.addEventListener("mouseout", function(){
        document.getElementById("Rizkyprofile").style.display = "none";

    });
}

viewRizky();

function viewKimberely(params) {

    const Kimberelyprofile = document.querySelector("#Kimberelyprofile");
    const Kimberelyphoto = document.querySelector("#Kimberelyphoto");
    console.log(Kimberelyphoto, Kimberelyprofile)

    Kimberelyphoto.addEventListener("mouseover", function(){
        document.getElementById("Kimberelyprofile").style.display = "inline-block";
    
        Kimberelyprofile.addEventListener('mouseover', function(){
            document.getElementById("Kimberelyprofile").style.display = "inline-block";
        });
    });
    
    Kimberelyprofile.addEventListener("mouseout", function(){
        document.getElementById("Kimberelyprofile").style.display = "none";

    });
}

viewKimberely();

function viewNathan(params) {
    const Nathanprofile = document.querySelector("#Nathanprofile");
    const Nathanphoto = document.querySelector("#Nathanphoto");

    Nathanphoto.addEventListener("mouseover", function(){
        document.getElementById("Nathanprofile").style.display = "inline-block";
    
        Nathanprofile.addEventListener('mouseover', function(){
            document.getElementById("Nathanprofile").style.display = "inline-block";
        });
    });

    Nathanprofile.addEventListener("mouseout", function(){
        document.getElementById("Nathanprofile").style.display = "none";

    });

};
viewNathan();

function viewAnna(params) {
    const Annaprofile = document.querySelector("#Annaprofile");
    const Annaphoto = document.querySelector("#Annaphoto");

    Annaphoto.addEventListener("mouseover", function(){
        document.getElementById("Annaprofile").style.display = "inline-block";
    
        Annaprofile.addEventListener('mouseover', function(){
            document.getElementById("Annaprofile").style.display = "inline-block";
        });
    });

    Annaprofile.addEventListener("mouseout", function(){
        document.getElementById("Annaprofile").style.display = "none";

    });

};

viewAnna();


const Markprofile = document.querySelector("#Markprofile");
const MarkPhoto = document.querySelector("#Markphoto");
const Angelaprofile = document.querySelector("#Angelaprofile");
const Angelaphoto = document.querySelector("#Angelaphoto");
const Jacobprofile = document.querySelector("#Jacobprofile");
const Jacobphoto = document.querySelector("#Jacobphoto");
const Rizkyprofile = document.querySelector("#Rizkyprofile");
const Rizkyphoto = document.querySelector("#Rizkyphoto");
const Kimberelyprofile = document.querySelector("#Kimberelyprofile");
const Kimberelyphoto = document.querySelector("#Kimberelyphoto");
const Nathanprofile = document.querySelector("#Nathanprofile");
const Nathanphoto = document.querySelector("#Nathanphoto");
const Annaprofile = document.querySelector("#Annaprofile");
const Annaphoto = document.querySelector("#Annaphoto");

const hides =  [
    document.getElementById("Markprofile"),
    document.getElementById("Angelaprofile"),
    document.getElementById("Jacobprofile"),
    document.getElementById("Rizkyprofile"),
    document.getElementById("Kimberelyprofile"),
    document.getElementById("Nathanprofile"),
    document.getElementById("Annaprofile")
];

window.addEventListener("click", function(){
    hides.forEach(function(hide){
        hide.style.display = "none"
    });
});

hides.forEach(function (hide) {
    hide.addEventListener("click", function(event){
        event.stopPropagation();
    });
});


function follow(params) {
    const following1= document.getElementById("following1");
        following1.addEventListener("click", function(){
            document.getElementById("following1").innerHTML = "Following";
            document.getElementById("following1").style.color = "hsl(219, 85%, 26%)";
        });
        const following2= document.getElementById("following2");
        following2.addEventListener("click", function(){
            document.getElementById("following2").innerHTML = "Following";
            document.getElementById("following2").style.color = "hsl(219, 85%, 26%)"
        });
        const following3= document.getElementById("following3");
        following3.addEventListener("click", function(){
            document.getElementById("following3").innerHTML = "Following";
            document.getElementById("following3").style.color = "hsl(219, 85%, 26%)"
        });
        const following4= document.getElementById("following4");
        following4.addEventListener("click", function(){
            document.getElementById("following4").innerHTML = "Following";
            document.getElementById("following4").style.color = "hsl(219, 85%, 26%)"
        });
        const following5= document.getElementById("following5");
        following5.addEventListener("click", function(){
            document.getElementById("following5").innerHTML = "Following";
            document.getElementById("following5").style.color = "hsl(219, 85%, 26%)"
        });
        const following6= document.getElementById("following6");
        following6.addEventListener("click", function(){
            document.getElementById("following6").innerHTML = "Following";
            document.getElementById("following6").style.color = "hsl(219, 85%, 26%)"
        });
        const following7= document.getElementById("following7");
        following7.addEventListener("click", function(){
            document.getElementById("following7").innerHTML = "Following";
            document.getElementById("following7").style.color = "hsl(219, 85%, 26%)"
        });
    
};

follow();

function doUnd01(params) {
    const following1= document.getElementById("following1");
    const add1 = document.getElementById("add1");
    let clickCount = 0;

    following1.addEventListener("click", function() {
    clickCount++;

    if (clickCount % 2 === 1) {
        document.getElementById("following1").innerText = "Following";
        document.getElementById("add1").innerHTML++;

    } else {
        document.getElementById("following1") .innerText = "Follow";
        document.getElementById("add1").innerHTML--;
    }
});

}

doUnd01();

function doUnd02(params) {
    const following2= document.getElementById("following2");
    const add2 = document.getElementById("add2");
    let clickCount = 0;

    following2.addEventListener("click", function() {
    clickCount++;

    if (clickCount % 2 === 1) {
        document.getElementById("following2").innerText = "Following";
        document.getElementById("add2").innerHTML++;
    } else {
        document.getElementById("following2") .innerText = "Follow";
        document.getElementById("add2").innerHTML--;
    }
});

}

doUnd02();

function doUnd03(params) {
    const following3= document.getElementById("following3");
    const add3 = document.getElementById("add3");
    let clickCount = 0;

    following3.addEventListener("click", function() {
    clickCount++;

    if (clickCount % 2 === 1) {
        document.getElementById("following3").innerText = "Following";
        document.getElementById("add3").innerHTML++;
    } else {
        document.getElementById("following3") .innerText = "Follow";
        document.getElementById("add3").innerHTML--;
    }
});

}

doUnd03();

function doUnd04(params) {
    const following4= document.getElementById("following4");
    const add4 = document.getElementById("add4");
    let clickCount = 0;

    following4.addEventListener("click", function() {
    clickCount++;

    if (clickCount % 2 === 1) {
        document.getElementById("following4").innerText = "Following";
        document.getElementById("add4").innerHTML++;
    } else {
        document.getElementById("following4") .innerText = "Follow";
        document.getElementById("add4").innerHTML--;
    }
});

}

doUnd04();

function doUnd05(params) {
    const following5= document.getElementById("following5");
    const add5 = document.getElementById("add5");
    let clickCount = 0;

    following5.addEventListener("click", function() {
    clickCount++;

    if (clickCount % 2 === 1) {
        document.getElementById("following5").innerText = "Following";
        document.getElementById("add5").innerHTML++;
    } else {
        document.getElementById("following5") .innerText = "Follow";
        document.getElementById("add5").innerHTML--;
    }
});

}

doUnd05();

function doUnd06(params) {
    const following6= document.getElementById("following6");
    const add6 = document.getElementById("add6");
    let clickCount = 0;

    following6.addEventListener("click", function() {
    clickCount++;

    if (clickCount % 2 === 1) {
        document.getElementById("following6").innerText = "Following";
        document.getElementById("add6").innerHTML++;
        
    } else {
        document.getElementById("following6") .innerText = "Follow";
        document.getElementById("add6").innerHTML--;

    }
});

}

doUnd06();

function doUnd07(params) {
    const following7= document.getElementById("following7");
    const add7 = document.getElementById("add7");
    let clickCount = 0;

    following7.addEventListener("click", function() {
    clickCount++;

    if (clickCount % 2 === 1) {//2 is the number of clicks, 1 is the remainder(If the remainder of clicks is 1, then execute the below if else code)// 
        document.getElementById("following7").innerText = "Following";
        document.getElementById("add7").innerHTML++;
    } else {
        document.getElementById("following7") .innerText = "Follow";
        document.getElementById("add7").innerHTML--;
    }
});

}

doUnd07();
