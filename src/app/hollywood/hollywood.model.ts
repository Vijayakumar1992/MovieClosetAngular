export class Hollywood {

    constructor(
        public _id: string,
        public id: string,
        public name: string,
        public type: string,
        public genre: string,
        public children: Hollywood[]
        ) { }
}