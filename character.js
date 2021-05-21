class Character{
    constructor(x,y){
        this.animation = loadAnimation(w1,w2,w3,w4,w5,w6,w7,w8);
        this.x = x;
        this.y = y;
    }

    display(){
        scale(0.5);
        animation(this.animation,this.x,this.y);
       
          
     }
}
/*function setup(){
character = createSprite(200,270,20,20);
    character.addAnimation("walk",walking);
    //character = new Character();
    character.scale = 0.35;
    // console.log(character.scale);
}*/