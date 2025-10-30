/*
const msg = document.getElementById("msg");
const player_input = document.getElementById("player_input");
*/



    function game(){
        const rock_ai = 1;
        const paper_ai = 2;
        const scissors_ai = 3;
        let user;
        let ai;

        ai = Math.floor(Math.random() * 3) + 1;

        user = window.prompt(`Add you choice here (rock, paper, scissors): `);
        user = user.toLowerCase();

        let user_choice;
        if (user === "rock") {
            user_choice = rock_ai;
        } else if (user === "paper") {
            user_choice = paper_ai;
        } else if (user === "scissors") {
            user_choice = scissors_ai;
        } else {
            return alert("Invalid choice!");
        }
    
        if((user_choice == rock_ai && ai == scissors_ai) || (user_choice == paper_ai && ai == rock_ai) || (user_choice == scissors_ai && ai == paper_ai)){
        divResult.textContent = `CONGRATULATIONS`;
    }
        else if((user_choice == rock_ai && ai == paper_ai) || (user_choice == paper_ai && ai == scissors_ai) || (user_choice == scissors_ai && ai == rock_ai)){
        divResult.textContent = `You have LOST`;
    }

        else if((user_choice == rock_ai && ai == rock_ai) || (user_choice == paper_ai && ai == paper_ai) || (user_choice == scissors_ai && ai == scissors_ai)){
        divResult.textContent = `That was a DRAW`;
    }

        else{
        divResult.textContent = `...`;
    }
    }

const btn = document.querySelector("button");
btn.addEventListener("click", game);

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", user_choice = rock_ai)
const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", user_choice = paper_ai)
const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", user_choice = scissors_ai)




const div = document.querySelector("div");
const divResult = document.createElement("div");
divResult.textContent = `...`;
div.appendChild(divResult);

