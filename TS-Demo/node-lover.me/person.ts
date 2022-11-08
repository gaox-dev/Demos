enum Choose {
    Wife = 1,
    Mother = 2,
} // 选择妻子 还是 妈妈

function question(choose: Choose): void {
    console.log("你老婆和你妈妈同时掉进水里了，你先救哪一个？");
    console.log("你的选择是：" + choose);
}

// question(Choose.Mother);

class Person {
    name: string;
    age: number;
    labels: Array<string>; //! 标签组
    wives: string[]; // 妻子们
    contact: [string, number]; //元组 联系【联系地址，联系电话】
    other: any; // 备注
    saveMother: boolean = true; // 是否救落水的妈妈
    constructor() { }
    answer(): Choose {
        if (this.saveMother === false) {
            return Choose.Wife;
        }
        return Choose.Mother;
    }
    hello(): void {
        console.log("hello~ I'm " + this.name);
        return undefined;
        // return null;
    }
    empty() { }

    down(): never {
        while (true) {
            // throw new Error('error')
        }
    }
}

// let zhangsan = new Person();
// zhangsan.name = "张三";
// zhangsan.age = 28;
// zhangsan.labels = ["颜值逆天", "年轻多金"];
// zhangsan.wives = ["一号", "二号", "三号"];
// zhangsan.contact = ["北京xxxxx", 88888888];
// zhangsan.saveMother = false;
// zhangsan.other = '不好不坏的人'
// let len = (<string>zhangsan.other).length;
// let len2 = (zhangsan.other as string).length;
// console.log(len, len2);
// question(zhangsan.answer());
// zhangsan.hello();
// console.log(zhangsan.empty());


interface Db {
    host: string;
    port: number;
}

class MySQL implements Db {
    host: string;
    port: number;

    constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
        console.log(`正在链接 ` + this.host + ":" + this.port +
            "的数据库....");
    }
}

let mysql = new MySQL('localhost', 3306);

interface Person2 {
    readonly IdCard: string; // 身份证
    name?: string;
    [propName : string]: any;
}

let person: Person2 = { IdCard: 'asa', name:"aaaaaaaa" };

function getPerson2(p: Person2) {
    console.log(p);
}

getPerson2({IdCard:"aaa", b : 2});
