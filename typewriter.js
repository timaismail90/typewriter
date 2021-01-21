const sentence = "hello there from lighthouse labs";
let splitSentence = sentence.split("");

for (let i = 0; i< splitSentence.length; i++) {
    
    setTimeout(() => {
        // process.stdout.write(splitSentence[i])
        console.log(splitSentence[i])
       
    }, (i) * 50);

};

