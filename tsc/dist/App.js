let str = '123';
let obj1 = {};
let { x, y } = obj1;
let log = (...args) => console.log(args);
let mixed = Object.assign({}, obj1, { mixed: true });
obj1.x = 123;
obj1.y = 456;
log(x, y);
log(mixed);
class SuperC1 {
}
class C1 extends SuperC1 {
    constructor(...args) {
        super();
        this.name = args[0];
        console.log('C1');
        C1.instances.push(this);
    }
}
C1.instances = [];
let c1 = new C1();
let div1 = document.createElement('div');
let img1 = document.createElement('img');
div1.append(img1);
let arr1 = ['x', ' y', 'z'];
arr1.find(n => n === 'x');
export { str, x, y, c1, C1, };
//# sourceMappingURL=App.js.map