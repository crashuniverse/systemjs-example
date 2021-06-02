System.register(['lodash'], function(_export, _context) {
    return {
        setters: [],
        execute: function() {
            const numbers = [1,2,3,2];
            const uniqueNumbers = _.uniq(numbers);
            const text = uniqueNumbers.join(', ');
            document.getElementById('numbers').innerText = text;
        }
    }
});
