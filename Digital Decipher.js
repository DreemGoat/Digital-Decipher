function digitalDecipher(message,key){
    split = key.split("");
    words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if (message.length>key.length){
        missing = message.length - key.length;
        miss = 0;
        for (let x = 0;x < missing ;x+=1){
            split.push(split[x]);
            miss += 1;
            if (miss == split.length){
                miss = 0
            }
        }
    }
    for (let a = 0; a < split.length; a+=1){
        message[a] = message [a] - split[a];
    }

    for (let b = 0; b< message.length; a+=1){
        message[b] = words[message[b]-1]
    }
    result = message.join('');
    return result
}
console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));