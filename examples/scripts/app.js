import { ValueProvider } from './ValueProvider';

let args = [];

for (let i = 0; i < 10; i++){
    args.push(`argument${i}`);
}

let valueObject = new ValueProvider(...args);

console.log(valueObject.returnCSV());