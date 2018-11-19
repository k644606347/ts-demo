declare let str: string;
declare let x: number, y: number;
declare class SuperC1 {
    x?: number;
}
declare class C1 extends SuperC1 {
    static instances: C1[];
    name: string;
    constructor(...args: any[]);
}
declare let c1: C1;
export { str, x, y, c1, C1, };
