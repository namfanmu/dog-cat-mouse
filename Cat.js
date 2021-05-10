var Dog = require('./Dog');

function Cat() {
    this.stomach = [];
}
Cat.prototype.eat = function(animal) {
    if (animal instanceof Dog) {
        this.stomach.push(animal);
    } else {
        throw new Error('Error');
    }
}
module.exports = Cat;