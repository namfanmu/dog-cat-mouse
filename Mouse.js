function Mouse(names){
    this.names = name;
    this.isDead=false;
}
Mouse.prototype.die=function(){
    this.isDead=true;
};
module.exports=Mouse;