//syntactic sugar
class TimeMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}
class Instructor extends TimeMember{
    name;
    designation = 'web course instructor';
    time= 'web time'
    location;
    constructor(name, location){
        super(name, location)
    }
    startSupportsession(time){
        console.log(`start the support session at ${time}`)
    }
    quiz(module){
        console.log(`please create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thanks for your feedback`)
    }
}
//syntactic sugar

class Developer extends TimeMember{
    designation = 'web course instructor';
    time= 'web time'
    tech;
    constructor(name, location){
        super(name, location)
        this.tech = this.tech;
    }
    developFeature(feature){
        console.log(`please develop the  ${feature}`)
    }
    release(version){
        console.log(`please release th ${version}`)
    }
  
}
//syntactic sugar

class JobPlacement extends TimeMember{
    designation = 'Job placement Comandos'
    time= 'Job placement'
    region;
    constructor(name, location, region){
        super(name, location)
        this.region = this.region;
    }
    provideResume(feature){
        console.log(`please develop the  ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release th ${version}`)
    }
   
}


const din = new Developer('din islam', 'Dhaka', 'HTML');
console.log(din);