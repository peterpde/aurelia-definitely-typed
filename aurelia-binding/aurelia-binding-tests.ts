/ <reference path="lib.d.ts" />
/ <reference path="aurelia-binding.d.ts" />

var scope = {};
var binding = {};
var visitor = {};
var observerLocator = {};
var object = {};
var args = {y:2};

function testAccessKeyedObserver {
  var objectInfo = {};
  var keyInfo = {};
  var observerLocator {};
  var evaluate = 'x';

    var akObs = new AccessKeyedObserver(objectInfo, keyInfo, observerLocator, evaluate);
  akObs.objectInfo;
  akObs.keyInfo;
  akObs.evaluate;
  akObs.observerLocator;
  akObs.disposeKey;
  akObs.disposeObject;
  akObs.disposeProperty;
  akObs.callback;
  akObs.updatePropertySubscription(object, 'x');
  akObs.objectOrKeyChanged(object, 'x');
  akObs.subscribe(function() {});
  akObs.notify();
  akObs.dispose();
}

function testModifyCollectionObserver {

  var taskQueue = 1;
  var col = 2;
  var mcObs = new ModifyCollectionObserver(taskQueue, col);

  mcObs.taskQueue;
  mcObs.queued;
  mcObs.callbacks;
  mcObs.changeRecords;
  mcObs.oldCollection;
  mcObs.collection;
  mcObs.lengthPropertyName;
  mcObs.lengthObserver;
  mcObs.array;
  mcObs.subscribe(function() {});
  mcObs.addChangeRecord({}): void;
  mcObs.reset([]): void;
  mcObs.getLengthObserver();
  mcObs.call();
}

function testCollectionLengthObserver {
  var clObs = new CollectionLengthObserver([]);
  clObs.collection;
  clObs.callbacks;
  clObs.lengthPropertyName;
  clObs.currentValue;
  clObs.getValue();
  clObs.setValue(3);
  clObs.subscribe(function() {});
  clObs.call(3);
}

function testPathObserver {
  var leftObserver = {};
  var getRightObserver = {};
  var observer = {};
  var pathObs = new PathObserver(leftObserver,getRightObserver,3);

  pathObs.leftObserver;
  pathObs.disposeLeft;
  pathObs.rightObserver;
  pathObs.disposeRight;
  pathObs.callback;
  pathObs.updateRight(observer);
  pathObs.subscribe(function() {});
  pathObs.notify('x');
  pathObs.dispose();
}

function testCompositeObserver {
  var compObs = new CompositeObserver([], 1);
  compObs.subscriptions;
  compObs.evaluate;
  compObs.callback;
  compObs.subscribe(function() {});
  compObs.notify('x');
  compObs.dispose();
}


function testExpression {
  Expression exp = new Expression();
  exp.isChain == false;
  exp.isAssignable == true;
  exp.evaluate();
  exp.assign();
  exp.toString() == 'x';
}

function testChain {
  Chain chain = new Chain('x.y');
  chain.expressions == [];
  chain.evaluate({}, {});
  chain.accept({});
}

function testValueConverter {
  ValueConverter vc = new ValueConverter('x.y', 'x', {x:2}, {y:3});

  vc.expression;
  vc.name;
  vc.args;
  vc.allArgs;

  var binding = {};

  vc.evaluate({}, {});
  vc.assign({}, 3, [{x: 2}]);
  vc.accept({});
  vc.connect(binding, {}): {
  vc.value;
  vc.observer;
}

function testAssign {
  var target = {};
  var visitor = {};
  var binding = {};

  Assign as = new Assign(target, 2);
  as.target;
  as.value;
  as.evaluate({}, {x:2});
  as.accept(visitor);
  var x = as.connect(binding, {});
}

function testConditional {
  var c = new Conditional({x:2}, true, false);
  var visitor = {};
  var binding = {};
  c.condition;
  c.yes;
  c.no;
  c.evaluate({}, {x:4});
  c.accept(visitor);
  c.connect(binding, {});
}

function testAccessScope {
  var scope = {};
  var binding = {};
  var visitor = {};

  AccessScope as = new AccessScope('xy');
  as.name;
  as.isAssignable;
  as.evaluate(scope, [{}]);
  as.assign(scope, 2);
  as.accept(visitor);
  as.connect(binding, scope);
}

function testAccessMember {
  var scope = {};
  var binding = {};
  var visitor = {};

  AccessMember am = new AccessMember({}, 'xy');
  am.object;
  am.name;
  am.isAssignable;
  am.evaluate(scope, [{}]);
  am.assign(scope, {});
  am.accept(visitor);
  am.connect(binding, scope);
}

function testAccessKeyed {
  var scope = {};
  var binding = {};
  var visitor = {};

  AccessKeyed ak = new AccessKeyed({}, 'x');
  ak.object;
  ak.key;
  ak.isAssignable;

  ak.evaluate(scope, [{}]);
  ak.assign(scope, 2);
  ak.accept(visitor);
  ak.connect(binding, scope);
}

function testCallScope {
  var scope = {};
  var binding = {};
  var visitor = {};

  CallScope cs = new CallScope('x', {y:2});
  cs.name;
  cs.args;
  cs.evaluate(scope, [{}], {y:2});
  cs.accept(visitor);
  cs.connect(binding, scope);
}

function testCallMember {
  CallMember cm = new CallMember({}, 'x', {y:2});
  cm.object;
  cm.name;
  cm.args;

  cm.evaluate(scope, [{}], {y:2});
  cm.accept(visitor);
  cm.connect(binding, scope);
}

function testCallFunction {
  CallFunction cf = new CallFunction(function() {}, {y:2});
  cf.func;
  cf.args;
  cf.evaluate(scope, valueConverters, args);
  cf.accept(visitor);
  cf.connect(binding, scope);
}

function testBinary {
  var operation = 'x';
  var left = 1, right = 2;
  Binary b = new Binary(operation, left, right);

  b.operation;
  b.left;
  b.right;
  b.evaluate(scope, valueConverters);
  b.accept(visitor);
  b.connect(binding, scope);
}
