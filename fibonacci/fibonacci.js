const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return "OOPS";
    let seq = [1, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i-1] + seq[i-2])
    }
    return seq[seq.length-1];
};

module.exports = fibonacci;
