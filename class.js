//syntactic sugar

class Instructor{
    name;
    designation = 'web course instructor';
    time= 'web time'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportsession(time){
        console.log(`start the support session at ${time}`)
    }
    quiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}


const din = new Instructor('din','khulna');
console.log(din);
din.startSupportsession('9:00');
din.quiz(34);