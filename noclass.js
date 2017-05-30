const $constructor = Symbol();

function $extends(parents, child){
  if(Array.isArray(parents) && parents.length){
    parents.reduce((proto, parent) => {
      Object.setPrototypeOf(proto, parent);
      return parent;
    });
    parents = parents[0];
  }
  return Object.assign(Object.create(parents), child);
}

function $new(object, ...args){
  let instance = Object.create(object);
  instance[$constructor].call(instance, ...args);
  return instance;
}

function $super(context, ...args){
  Object.getPrototypeOf(
    Object.getPrototypeOf(context))
      [$constructor].call(context, ...args);
}

export {$new, $extends, $constructor, $super};
