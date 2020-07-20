let userPromp=true;
let userInput = null;
let check= null;
let if_else= null;
userInput=prompt("Enter a number:");
while(userPromp){
    check=userInput==null ? true:false;
    userInput=Number(userInput);

    if_else=(userInput>100||check)?userPrompt=false:userInput=Number(prompt("Enter a number:"));
    
}