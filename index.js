// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let result = 0;

        for(let i = 0; i < this.sides.length; i ++){
            result += this.sides[i]
        }
        return result;
    }
}
class Triangle extends Polygon{
    constructor(...args){
        super(...args)
    }

    get isValid(){
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];

        return (a + b > c) && (a + c > b) && (b + c > a)
    }
}

class Square extends Polygon{
    constructor(...args){
        super(...args)
    }

    get isValid(){
      let a = this.sides[0];
      let b = this.sides[1];
      let c = this.sides[2];
      let d = this.sides[3];
        
        return (a === b && b === c && c === d)
    }

    get area(){
        let side = this.sides[0]  
        return side * side;  
    }
}
