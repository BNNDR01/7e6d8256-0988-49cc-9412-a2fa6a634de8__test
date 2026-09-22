class Test
{
    static #_index = 0;
	static get getIndex() {return Test.#_index}
    index = null;
    constructor() {
        this.index = Test.#_index++;
    }
    a = 12
    b = 10
    
    Kiir123() {
        console.log('123');
    }

    Osszeadom() {
        console.log(`Ez egy összeadás ${a + b}`)
    }
    

    


}