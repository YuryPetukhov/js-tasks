const obj = {
  name: 'work',
};

Function.prototype.mybind = function (context, props = []) {
  const that = this;
  return function (...newProp) {
    that.apply(context, [...props, ...newProp]);
  };
};

function t(props, prop2) {
  console.log(props, prop2);
}

const f = t.mybind(obj, ['prop1']);
f('test');
