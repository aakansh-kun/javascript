let course = {
    name : 'cognition',
    duration : '2 month',
    get details(){
        return `${this.name} is ${this.duration}`
    },
    set details(value){
        if(typeof value!=='string'){
            throw new Error(`value, ${value} is not a string`)
        }
        let parts=value.split('is')
        this.name=parts[0]
        this.duration=parts[1]
    }
}
course.details='coding_ninjas is 1 week'
console.log(course.details)
try{
    course.details=42
}
catch(e){
    console.log(`catch an error: ${e.message}`)
}