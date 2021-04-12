---
title: 【JS-Object】对象-属性-描述符
date: 2021-04-12
categories:
 - JS
tags:
 - js-Object
---

# 对象-属性-描述符

## 属性描述符

是内部特性；描述属性特征；无法直接访问；由引擎实现；数据描述符和访问描述符不可同时定义

### 数据描述符

#### `[[Configurable]] [[Enumerable]] [Writable]] [[Value]]`

> 通过`Object.defineProperty()`定义属性时修改，默认值为`false`

`[[Configurable]]`：` true`；是否可配置（包括`delete`并重定义，修改特性，改为访问器属性）；一旦为`false`，不可更改

`[[Enumerable]]`：` true`；是否可枚举（`for...in`）

`[[Writable]]`：` true`；是否可修改值

`[[Value]]`：` undefined`；属性存放的值

```javascript
/* configurable:false后不可在定义，修改描述符 */ 
let objC = {};

Object.defineProperty(objC, 'key', {
    configurable: false,
    value: 'test'
})
delete objC.key;
Object.defineProperty(objC, 'key', {
    configurable: true,
    enumerable: true
})

/* enumberable:false后该属性在遍历时不出现 */ 
let objE = {
    key: 'keyV',
    value: 'valueV'
}
for (const key in objE) {
	console.log(key);
}
// key
// value
Object.defineProperty(objE, 'key', {
    enumerable: false
})
for (const key in objE) {
    console.log(key);
}
// value

/* writable:false */ 
let objW = {};

Object.defineProperty(objW, 'key', {
    writable: false,
    value: 'keyV'
})
console.log(objW.key); // keyV
objW.key = 'keyV2';
console.log(objW.key); // keyV
```



### 存取描述符

#### `[[Configurable]] [[Enumerable]] [[Get]] [[Set]]`

> 无法直接定义，可通过`Object.defineProperty()`定义

`[[Configurable]]`：` true`；是否可配置（包括`delete`并重定义，修改特性，改为访问器属性）；一旦为`false`，不可更改

`[[Enumerable]]`：` true`；是否可枚举（`for...in`）

`[[Get]]`：` undefined` ；获取函数，获取属性值时调用

`[[Set]]`：` undefined`；设置函数，修改属性值时调用

```javascript
/* 不定义get和set,默认为数据描述符 */
let objNone = {};
Object.defineProperty(objNone, 'key', {
    value: 'keyV'
});
objNone.key = 'keyV2';
console.log(objNone.key); // keyV

/* 仅定义get */
let objGet = {};
Object.defineProperty(objGet, 'key', {
    get() {
        return 'keyV';
    }
});
console.log(objGet.key);
objGet.key = 'keyV2';
console.log(objGet.key);

/* 仅定义set */
let objSet = {};
Object.defineProperty(objSet, 'key', {
    set(newVal) {
        console.log(newVal); // keyVal
    }
})
objSet.key = 'keyVal';
console.log(objSet.key); // undefined

/* 同时定义set和get */
// 伪私有变量year_和公有成员edition
// *通过监听一个值改变，修改其他值；-简易订阅-发布模式*
let objAll = {
    year_: 1997,
    edition: 1
}
Object.defineProperty(objAll, 'year', {
    get() {
        return this.year_;
    },
    set(newVal) {
        if (newVal > 2000) {
            this.year_ = newVal;
            this.edition = newVal - 2000;
        }
    }
})
objAll.year = 2021;
console.log(objAll.edition); // 21
```

## 定义多个属性

#### `Object.defineProperty()`

## 定义多个属性

#### `Object.defineProperties()`

> `Object.defineProperties({}, {})`-参一：目标对象；参二：描述符对象

```javascript
/* 多属性定义 */
let objMultiDefine = {};
Object.defineProperties(objMultiDefine, {
    year_: {
        value: 2021
    },
    edition: {
        value: 1
    },
    year: {
        get() {
            return this.year_;
        },
        set(newVal) {
            if (newVal > 2000) {
                this.year_ = newVal;
                this.edition += newVal - 2000;
            }
        }
    }
})
console.log(objMultiDefine); // {} -原因：所有属性的enumberable描述符都为false，无法遍历输出
```



## 获取属性描述符

#### `Object.getOwnPropertyDescriptor()`

> `Object.getOwnPropertyDescriptor()`-获取某个属性的描述符
>
> 参一：目标对象；参二：属性名；返回值：包含多个描述符的对象

```javascript
// 数据描述符和访问描述符不可混用，否则报错
/* 获取属性描述符 */
let objAttr = {};
Object.defineProperties(objAttr, {
    year_: {
        value: 2021
    },
    edition: {
        value: 1
    },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2021) {
                this.year_ = newValue;
                this.edition += newValue - 2021;
            }
        }
    }
});
let descriptor = Object.getOwnPropertyDescriptor(objAttr, 'year_');
console.log(descriptor.value); // 2021
console.log(descriptor.configurable); // false
console.log(typeof descriptor.get); // undefined
descriptor = Object.getOwnPropertyDescriptor(objAttr, 'year');
console.log(descriptor.value); // undefined
console.log(descriptor.enumerable); // false
console.log(typeof descriptor.get); // function
```

#### `Object.getOwnPropertyDescriptors`

> `Object.getOwnPropertyDescriptors()`-ES6 --获取对象的所有属性的描述符

```javascript
/* 获取对象的所有属性描述符 */
let objMultiAttr = {};
Object.defineProperties(objMultiAttr, {
    year_: {
        value: 2021
    },
    edition: {
        value: 1
    },
    year: {
        get() {
            return this.year_;
        },
        set(newVal) {
            if (newVal > 2000) {
                this.year_ = newVal;
                this.edition += newVal - 2000;
            }
        }
    }
});
let descriptors = Object.getOwnPropertyDescriptors(objMultiAttr);
console.log(descriptors);
// {
//   year_: {
//     value: 2021,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   edition: { value: 1, writable: false, enumerable: false, configurable: false },
//   year: {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: false,
//     configurable: false
//   }
// }
```

