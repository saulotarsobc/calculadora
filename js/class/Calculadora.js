class Calculator {
    constructor() {
        this._operator = "";
        this._current = "";
    }

    get operator() {
        return this._operator;
    }
    set operator(v) {
        this._operator = v;
    }

    get current() {
        return this._current;
    }
    set current(v) {
        this._current += v;
    }

    info() {
        console.log(this);
    }
    clear() {
        this._operator = "";
        this._current = "";
    }
}