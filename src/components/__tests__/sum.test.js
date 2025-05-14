import sum from "../sum";

console.log("SUM");


test('it should calculate the sum of two numbers', () => { 
    const result = sum(1,3);

    //assertion
     expect(result).toBe(4);
 });