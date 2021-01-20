const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
    
    setTimeout(() => {
        process.stdout.write(char)
        // console.log(char);
    },1000);

};

