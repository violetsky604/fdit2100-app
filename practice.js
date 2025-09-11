function reverseOrder(s){
    let use = "";
    for (let i = s.length - 1;i >= 0;i--){
        use = use + s[i];
    }
    return use;
}

console.log(reverseOrder("hello"));
console.log(reverseOrder("bunny"));

function allUniqueLetters(s){
    
}