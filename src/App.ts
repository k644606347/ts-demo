let str: string = '123';
let obj1: {
    x?: number,
    y?: number
} = {};
let { x, y } = obj1;//解构.

let log = (...args: any[]) => console.log(args);//剩余语法
let mixed = {...obj1, mixed: true};
obj1.x = 123;
obj1.y = 456;

log(x, y);
log(mixed);

interface C1Interface {
    x?: number;
}
class SuperC1 {
    x?: number;
}
class C1 extends SuperC1 {
    static instances: C1[] = [];
    name: string;
    constructor(...args: any[]) {
        super();
        this.name = args[0];
        console.log('C1');
        C1.instances.push(this);
    }
}

let c1 = new C1();
let div1 = document.createElement('div');
let img1 = document.createElement('img');
div1.append(img1);

let arr1: Array<string | number> = ['x',' y', 'z'];

arr1.find(n => n === 'x');//不会转换运行时对象的特性
// str.padStart(5, '^').trim();
export {
    str,
    x,
    y,
    c1,
    C1,
};