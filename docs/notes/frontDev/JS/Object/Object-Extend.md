---
title: 【JS-Object】对象-继承
date: 2021-04-20
categories:
 - JS
tags:
 - js-Object
---



# 对象-继承

## 盗用构造函数

> 出现原因

```javascript
/**
 * 问题：
 * 父具有引用属性和常量值属性
 * 子实例化时，是否共享父属性
 * 结论：
 * 子实例修改父引用属性地址指向的值时，其它子实例会共享该值
 * 子实例修改父引用属性地址时，其它子实例不受影响
 */
function superType () {
    this.color = ['red', 'blue', 'green'];
    this.number = 2;
}

function subType () {}

subType.prototype = new superType();

let instance1 = new subType();
instance1.color = ['blue'];
instance1.number = 3;
console.log(instance1.color + '  ' + instance1.number); // blue  3

let instance2 = new subType();
instance2.color.push('pink');
console.log(instance2.color + '  ' + instance2.number); // red,blue,green,pink  2

let instance3 = new subType ();
console.log(instance3.color + '  ' + instance3.number); // red,blue,green,pink  2
```

> 思路

```javascript
/**
 * 解决上述问题思路：
 * 盗用构造函数： 在子类构造函数中调用父类构造函数.
 *
 * 原理：
 * 在子构造函数中通过call/apply函数，调用父构造函数。
 * 即每次创建子实例时，都会调用父构造函数。给子实例添加color属性。所有子实例都有自己的子实例
 */
function SuperType () {
    this.color = ['red', 'blue', 'green'];
}

function SubType () {
    // 继承SuperType
    SuperType.call(this);
}

let instance1 = new SubType();
instance1.color.push('pink');
console.log(instance1.color); // [ 'red', 'blue', 'green', 'pink' ]

let instance2 = new SubType();
console.log(instance2.color); // [ 'red', 'blue', 'green' ]
```

> 优缺点

```js
/**
 * 优点： 可以向父传递参数
 * 缺点：
 * 1. 父构造函数调用放在子构造函数中，子构造函数无法复用
 * 2. 子可以访问父定义的方法，但无法访问父原型（祖父、往上）定义的方法
 */
function SuperType (name) {
    this.name = name;
} 

function SubType () {
    // 继承SuperType并传递参数
    SuperType.call(this, 'Li Li');
 	// 实例属性
    this.age = 29;
}
```



## 组合继承

> 思路：综合原型继承和调用构造函数继承优点

```js
/**
 * 组合继承：
 * 	综合原型继承(方法)和盗用构造函数(属性)继承
 * 优点：
 * 1. 弥补上述缺点
 * 2. 保留instanceof和isPrototypeOf()方法识别能力
 */
function SuperType (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType (name, age) {
    // 继承父属性
    SuperType.call(this, name);

    // 定义自身属性
    this.age = age;
}

// 继承父方法
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
    console.log(this.age);
}

let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);          // [ 'red', 'blue', 'green', 'black' ]
instance1.sayName();                    // Nicholas
instance1.sayAge();                     // 29

let instance2 = new SubType("Greg", 27);
console.log(instance2.colors);          // [ 'red', 'blue', 'green' ]
instance2.sayName();                    // Greg
instance2.sayAge();                     // 27
```



## 原型式继承

> 本质：Object.create(arg1, arg2) --- 对象浅复制

```js
// Object.create()实现方式
/**
 * 每次调用，都会创建临时继承o的构造函数并返回实例
 */
function object (o) {
    function F() {};
    F.prototype = o;
    return new F();
}
```

> 作用：需要在已有对象基础上创建新对象

```js
/**
 * 原型式继承
 * 场景：需要在已有对象基础上创建新对象
 * 优点：不需要构造函数，但对象之间需要共享信息
 * 缺点：和原型模式相同，引用值会在子实例中共享
 */
 function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
} 

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends);                // "Shelby,Court,Van,Rob,Barbie"
```



## 寄生式继承

> 思路：创建实现继承的函数，增强并返回对象

```js
/**
 * 适用：关注对象，不在乎类型和构造函数
 * 缺点：给对象添加函数，导致生成对象函数难以复用
 */

// 返回新对象函数，以'object'函数为例
 function object(o) { // o 为对象而非函数对象
    function F() {}
    F.prototype = o;
    return new F();
} 

// 基本寄生继承模式
function createAnother(original) {
    let clone = object(original); // 创建新对象
    clone.sayHi = function() { // 增强对象(绑定一个函数)
        console.log('hi');
    }
    return clone; // 返回这个对象
}
```



## 寄生式组合继承

> 解决：组合继承二次调用父构造函数效率问题

```js
// 父构造
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
// 父原型添加sayName方法
SuperType.prototype.sayName = function() {
 console.log(this.name);
};

// 子构造
function SubType(name, age){
	SuperType.call(this, name); 		// 第二次调用 SuperType()
	this.age = age;
}

// 创建原型链
SubType.prototype = new SuperType(); 	// 第一次调用 SuperType()
SubType.prototype.constructor = SubType;

// 子原型添加sayAge方法
SubType.prototype.sayAge = function() {
	console.log(this.age);
}; 
```

> 思路：不通过构造函数将子挂到原型链上，通过父原型副本实现

```js
/**
 * 基本模式：寄生式继承 + 组合继承
 * 通过：盗用构造函数继承属性，使用混合式原型链继承方法
 */

// 返回新对象函数，以'object'函数为例
function object(o) { // o 为对象而非函数对象
	function F() {}
    F.prototype = o;
    return new F();
} 

// 核心思想
function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype); // 1. 创建对象-父原型对象的副本
    prototype.constructor = subType; // 2. 增强对象-修正构造函数指向-构造函数丢失
    subType.prototype = prototype; // 3. 赋值对象，子挂载到原型链上
}
```

> 样例

```js
/**
 * 寄生式组合继承-引用类型继承最佳模式
 * 优势：
 * 1. 效率更高：仅调用一次父构造函数，避免子原型上不必要且用不到的属性
 * 2. 原型链保持不变：instanceof和isPrototypeOf()方法有效
 */
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    console.log(this.age);
}
```