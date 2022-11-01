const btn = document.querySelector('button');//call button
const img = document.getElementById("image");//call image
const form = document.querySelector("form");//call form

const input1 = document.getElementById('user1'); // player 1 name
const input2 = document.getElementById('user2'); // player 2 name
const time = document.getElementById('time'); // it is "-" time!

let counter = 0;//number of clicks
let maxi = 20;//max amount of clicks
let randomNum = Math.ceil(Math.random() * 20);//1 - 20

btn.innerHTML = "Click Me!";//add button a tetx

// when click on the button
btn.onclick = () => {
    
    // if both player names isn't blank:
    if(( input1.value ) && ( input2.value )){
        
        form.style.display = 'none';// form to add player's name dissapear
        counter++;//increase counter
        maxi--;//decrease the maximun num.

        // while counter is less than the choosen number
        if(counter < randomNum){
            
            btn.innerHTML = "Luck! Click Again! "+maxi;
            btn.classList.add('btn');

            if( maxi % 2 === 0){
                time.innerHTML = input1.value+" you're Lucky!";
            }else{
                time.innerHTML = input2.value+" you're Lucky!";
            }

        }else{
            // randomly choose a image (for gameover)
            let randomImg = Math.floor( Math.random() * 7 );// 0 - 7
            
            // pick a random cat picture
            for( let i = 1; i <= 7; i++ ) {
                switch(randomImg){
                    case i-1: img.src = `IMG/catgun_${i}.jpg`; break;
                }
            }

            // change button text
            btn.innerHTML = "RELOAD";

            // if counter is equal the random choosen number (game over)
            if( counter === randomNum ){
                if( maxi % 2 === 0){
                    time.innerHTML = input1.value+" Lose";
                }else{
                    time.innerHTML = input2.value+" Lose";
                }
            }

        }

        // when click reload, it will increase the counter then it will became greater then the randomNum
        // so before it, reload the page
        if(counter === randomNum+1){
            location.reload();//reload the page duh
        }


    }

}