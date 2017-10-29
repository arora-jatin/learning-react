class ValueProvider {
    constructor() {
        this.values = arguments;
    }

    returnCSV(){
        let msg = '';
        for(let value of this.values) {
            msg += value + ', ';
        }
        return msg;
    }
}

export { ValueProvider };