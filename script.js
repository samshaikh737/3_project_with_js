function ageInDays(){
    let age = prompt('what is your age');    
    let count = age * 365;
    let final = "your age is --> " + age + '\n' + "you are "+  count + " days olds";

    document.getElementById('answer').innerHTML = final;
    
}

function reste(){
    
    document.getElementById('answer').innerHTML = '';

}

// -----------------challage:2--------------------------------//

function generatCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}

