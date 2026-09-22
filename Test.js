class Test
{
    static #_index = 0;
	static get getIndex() {return Test.#_index}
    index = null;
    constructor() {
        this.index = Test.#_index++;
    }

    Kiir123() {
        console.log('123');
    }

	Alert123() {
		alert('123');
	}

    Osszeadom(a=12,b=10) {
        console.log(`Ez egy összeadás ${a + b}`)
    }
    
    Add2Num = (a,b) => a + b;
}