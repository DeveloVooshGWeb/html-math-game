const ERR_MESSAGES = {
    HTML: {
        CALLING: "ERR_NOT_VALID_HTML_CALLING_FILE",
        COMMAND: "ERR_NOT_VALID_HTML_COMMAND",
    },
    JS: {
        COMMAND: "ERR_NOT_VALID_JS_COMMAND",
    },
}

const START_MATH_APP = (HTML_MESSAGE) => {
    function ERROR() {
        document.querySelector("body").innerHTML = "";
        window.location = "index.html";
    }
    if (HTML_MESSAGE == "VALID_HTML_CALLING_FILE") {
        document.querySelector("body").style.background = "linear-gradient(to right, #031321, #032332)";
        TOGGLED = 0;
        USAGE100 = 1;
        USAGE200 = 1;
        USAGE500 = 1;
        USAGE1000 = 1;
        PLAYER_LOG = document.querySelectorAll("h3");
        PLAYER_CHANCES = 3;
        PLAYER_SCORE = 0;
        BUTTONS = document.querySelectorAll("button");
        RESET = 1;
        if (RESET == 1) {
        NUM1 = document.querySelector(".num1");
        NUM2 = document.querySelector(".num2");
        OPERATION = document.querySelector(".operation");
        CHOSENNUM1 = parseInt(GET_NUMBERS());
        CHOSENNUM2 = parseInt(GET_NUMBERS());
        CHOSENOPERATION = GET_OPERATION();
        if (CHOSENNUM1 > CHOSENNUM2 && CHOSENOPERATION == "/" && (CHOSENNUM1 / CHOSENNUM2) == parseInt(CHOSENNUM1 / CHOSENNUM2)) {
        NUM1.textContent = CHOSENNUM1;
        NUM2.textContent = CHOSENNUM2;
        OPERATION.textContent = CHOSENOPERATION;
        RESET = 0;
        } else if (CHOSENOPERATION != "/") {
            NUM1.textContent = CHOSENNUM1;
        NUM2.textContent = CHOSENNUM2;
        OPERATION.textContent = CHOSENOPERATION;
        RESET = 0;
        } else {
            RESET = 0;
            RESET = 1;
        }
        if ((CHOSENNUM1 + CHOSENNUM2) < 200 || (CHOSENNUM1 - CHOSENNUM2) < 200 || (CHOSENNUM1 * CHOSENNUM2) < 200 || (CHOSENNUM1 / CHOSENNUM2) < 200) {
            NUM1.textContent = CHOSENNUM1;
        NUM2.textContent = CHOSENNUM2;
        OPERATION.textContent = CHOSENOPERATION;
        RESET = 0;
        } else {
            RESET = 0;
            RESET = 1;
        }
    }

    let USAGE = 0;
        BUTTONS.forEach(BUTTON => {
            BUTTON.addEventListener("click", function() {
                USAGE++
                if (USAGE == 1) {
                ENTEREDVALUE = document.querySelector(".answer");
                if (ENTEREDVALUE.value) {
                if (CHOSENOPERATION == "+") {
                    if (ENTEREDVALUE.value == (CHOSENNUM1 + CHOSENNUM2)) {
                    PLAYER_SCORE++
                    UPDATE_SCORES();
                    RESET = 1;
                    } else {
                        PLAYER_LOG.forEach(LOG => {
                            LOG.style.animation = "wrong 1s ease";
                        LOG.addEventListener("animationend", function() {
                            this.style.animation = "";
                        })
                        LOG.textContent = "Wrong Answer!!!";
                        setTimeout(() => {
                            LOG.textContent = "Answer The Question";
                            USAGE = 0;
                        }, 1000)
                        })
                        PLAYER_CHANCES--
                        document.querySelector(".player-chances p").textContent = PLAYER_CHANCES;
                        RESET = 1;
                    }
                } else if (CHOSENOPERATION == "-") {
                    if (ENTEREDVALUE.value == (CHOSENNUM1 - CHOSENNUM2)) {
                        PLAYER_SCORE++
                        UPDATE_SCORES();
                    } else {
                        PLAYER_LOG.forEach(LOG => {
                            LOG.style.animation = "wrong 1s ease";
                        LOG.addEventListener("animationend", function() {
                            this.style.animation = "";
                        })
                        LOG.textContent = "Wrong Answer!!!";
                        setTimeout(() => {
                            LOG.textContent = "Answer The Question";
                            USAGE = 0;
                        }, 1000)
                        })
                        PLAYER_CHANCES--
                        document.querySelector(".player-chances p").textContent = PLAYER_CHANCES;
                        RESET = 1;
                    }
                } else if (CHOSENOPERATION == "*") {
                    if (ENTEREDVALUE.value == (CHOSENNUM1 * CHOSENNUM2)) {
                        PLAYER_SCORE++
                        UPDATE_SCORES();
                    } else {
                        PLAYER_LOG.forEach(LOG => {
                            LOG.style.animation = "wrong 1s ease";
                        LOG.addEventListener("animationend", function() {
                            this.style.animation = "";
                        })
                        LOG.textContent = "Wrong Answer!!!";
                        setTimeout(() => {
                            LOG.textContent = "Answer The Question";
                            USAGE = 0;
                        }, 1000)
                        })
                        PLAYER_CHANCES--
                        document.querySelector(".player-chances p").textContent = PLAYER_CHANCES;
                        RESET = 1;
                    }
                } else if (CHOSENOPERATION == "/") {
                    if (ENTEREDVALUE.value == Math.round(CHOSENNUM1 / CHOSENNUM2)) {
                        PLAYER_SCORE++
                        UPDATE_SCORES();
                    } else {
                        PLAYER_LOG.forEach(LOG => {
                            LOG.style.animation = "wrong 1s ease";
                        LOG.addEventListener("animationend", function() {
                            this.style.animation = "";
                        })
                        LOG.textContent = "Wrong Answer!!!";
                        setTimeout(() => {
                            LOG.textContent = "Answer The Question";
                            USAGE = 0;
                        }, 1000)
                        })
                        PLAYER_CHANCES--
                        document.querySelector(".player-chances p").textContent = PLAYER_CHANCES;
                        RESET = 1;
                    }
                } else {
                    PLAYER_LOG.forEach(LOG => {
                        LOG.style.animation = "wrong 1s ease";
                    LOG.addEventListener("animationend", function() {
                        this.style.animation = "";
                    })
                    LOG.textContent = "Wrong Answer!!!";
                    setTimeout(() => {
                        LOG.textContent = "Answer The Question";
                        USAGE = 0;
                    }, 1000)
                    })
                    PLAYER_CHANCES--
                    document.querySelector(".player-chances p").textContent = PLAYER_CHANCES;
                    RESET = 1;
                }
                function UPDATE_SCORES() {
                    document.querySelector(".player-score p").textContent = PLAYER_SCORE;
                    document.querySelector(".player-chances p").textContent = PLAYER_CHANCES;
                    RESET = 1;
                }
                if (RESET == 1) {
                    NUM1 = document.querySelector(".num1");
                    NUM2 = document.querySelector(".num2");
                    OPERATION = document.querySelector(".operation");
                    CHOSENNUM1 = GET_NUMBERS();
                    CHOSENNUM2 = GET_NUMBERS();
                    CHOSENOPERATION = GET_OPERATION();
                    if (CHOSENNUM1 > CHOSENNUM2 && CHOSENOPERATION == "/" && (CHOSENNUM1 / CHOSENNUM2) == parseInt(CHOSENNUM1 / CHOSENNUM2) && ((CHOSENNUM1 + CHOSENNUM2) < 200 || (CHOSENNUM1 - CHOSENNUM2) < 200 || (CHOSENNUM1 * CHOSENNUM2) < 200 || (CHOSENNUM1 / CHOSENNUM2) < 200)) {
                        NUM1.textContent = CHOSENNUM1;
                        NUM2.textContent = CHOSENNUM2;
                        OPERATION.textContent = CHOSENOPERATION;
                        RESET = 0;
                        } else if (CHOSENOPERATION != "/") {
                            NUM1.textContent = CHOSENNUM1;
                        NUM2.textContent = CHOSENNUM2;
                        OPERATION.textContent = CHOSENOPERATION;
                        RESET = 0;
                        } else {
                            RESET = 0;
                            RESET = 1;
                        }
                }
                document.querySelector(".answer").value = "";
                if (PLAYER_CHANCES < 1) {
                    alert("NO MORE CHANCES");
                    alert("YOUR FINAL SCORE IS " + PLAYER_SCORE);
                    window.location = "https://www." + PLAYER_SCORE + ".com";
                }

                if (PLAYER_SCORE >= 100) {
                    if (USAGE100 = 1) {
                    alert("Congrats You Reached 100 Points!!!");
                    USAGE100 = 0;
                    }
            }
            if (PLAYER_SCORE >= 200) {
                if (USAGE200 = 1) {
                alert("Congrats You Reached 200 Points!!!");
                USAGE200 = 0;
                }
            }
            if (PLAYER_SCORE >= 500) {
                if (USAGE500 = 1) {
                alert("Congrats You Reached 500 Points!!!");
                USAGE500 = 0;
                }
            }
            if (PLAYER_SCORE >= 1000) {
                if (USAGE1000 = 1) {
                alert("Congrats You Reached 1000 Points!!!");
                document.querySelector("body").innerHTML = "<h3 class='log-text'>You Win!!!</h3>";
                USAGE1000 = 0;
                }
            }
            }
        }
            })
        })
        function DEBUGENABLE() {}
function DEBUGDISABLE() {}
    } else {
        alert(ERR_MESSAGES.HTML.CALLING);
        ERROR();
    }
}