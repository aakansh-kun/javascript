const dog={
    name : 'doggy',
    breed : 'labra',
    age : 3,
    weight: 23
}

function getDog(name,breed,age,weight){// factory function
    return{
        name,
        breed,
        age,
        weight,
        eat(){
            console.log(this.name + "pedigry")
        },
        bark(){
            console.log(this.name +" " + "bhau")
        }
    }
}

const dog2=getDog('tommy','bulldog',3,23)
dog2.bark()
console.log(dog2)

//Dynamic Objects
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