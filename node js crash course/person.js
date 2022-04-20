class information{
    constructor(name, age , height , position, sex){
        this.name = name;
        this.age = age;
        this.height = height;
        this.position = position;
        this.sex = sex;
    }
    details(){
        console.log(`My name is ${this.name}, I am ${this.age} and my height is ${this.height}. I am the ${this.position} in my family. I am a ${this.sex}`)}
}
module.exports = information