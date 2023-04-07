var sum_to_n_a = function(n) {
    var res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
};

var sum_to_n_b = function(n) {
    if (n == 1){
        return 1;
    }
    return n + sum_to_n_b(n-1);
};

var sum_to_n_c = function(n) {
    let res = 0;
    while (n != 0){
        res += n;
        n--;
    }
    return res;
};

console.log(sum_to_n_a(50));
console.log(sum_to_n_b(50));
console.log(sum_to_n_c(50));


