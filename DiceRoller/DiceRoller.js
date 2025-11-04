function sum(...nums){
    let res=0;
    for(let num of nums){
        res+=num;
    }
    return res;
}
function Roll(){
    const Input = document.getElementById("DiceNum").value;
    const Result = document.getElementById("result");
    const images = document.getElementById("imgs");
    const values = [];
    const imgs = [];
    for(let i = 0 ;i<Input;i++){
        const num = Math.floor(Math.random()*6)+1;
        values.push(num);
        imgs.push(`<img src="dice/${num}.png" alt="Dice ${num}">`);
        console.log(...imgs)
     
    }
    document.getElementById("Sum").textContent = `the sum is ${sum(...values)}`;
    Result.textContent = `Dices {${values.join(', ')}}`;
    images.innerHTML = imgs.join('');

}
