console.log('hi');
let game_sts=0;//Game state to track how many cards have been flipped
let flippedcards=[];//Array to store the flipped cards
let current_player=1;//Track the current player (1 or 2)
let ply1_score=0,ply2_score=0;
let matched_pairs=0;//keeps track of matched pairs
let matchedcards = []; // Keeps track of already matched cards

function flip(obj){
    let key=obj.src;// Get the source of the clicked card
    console.log(key)
    // Get the src of all the card images
    const obj1=document.getElementById('box1');
    let val1= obj1.src;
    const obj2=document.getElementById('box2');
    let val2=obj2.src;
    const obj3=document.getElementById('box3');
    let val3=obj3.src;
    const obj4=document.getElementById('box4');
    let val4=obj4.src;
    const obj5=document.getElementById('box5');
    let val5=obj5.src;
    const obj6=document.getElementById('box6');
    let val6=obj6.src;
    const obj7=document.getElementById('box7');
    let val7=obj7.src;
    const obj8=document.getElementById('box8');
    let val8=obj8.src;
    const obj9=document.getElementById('box9');
    let val9=obj9.src;
    const obj10=document.getElementById('box10');
    let val10=obj10.src;
    const obj11=document.getElementById('box11');
    let val11=obj11.src;
    const obj12=document.getElementById('box12');
    let val12=obj12.src;
    const obj13=document.getElementById('box13');
    let val13=obj13.src;
    const obj14=document.getElementById('box14');
    let val14=obj14.src;
    const obj15=document.getElementById('box15');
    let val15=obj15.src;
    const obj16=document.getElementById('box16');
    let val16=obj16.src;
    
    if(game_sts<2 && !flippedcards.includes(obj) && !matchedcards.includes(obj)){
        // Check each card for the clicked object and change its source
        if(obj===obj1){
            obj1.src ="./resources/img-1.png"  
           game_sts++;
           console.log(game_sts);
           flippedcards.push(obj1);// Add flipped card to array
           console.log(flippedcards);
           
        }
    
        else if(obj===obj2){
            obj2.src="./resources/img-2.png"
            game_sts++;
            console.log(game_sts);
            flippedcards.push(obj2);
            console.log(flippedcards);

        }
        else if(obj===obj3){
            obj3.src="./resources/img-1.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj3);
           console.log(flippedcards);
        }
        else if(obj===obj4){
            
            obj4.src="./resources/img-3.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj4);
           console.log(flippedcards);
        }
        else if(obj===obj5){
           
            obj5.src="./resources/img-4.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj5);
           console.log(flippedcards);
        }
        else if(obj===obj6){
    
            obj6.src="./resources/img-4.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj6);
           console.log(flippedcards);
        }
        else if(obj===obj7){
            
            obj7.src="./resources/img-8.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj7);
           console.log(flippedcards);
        }
        else if(obj===obj8){
            
            obj8.src="./resources/img-5.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj8);
           console.log(flippedcards);
        }
        else if(obj===obj9){
          
            obj9.src="./resources/img-2.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj9);
           console.log(flippedcards);
        }
        else if(obj===obj10){
           
            obj10.src="./resources/img-7.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj10);
           console.log(flippedcards);
        }
        else if(obj===obj11){
            
            obj11.src="./resources/img-3.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj11);
           console.log(flippedcards);
        }
        else if(obj===obj12){
            
            obj12.src="./resources/img-6.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj12);
           console.log(flippedcards);
        }
        else if(obj===obj13){
          
            obj13.src="./resources/img-8.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj13);
           console.log(flippedcards);
        }
        else if(obj===obj14){
           
            obj14.src="./resources/img-5.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj14);
           console.log(flippedcards);
        }
        else if(obj===obj15){
            
            obj15.src="./resources/img-6.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj15);
           console.log(flippedcards);
        }
        else if (obj===obj16){
            
            obj16.src="./resources/img-7.png"
            game_sts++;
            console.log(game_sts);
           flippedcards.push(obj16);
           console.log(flippedcards);
        }
    
        
    } //If two cards are flipped, check if they match
    if(flippedcards.length===2){
        setTimeout(check(flippedcards),1000);
    }
     game_sts=0;  // Reset game state after each turn
    }
    
// Function to check if the flipped cards match
function check(){
 const img1=flippedcards[0];
 const img2=flippedcards[1];
 console.log(flippedcards[0],flippedcards[1]);
 console.log(typeof(img1,img2));
 console.log(img1.src,img2.src)
if(img1.src==img2.src){
    console.log('matched');
    flippedcards=[];
    matched_pairs++;
    console.log(matched_pairs);
    matchedcards.push(img1, img2); // Add matched cards to the list
    console.log(matchedcards);
   // Update score based on the current player
   if(current_player===1){
     document.getElementById('turns').innerHTML='PLAYER 1 TURN AGAIN'
     ply1_score+=1;
     console.log(ply1_score);
     document.getElementById('scores1').innerHTML=ply1_score;
   }
   else{
     document.getElementById('turns').innerHTML='PLAYER 2 TURN AGAIN'
     ply2_score+=1;
     console.log(ply2_score);
     document.getElementById('scores2').innerHTML=ply2_score;
   } // If all pairs are matched, end the game
   if(matched_pairs===8){
      endgame();
   }
    

}
else{// If cards don't match, hide them after a short delay
    console.log('not matched');
    setTimeout(()=>{
        img1.src="./resources/images-removebg-preview.png" ; 
        img2.src="./resources/images-removebg-preview.png";
    },500);
    document.getElementById('turns').innerHTML='PLAYER 1 TURN AGAIN'
     flippedcards=[];
     if(current_player===1){
        document.getElementById('turns').innerHTML='PLAYER 2'
      }
      else{
        document.getElementById('turns').innerHTML='PLAYER 1'
      }
      update();// Switch to the next player's turn
    }

}

// Function to update current player
function update(){
    if (current_player===1){
        current_player=2;
    }
    else{
        current_player=1;
    }
    console.log(current_player);
}
// Function to handle endgame logic
function endgame(){
   
    if(ply1_score>ply2_score){
            document.getElementById('turns').innerHTML='player 1 you are great ,you won the game!!!'
            triggerConfetti();
            document.getElementById('win1').innerHTML='YAYYY!!🎉'
         document.getElementById('win2').innerHTML='BOOOO👎'
        }
   else{
      document.getElementById('turns').innerHTML='player 2 you are great ,you won the game!!!'
      triggerConfetti();
      document.getElementById('win2').innerHTML='yayyyy!!🎉'
   document.getElementById('win1').innerHTML='BOOOO👎';
    }
}
// Function to reset the game
function reset(){
    flippedcards=[];
    matchedcards = [];
  const objs=  document.getElementsByTagName('img');
    ply1_score=0;
    ply2_score=0;
    document.getElementById('scores1').innerHTML=ply1_score;
    document.getElementById('scores2').innerHTML=ply2_score;
    matched_pairs=0;
    current_player=1;
    game_sts=0;
     document.getElementById('win1').innerHTML=''
         document.getElementById('win2').innerHTML=''
    document.getElementById('turns').innerHTML='PLAYER 1 TURN'
     // Reset all card images
    for (let i = 0; i < objs.length; i++) {
        objs[i].src =" ./resources/images-removebg-preview.png";
    }
}
// Function to trigger confetti animation
function triggerConfetti() {
    
    confetti({
        particleCount: 300,
        spread: 100,
        origin: {x:0.5, y: 0.5 }
 
    });
}
