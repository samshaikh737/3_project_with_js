function ageInDays(){
    let age = prompt('what is your age');    
    let count = age * 365;
    let final = "your age is --> " + age + '\n' + "you are "+  count + " days olds";

    document.getElementById('answer').innerHTML = final;
    
}

function reste(){
    
    document.getElementById('answer').innerHTML = '';

}

