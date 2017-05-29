const $constructor = Symbol();

function $extends(parent, child){
  Object.assign(Object.create(parent), child);
}

function $new(object, ...args){
  let instance = Object.create(object);
  instance[$constructor].call(instance, ...args);
  return instance;
}

function $super(parent, context, ...args){
  parent[$constructor].call(context, ...args)
}

export {$new, $extends, $constructor, $super};
