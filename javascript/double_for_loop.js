const number = 5;

for(let i = 1; i <= number; i++){
    let asterisk='';

    for(let j=0; j<i; j++){
        asterisk = asterisk + '*';
    }
    console.log(asterisk);
}
