import {add, Sub} from './Dummy'
test('Add Two Numbers', () => { 
expect(add(2,5)).toBe(7);
expect(add(5,5)).toBe(10);
expect(add(9,11)).toBe(20);
expect(add(7,8)).toBe(15);

 });
 test('Sub Two Number', () => {

    expect(Sub(10,3)).toBe(7);
    expect(Sub(13,3)).toBe(10);
    expect(Sub(40,20)).toBe(20);
    expect(Sub(30,15)).toBe(15);
    
 });