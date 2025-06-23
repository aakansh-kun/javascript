let course={
    name : 'cognition',
    duration : '2 months',
    details(){
        return `${this.name} is ${this.duration}`
    }
}
console.log(`${course.name} is ${course.duration} long`)
console.log(course.details())

course={
    name : 'cognition',
    duration : '2 months',
    get details(){
        return `${this.name} is ${this.duration}`
    },
    set details(value){
        let parts= value.split(' is ');
        this.name=parts[0];
        this.duration=parts[1]
    }
}
course.details='coding_ninjas is 1 week'
console.log(course.details)