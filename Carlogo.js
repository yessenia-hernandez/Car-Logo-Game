var button1 = document.getElementById("previous");
button1.addEventListener("click", () => {
    if (counter == 0) {
        counter++;
    };
    document.getElementById("output").textContent = "";
    document.getElementById("answer").value = "";
    document.getElementById("firstlogo").src = Logos[--counter];
});

var button2 = document.getElementById("next");
button2.addEventListener("click", () => {
    if (counter == 21) {
        counter--;
    };
    document.getElementById("output").textContent = "";
    document.getElementById("answer").value = "";
    document.getElementById("firstlogo").src = Logos[++counter];

});
var button3 = document.getElementById("enter");
button3.addEventListener("click", () => {
    document.getElementById('output').textContent = checkLogos();
    if (Score == 22) {
        document.getElementById('output').textContent = "You guess all the logos correctly. You have won the game!";
    }
});

var Score = 0;
var counter = 0;

var Logos = ["images/img_1.png", "images/img_2.png", "images/img_3.png", "images/img_4.png", "images/img_5.png", "images/img_6.png", "images/img_7.png", "images/img_8.png", "images/img_9.png", "images/img_10.png", "images/img_11.png", "images/img_12.png", "images/img_13.png", "images/img_14.png", "images/img_15.png", "images/img_16.png", "images/img_17.png", "images/img_18.png", "images/img_19.png", "images/img_20.png", "images/img_21.png", "images/img_22.png"];

function checkLogos() {
    if (document.getElementById("answer").value == "Acura" && counter == 0) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Audi" && counter == 1) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Volkswagon" && counter == 2) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Toyota" && counter == 3) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Tesla" && counter == 4) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Subaru" && counter == 5) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Rolls-Royce" && counter == 6) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Cadilac" && counter == 7) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Chevrolet" && counter == 8) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "RAM" && counter == 9) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Mazda" && counter == 10) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Porsche" && counter == 11) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Honda" && counter == 12) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Hyundai" && counter == 13) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Infiniti" && counter == 14) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Jaguar" && counter == 15) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Mercedes-Benz" && counter == 16) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Lexus" && counter == 17) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Mitsubishi" && counter == 18) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Volvo" && counter == 19) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "BMW" && counter == 20) {
        Score++;
        return "Correct!"
    } else if (document.getElementById("answer").value == "Buick" && counter == 21) {
        Score++;
        return "Correct!"
    } else {
        return "Sorry, incorrect. Try again."
    }
}
