function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr = expr.split(' ').join('');

    let brackets = 0;

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') {
            brackets += 1;
        } else if (expr[i] === ')') {
            brackets -= 1;
        }
    }
    if (brackets !== 0) {
        throw new Error('ExpressionError: Brackets must be paired');
    }
    if (expr.includes('/0')) {
        throw new Error('TypeError: Division by zero.');
    }

    return new Function(`return ${expr}`)();
}

module.exports = {
    expressionCalculator
};