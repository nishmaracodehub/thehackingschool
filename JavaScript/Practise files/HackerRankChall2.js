function regexVar(re) {
    //var re = /[a-u][a-u][a-u]/i;
    for (let i = 0; i < re.length; i++){
        if (re[0] && re[re.length - 1] == 'a' || re[0] && re[re.length - 1] == 'e' || re[0] && re[re.length - 1] == 'i' || re[0] && re[re.length - 1] == 'o' || re[0] && re[re.length - 1] == 'u')
        {
            return true;
        } else {
            return false;
        }
    }
}

console.log(regexVar('aba'));