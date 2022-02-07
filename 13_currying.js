function Currying(a) {
    return function two(b) {
        return function three(c) {
            console.log(a * b * c);
        }
    }
}

Currying(2)(2)(2);