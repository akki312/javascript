/**promise function:Promises in JavaScript are a way to handle asynchronous operations. 
 * They represent a value that may be available now, or in the future, or never. */
const count = true;
let countValue = new Promise(function (resolve, reject){
    if (count) {
        resolve("there is a count value.");
    } else {
        reject("there is no value");
        }
});
console.log(countValue);
/**output:Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 'there is a count value.', Symbol(async_id_symbol): 5, Symbol(trigger_async_id_symbol): 1}*/
