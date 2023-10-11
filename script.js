let buttonOne= document.getElementById('1');
let buttonTwo= document.getElementById('2');
let buttonThree= document.getElementById('3');
let buttonFour= document.getElementById('4');
let buttonFive= document.getElementById('5');
let buttonSix= document.getElementById('6');
let popup = document.querySelector('.game_popup');
let iframe = document.querySelector('.game_iframe');



buttonOne.addEventListener('click',function(){
    popup.style.display = "block";
    iframe.src = "https://casinoguru-en.com/embedGame?identifier=980b653b-6276-497f-8b43-23b8361ad77c"
    });


    buttonTwo.addEventListener('click',function(){
        popup.style.display = "block";
        iframe.src = "https://casinoguru-en.com/embedGame?identifier=17e3beef-3c98-4112-8955-e0d396d330f7"
        });

        buttonThree.addEventListener('click',function(){
            popup.style.display = "block";
            iframe.src = "https://casinoguru-en.com/embedGame?identifier=86e8d2a9-9ec3-48d5-bbb8-ea6756912157"
            });


            buttonFour.addEventListener('click',function(){
                popup.style.display = "block";
                iframe.src = "https://casinoguru-en.com/embedGame?identifier=33d9bfc5-f601-4399-b128-3abed58924c9"
                });


                buttonFive.addEventListener('click',function(){
                    popup.style.display = "block";
                    iframe.src = "https://casinoguru-en.com/embedGame?identifier=45fb8a6a-b127-4b6f-b3e6-ccb6598557e5"
                    });

                    buttonSix.addEventListener('click',function(){
                        popup.style.display = "block";
                        iframe.src = "https://casinoguru-en.com/embedGame?identifier=cebf541a-2e79-4d95-83d9-344191ef9185"
                        });

    popup.addEventListener('click',function(){
        popup.style.display = "none";
    });