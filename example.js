// Helper
const $constructor = Symbol();
const $extends = (parent, child) =>
  Object.assign(Object.create(parent), child);
const $new = (object, ...args) => {
  let instance = Object.create(object);
  instance[$constructor].call(instance, ...args);
  return instance;
}
const $super = (context, ...args) => {
  Object.getPrototypeOf(Object.getPrototypeOf(context))[$constructor]
    .call(context, ...args);
}

// class
var Foo = {
  classVariable: true,

  // constructor
  [$constructor](who){
    this.me = who;
    this.species = 'fufel';
  },

  // methods
  identify(){
    return 'I am ' + this.me;
  }
}

// class extends Foo
var Bar = $extends(Foo, {

  // constructor
  [$constructor](who){
    $super(this, who);
    this.subtype = 'barashek';
  },

  // methods
  speak(){
    console.log('Hello, ' + this.identify());
  },
  bark(num){
    console.log('Woof');
  }
});

var a1 = $new(Foo, 'a1');
var b1 = $new(Bar, 'b1');
console.log(a1, b1);
console.log('b1.classVariable', b1.classVariable);
