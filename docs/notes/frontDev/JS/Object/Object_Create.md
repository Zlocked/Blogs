---
title: 【JS-Object】对象-创建
date: 2021-04-14
categories:
 - JS
tags:
 - js-Object
---



# 对象-创建

## 概述

### 单一对象创建

使用`对象字面量`或者`Object`构造函数

### 具有相同属性或行为对象创建

1. ES6：支持类和继承-语法糖
2. ES5：采用原型式继承模拟类和继承

## 工程模式

### 概括

通过同一种形式创建多个具有相同特性和行为的对象

#### 优点：

可以解决创建多个类似对象的问题

#### 缺点：

无法解决对象标识问题(即：新创建的对象是什么类型)

### 样例

```javascript
/*
 	1. 通过三个参数创建对象
 	2. 多次创建对象的属性和方法不共享
 */
function createPerson(name, age, job) {
	let o = new Object();
	o.name = name;	
    o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	};
 	return o;
}
let person1 = createPerson("Nicholas", 29, "Software Engineer");
let person2 = createPerson("Greg", 27, "Doctor"); 
```



## 构造函数模式

### 概述

通过自定义构造函数，为自己的对象类型定义属性和方法

##### 同工厂模式函数比较

1. 没有显示创建对象
2. 属性和方法赋值给`this`
3. 没有显式`return`

### 样例

```javascript
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name);
	};
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg 
```

### `new`操作符

`new Person('name', 20, 'job');`

1. 内存中创建新对象`o`
2. 新对象`o`内部的`[[Prototype]]`特性被赋值为构造函数的`prototype`属性
3. 构造函数内部的`this`被赋值为新对象(即`this`指向新对象)
4. 指向构造函数内部代码(给新对象`o`添加属性)
5. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

```javascript
// 浏览器将[[Prototype]]属性实现为__proto__
let o = new Object(); // let o = {};
o.__proto__ = Person.prototype;
Person.call(o, 'name', 20, 'job');
```

### 优点：

1. 自定义构造函数可以确保实例被标识为特性类型(相比于工厂模式)
2. 一般用`instanceof`操作符确定对象类型更加可靠

### 问题：

> 构造函数中的定义的方法会在每个实例上创建一遍

例：`person1`和`person2`都有名为`sayName()`的方法，但不是同一个实例

```javascript
// 逻辑等价
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = new Function("console.log(this.name)");
}
console.log(person1.sayName == person2.sayName); // false
```

#### 解决每个实例都创建的问题：

方式：将函数与对象绑定推迟至运行时，即将函数声明放在构造函数外部

缺点：对象存在多个方法时，作用域会混乱，相关方法代码无法和对象聚集在一起

```javascript
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName() {
	console.log(this.name);
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg
```



## 原型模式

> 解决构造函数模式中方法无法聚集问题

### 概述

修改函数`prototype`属性，该属性是原型对象；原型对象上的方法和属性都会被对象实例**共享**

### 样例

```javascript
function Person() {}
	Person.prototype.name = "Nicholas";
	Person.prototype.age = 29;
	Person.prototype.job = "Software Engineer";
	Person.prototype.sayName = function() {
	console.log(this.name);
};
let person1 = new Person();
person1.sayName(); // "Nicholas"

let person2 = new Person();
person2.sayName(); // "Nicholas"

console.log(person1.sayName == person2.sayName); // true
```

### 原型

```javascript
// 构造函数对应的对象 === 实例原型
Person.prototype === person1.__proto__ // true
// 实例原型的构造函数
person1.__proto__.constructor === Person // true
// 同一个原型创建的多个实例
person1.__proto__ === person2.__proto__ // true
```

#### 原型实例判断

##### `isPrototypeOf`

#####  ` Object.getPrototypeOf()`

##### `Object.create()`

```javascript
// Object.protoptype.isPrototypeOf(new Object());
console.log(Person.prototype.isPrototypeOf(person1)); // true
console.log(Person.prototype.isPrototypeOf(person2)); // true 

// Object.getPrototypeOf(new Object()) == Object.prototype;
console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
console.log(Object.getPrototypeOf(person1).name); // "Nicholas"

// Object.create(); 创建并制定原型
let biped = {
	numLegs: 2
};
let person = Object.create(biped);
person.name = 'Matt';
console.log(person.name); // Matt
console.log(person.numLegs); // 2
console.log(Object.getPrototypeOf(person) === biped); // true 
```





