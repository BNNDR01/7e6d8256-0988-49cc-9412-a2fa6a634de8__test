class Test {
    static #_index = 0;
	static get getIndex() {return Test.#_index}
    index = null;
    constructor() {
        this.index = Test.#_index++;
    }
}