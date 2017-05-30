# noclass
Here is an example of ES6 classes without a class keyword but with class variables.
Looks the same as classes and has the same structure internally.

### Example
```javascript
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
    $super(Foo, this, who);
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
```

### Multiple "inheritance"
```javascript

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

var Logger = {
  logEnabled: true,
  log(){
    if(logEnabled){
      console.log('Log saved.');
    } else {
      throw Error('Log disabled');
    }
  },
  startLogging(num){
    this.logEnabled = true;
  },
  stopLogging(num){
    this.logEnabled = false;
  },
}

var Tester = {
  test(){
    if(this.speak){
      console.log('Can speak.');
    }
  }
}

// class extends Foo
var Bar = $extends([Foo, Tester, Logger], {

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
```
