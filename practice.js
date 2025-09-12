

    function hasAllUniqueLetters(s){
        const seen =  new Set();
        for (const ch of s){
        if (seen.has(ch)) return false;
        }
        seen.add(ch);
        
    }

    return true;
