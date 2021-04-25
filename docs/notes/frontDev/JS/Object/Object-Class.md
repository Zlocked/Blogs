---
title: 【JS-Object】对象-类
date: 2021-04-25
categories:
 - JS
tags:
 - js-Object
---



# 对象-类

## 类使用

### 类定义

> **类声明不可以提升**，所以先声明后使用
>
> 类包含[构造函数，挂到实例上的方法，获取/设置函数，静态类函数]，都**非必需**
>
> 类引用可做参数，且可立即实例化

```js
// 类声明
class Person {}

// 类表达式
const Animal = class {}

/**
 * 类与函数的区别
 */
// 1. 相同：函数表达式和类表达式，求值前不可引用
console.log(FunctionExpression); // undefined
var FunctionExpression = function() {};
console.log(FunctionExpression); // function() {} 

console.log(ClassExpression); // undefined
var ClassExpression = class {};
console.log(ClassExpression); // class {}

// 2. 不同：函数声明可以提升，类声明不可提升
console.log(FunctionDeclaration); // FunctionDeclaration() {}
function FunctionDeclaration() {}
console.log(FunctionDeclaration); // FunctionDeclaration() {} 

console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined
class ClassDeclaration {}
console.log(ClassDeclaration); // class ClassDeclaration {} 

// 3. 不同：函数受函数作用域限制，类受块级作用域限制
{
 function FunctionDeclaration() {}
 class ClassDeclaration {}
}
console.log(FunctionDeclaration); // FunctionDeclaration() {}
console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined
```



### 类与构造函数

```js
// 1. 类和类构造函数都需要new调用
class Person {}
let a = Person(); // TypeError: class constructor Person cannot be invoked without 'new'
let p1 = new Person();

p1.constructor(); // TypeError: Class constructor Person cannot be invoked without 'new'
let p2 = new p1.constructor(); // 使用对类构造函数的引用创建一个新实例

// 2. 类标识有prototype属性，且原型constructor指向类本身
console.log(Person.prototype); // { constructor: f() }
console.log(Person.prototype.constructor === Person); // true

// 3. typeof 和 instanceof
console.log(Person); // class Person {}
console.log(typeof Person) // function

// 类实例
let p = new Person();
// 原型constructor指向类本身，而非类构造函数
console.log(p instanceof Person); // true
console.log(p.constructor === Person); // true
console.log(p instanceof Person.constructor); // false

// 类构造实例-构造函数当做普通函数创建实例
let pc = new Person.constructor();
console.log(pc instanceof Person); // false
console.log(pc.constructor === Person); // false
console.log(pc instanceof Person.constructor); // true
```



### 实例，原型和类成员

> 实例：绑定到this上的方法和属性
>
> 原型(实例共享)：类声明块中的方法，属性可通过外部类名或原型绑定
>
> 类成员：类声明块中static标识的方法，且方法中的this指向类本身

```js
// 实例成员和属性独立
class Person {
    constructor() {
        this.name = new String('Nick');
        this.sayName = () => console.log(this.name);
        this.nickNames = ['js', 'css'];
    }
}
let p1 = new Person(), p2 = new Person();

p1.sayName(); // Nick
p2.sayName(); // Nick

console.log(p1.name === p2.name); // false
console.log(p1.sayName === p2.sayName); // false
console.log(p1.nickNames === p2.nickNames); // false

p1.name = p1.nicknames[0];
p2.name = p2.nicknames[1];
p1.sayName(); // js
p2.sayName(); // css
```

```js
// 原型方法
class Person {
    constructor() {
        this.locate = () => console.log('instance');
    }
    // 类块中定义
    locate () {
        console.log('prototype');
    }
}
let p = new Person();
p.locate(); // instance
p.prototype.locate(); // prototype

// 原型属性
// [error] Uncaught SyntaxError: Unexpected token
class Person {
    name: 'Nick'
}
// [true]
class Person {
    sayName() {
        console.log(`${ Person.greeting } ${ this.name }`);
    }
}
Person.greeting = 'My name is';
Person.prototype.name = 'Nick';
let p = new Person();
p.sayName(); // My name is Nick
```

```js
// 访问器 - 和对象设置相同
class Person {
	set name(newName) {
		this.name_ = newName;
	}
	get name() {
		return this.name_;
	}
}
let p = new Person();
p.name = 'Jake';
console.log(p.name); // Jake 
```

```js
// 类方法
class Person {
	constructor() {
		// 添加到 this 的所有内容都会存在于不同的实例上
		this.locate = () => console.log('instance', this);
	}
 	// 定义在类的原型对象上
	locate() {
		console.log('prototype', this);
	}
 	// 定义在类本身上
	static locate() {
		console.log('class', this);
	}
}
let p = new Person();
p.locate(); //实例： instance, Person {}
Person.prototype.locate(); //原型： prototype, {constructor: ... }
Person.locate(); //类方法： class, class Person {} 
```



### 迭代器和生成器

> 定义生成器

```js
// 定义生成器
class Person {
    // 原型上定义生成器方法
    *createNickNameIterator() {
        yield 'Jack';
        yield 'Jake';
        yield 'J-Dg';
    }
    // 类上定义生成器方法
    static *createJobIterator() {
        yield 'Butcher';
        yield 'Backer';
        yield 'Candlestick maker';
    }
}
let p = new Person();
let nickNameIter = p.createNickNameIterator();
console.log(nickNameIter.next().value); // Jack
console.log(nickNameIter.next().value); // Jake
console.log(nickNameIter.next().value); // J-Dg

let jobItr = Person.createJobIterator();
console.log(jobItr.next().value); // Butcher
console.log(jobItr.next().value); // Backer
console.log(jobItr.next().value); // Candlestick makers
```

> 给类实例添加迭代器
```js
// 给类实例添加迭代器
class Person {
    constructor() {
        this.nickNames = ['Jack', 'Jake', 'J-Dog'];
    }
    
    *[Symbol.iterator]() {
        yield *this.nickNames.entries();
    }
}

let p = new Person();
for (let [idx, nickname] of p) {
    console.log(nickname);
}
// Jack
// Jake
// J-Dog
```

> 返回迭代器对象
```js
// 返回迭代器对象
class Person {
    constructor() {
        this.nicknames = ['Jack', 'Jake', 'J-Dog'];
    }
    
    [Symbol.iterator]() {
        return this.nicknames.entries();
    }
}
let p = new Person();
for (let [idx, nicknames] of p) {
    console.log(nickname);
}
// Jack
// Jake
// J-Dog
```



## 类继承

### extends

> 1. extends关键字支持，继承任何拥有[[Constructor]]和原型的对象
> 2. 继承类
> 3. 继承构造函数(向后兼容)
> 4. 类继承表达式

```js
// 继承类
class Vehicle {}
class Bus extends Vehicle {}

// 继承普通构造函数
function Person() {}
class Engineer extends Person {}

// 类继承表达式
class Foo {}
let Bar = class extends Foo {}
```



### super

> 1. ES6给类构造函数和静态方法中添加内部特性[[HOmeObject]]，供JS引擎内部访问。super为[[HomeObject]]**原型**
>
> 2. super仅在**派生类**构造函数和静态方法中使用
> 3. super关键字**不能**单独引用
> 4. super()调用父构造函数，并将**返回实例**赋值给this
> 5. super()行为等同父构造函数，可以传参
> 6. 若派生类没有定义构造函数，实例化派生类时自动调用super()
> 7. 派生类构造函数中，**不能**在super()之前引用this
> 8. 派生类**显示**定义构造函数，[ 调用super() | 构造函数返回一个对象 ] **(二选一)**

```js
// 2. super仅在派生类构造函数和静态方法中使用
class Vehicle {
    constructor() {
        super(); // 不是派生类
        // SyntaxError: 'super' keyword unexpected 
    }
}

// 3. super关键字不能单独引用
class Vehicle {}

class Bus extends Vehicle {
    constructor() {
        console.log(super); // super关键字无法直接引用
        // SyntaxError: 'super' keyword unexpected here 
    }
}

// 4. super()调用父构造函数，并将返回实例赋值给this 
class Vehicle {}
class Bus extends Vehicle {
    constructor() {
        super();
        console.log(this instanceof Vehicle);
        console.log(this instanceof new.target);
    }
}
new Bus(); 
// true
// true

// 5. 通过super()给父构造函数传参
class Vehicle {
    constructor(licensePlate) {
        this.licensePlate = licensePlate;
    }
}
class Bus extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate);
    }
}
console.log(new Bus('13337H4X')); // Bus { licensePlate: '13337H4X' }

// 6. 派生类没有显示定义构造函数，默认调用super()，并传参
class Vehicle {
    constructor(licensePlate) {
        this.licensePlate = licensePlate;
    }
}
class Bus extends Vehicle {}
console.log(new Bus('13337H4X')); // Bus { licensePlate: '13337H4X' }

// 7. 派生类构造函数中，不能在super()前引用this
class Vehicle {}
class Bus extends Vehicle {
    constructor() {
        console.log(this);
    }
}
new Bus();
// ReferenceError: Must call super constructor in derived class
// before accessing 'this' or returning from derived constructor

// 8. 派生类显示定义构造函数，必须调用super()或者必须返回一个对象
class Vehicle {}
class Car extends Vehicle {}
class Bus extends Vehicle {
    constructor() {
        super();
    }
}
class Van extends Vehicle {
    constructor() {
        return {};
    }
}
new Car(); // Car {}
new Bus(); // Bus {}
new Van(); // {}
```



### 抽象基类

> 解释：可以被继承无法实例化的类
>
> 方法：通过new.target检测实例化类名

```js
// 抽象基类
class Vehicle {
    constructor() {
        console.log(new.target);
        if (new.target === Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated');
        }
    }
}
// 派生类
class Bus extends Vehicle {}

new Bus(); // class Bus {}
new Vehicle() // class Vehicle {}
// Error: Vehicle cannot be directly instantiated
```



>要求：派生类必须定义某个方法
>
>实现：通过this检测相应方法
>
>原理：原型方法在调用类构造函数前已经存在

```js
// 要求派生类必须定义某个方法
class Vehicle {
    constructor() {
        if (new.target === Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated');
        }
        // 检测派生类是否在原型上定义某个方法
        if (!this.foo) {
            throw new Error('Inheriting class must define foo()');
        }
        console.log('success');
    }
}
// 派生类
class Bus extends Vehicle {
    foo() {}
}
// 派生类
class Van extends Vehicle {}

new Bus(); // success
new Van(); // Error: Inheriting class must define foo()
```



### 继承内置类型

> 扩展内置类型
>
> 以Array为例

```js
// 增加shuffle()-洗牌算法
class SuperArray extends Array {
    shuffle() {
        // 洗牌算法
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
    }
}

let a = new SuperArray(1, 2, 3, 4, 5);

console.log(a instanceof Array); // true
console.log(a instanceof SuperArray); // true
console.log(a); // [1, 2, 3, 4, 5]
a.shuffle(); 
console.log(a); // [3, 1, 4, 5, 2];
```



> 覆盖默认行为
>
> 以覆盖`Symbol.species `访问器为例，这个访问器决定在创建返回的 实例时使用的类

```js
// 覆盖Symbol.species访问器，重写返回实例的类型
// 该访问器，修改实例方法返回对象时，调用的构造函数
class SuperArray extends Array {
    static get [Symbol.species] () {
        return Array;
    }
}

let a1 = new SuperAray(1, 2, 3, 4, 5);
let a2 = a1.filter(x => !!(x%2))

console.log(a1); // [1, 2, 3, 4, 5]
console.log(a2); // [1, 3, 5]
console.log(a1 instanceof SuperArray); // true
console.log(a2 instanceof SuperArray); // false
console.log(a2 instanceof Array); // true
```



### 类混入(多继承)

> 定义：将不同类的行为集中到同一个类中
>
> 模式：组合 > 继承
>
> 例：若Person类需要组合A,B,C，则需要某种机制实现B继承A，C继承B，而Person继承C
>
> 策略(之一)：定义一组“可嵌套”函数，参数为超类；混入类定义为参数子类，并返回这个类

```js
// 组合函数连续调用，组成超类表达式
class Vehicle {}

let FooMixin = (Superclass) => class extends Superclass {
    foo() {
        console.log('foo');
    }
}
let BarMixin = (Superclass) => class extends Superclass {
    bar() {
        console.log('bar');
    }
}
let BazMixin = (Superclass) => class extends Superclass {
    baz() {
        console.log('baz');
    }
}

class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {}

let b = new Bus();
b.foo(); // foo
b.bar(); // bar
b.baz(); // baz
```

> 辅助函数，将嵌套展开

```js
class Vehicle {}

let FooMixin = (Superclass) => class extends Superclass {
    foo() {
        console.log('foo');
    }
}
let BarMixin = (Superclass) => class extends Superclass {
    bar() {
        console.log('bar');
    }
}
let BazMixin = (Superclass) => class extends Superclass {
    baz() {
        console.log('baz');
    }
}

function mix(Baseclass, ...Mixins) {
    return Mixins.reduce((accumulator, current) => current(accumulate), Baseclass);
}

class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {}

let b = new Bus();
b.foo(); // foo
b.bar(); // bar
b.baz(); // baz
```

