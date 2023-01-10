var number = document.getElementsByClassName("number");
var screen = document.getElementById("screen1");

// number on screen
number[0].addEventListener("click", function(){
    screen.value += number[0].innerText;
});
number[1].addEventListener("click", function(){
    screen.value += number[1].innerText;
});
number[2].addEventListener("click", function(){
    screen.value += number[2].innerText;
});
number[3].addEventListener("click", function(){
    screen.value += number[3].innerText;
});
number[4].addEventListener("click", function(){
    screen.value += number[4].innerText;
});
number[5].addEventListener("click", function(){
    screen.value += number[5].innerText;
});
number[6].addEventListener("click", function(){
    screen.value += number[6].innerText;
});
number[7].addEventListener("click", function(){
    screen.value += number[7].innerText;
});
number[8].addEventListener("click", function(){
    screen.value += number[8].innerText;
});
number[9].addEventListener("click", function(){
    screen.value += number[9].innerText;
});

// Operators on screen
var operator = document.getElementsByClassName("operator");
operator[0].addEventListener("click", function(){
    screen.value += operator[0].value;
});
operator[1].addEventListener("click", function(){
    screen.value += operator[1].value;
});
operator[2].addEventListener("click", function(){
    screen.value += operator[2].value;
});
operator[3].addEventListener("click", function(){
    screen.value += operator[3].value;
});

// Functions of Operator
var equal = document.getElementById("equal");
equal.addEventListener("click", function(){
    var exp = eval(screen.value);
    screen.value = exp;
});

// CE
var ce = document.getElementById("clear-screen");
ce.addEventListener("click", function(){
    screen.value="";
});

// C
var c = document.getElementById("clear");
c.addEventListener("click", function(){
    screen.value="";
});

// backspace
var backspace = document.getElementById("backspace");
backspace.addEventListener("click", function(){
    screen.value = screen.value.substring(0, screen.value.length-1);
})

// plus-minus
var pm = document.getElementById("plus-minus");
pm.addEventListener("click", function(){
    var value = parseFloat(screen.value);
    if(value > 0)
    {
        screen.value = "-"+screen.value;
    }
    else if(value < 0)
    {
        screen.value = screen.value.substring(1, screen.value.length);
    }
});

// point
var point = document.getElementById("point");
point.addEventListener("click", function(){
    screen.value += point.innerText;
});