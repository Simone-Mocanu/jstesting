class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        this.items[this.top] = undefined;
        this.top -= 1;
    }
}

describe("My stack", () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });
    
    it('is created empty', () => {

       expect(stack.top).toBe(-1);
       expect(stack.items).toEqual({});
    });


    it('can push to the top', () => {
        stack.push('🥑');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑');
    });
    
    it('can pop off', () => {
        stack.push('🥑');
        expect(stack.top).toBe(0);
        stack.push('🥑');
        expect(stack.top).toBe(1);
        stack.pop();
        expect(stack.top).toBe(0);
        expect(stack.items).toEqual({"0": "🥑"});
        expect(stack.peek).toBe("🥑");
    });
})