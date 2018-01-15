export default store => next => action =>{
    //code goes here
    console.log('logger', action);

    const result = next(action);

    console.log('next state', store.getState());

    return result;
}



// export default function(store){
//     return function(next){
//         return function(action){
//             //code
//         }
//     }
// }
