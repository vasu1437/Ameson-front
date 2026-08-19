let choice=document.querySelectorAll(".photo")
let msg=document.querySelector("#msg")
let plsc=document.querySelector("#uc")
let cmsc=document.querySelector("#cc")
let computer_score=0
let user_score=0

 
const item=["rock","paper","sissor"]

const computer=()=>{
    
    let y=Math.floor(Math.random()*3)
    return choice=item[y]
}

const checkwinner=(user ,compchocie)=>{
    
    if (user===compchocie){
        msg.innerHTML=`its a draw both choice ${compchocie}`
        
        
    }
    else{
        if (compchocie==="rock"){
             return  user==="paper"? "won":"lose"
            console.log(compchocie)
            console.log(user)
            console.log(user_ans)}

        else if (compchocie==="paper"){
             return user==="sissor"? "won":"lose"
            console.log(compchocie)
            console.log(user)
            console.log(user_ans)

        }

        else{
             return user==="rock"? "won":"lose"
            console.log(compchocie)
            console.log(user)
        console.log(user_ans)}
        
    }



}
choice.forEach( (box)=>{
     
    box.addEventListener("click",()=>{
        user=box.getAttribute("id")
        let compchocie= computer()
        user_ans=checkwinner(user,compchocie)
        if (user_ans==="won"){
            msg.innerHTML= `You won ${user} beats ${compchocie}`
             msg.style.backgroundColor = "green";
            user_score ++
            plsc.innerHTML=user_score
        }
        else if (user_ans==="lose"){
            msg.innerHTML=`You lose ${compchocie} beats ${user}`
             msg.style.backgroundColor = "red";
            computer_score ++
            cmsc.innerHTML=computer_score

        }
         
        
    })
}
    
);