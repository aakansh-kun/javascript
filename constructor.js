const person={
    name : 'aakansh'
}

console.log(person)
person.favorite_food= 'dal makhni'
console.log(person)
person.icecream= 'chocolate'
console.log(person)
delete person.icecream
console.log(person)

person.eat=function(){
    console.log(this.name + ' ' + 'is eating'+ ' ' + 'tawa roti')
}
person.eat()
console.log(person.constructor)
let newobj = new Object()
new String()
new Boolean()
new Number()
