class Stack {


    constructor() {
        
        this.top = -1;
        this.items= {};
    
    }
    
    get peak() {

        return this.items[this.top];

    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value; 
    }

    pop() {


        const p = this.items[this.top];
        this.top -= 1;
        return p;

    }

}



describe('My Stack', () => {


    let stack;

    beforeEach( () => {
        stack = new Stack();
    });

    it('is created empty', () => {
    
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});

    });

    it('can push to the top', () => {
    
        stack.push('it is raining');
        expect(stack.top).toBe(0);
        expect(stack.peak).toBe('it is raining');

    });



    it('can pop off', () => {
        
        stack.push('33');

        const top = stack.top;
        expect(stack.pop()).toBe('33');
        expect(stack.top).toBe(top-1);


    });

    // it.todo('is created empty');

    // it.todo('can push to the top');

    // it.todo('can pop off');

})