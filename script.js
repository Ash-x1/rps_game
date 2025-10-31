

const div = document.querySelector("#div");
const divResult = document.createElement("div");
divResult.textContent = `...`;
div.appendChild(divResult);

const rock_ai = 1;
const paper_ai = 2;
const scissors_ai = 3;

let user_choice;
    function game(){


        const ai = Math.floor(Math.random() * 3) + 1;



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



const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", ()=> {user_choice = rock_ai; game()});
const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", ()=> {user_choice = paper_ai; game()});
const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", ()=> {user_choice = scissors_ai; game()});


