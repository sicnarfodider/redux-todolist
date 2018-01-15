import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=datboipepe3000';

export function addItem(item){
    const request = axios.post(BASE_URL+'/todos'+API_KEY, item);
    return{
        type: types.ADD_ITEM,
        payload: request
    }
};

export function getItem(){
    const request = axios.get(BASE_URL+'/todos'+API_KEY);

    return{
        type: types.GET_ITEMS,
        payload: request
    }
}

export function getSingle(id){
    const request = axios.get(BASE_URL+'/todos/'+ id +API_KEY);
    return{
        type: types.GET_SINGLE_ITEM,
        payload: request
    }
}

export function deleteItem(id){
    const request = axios.delete(BASE_URL+'/todos/'+id+API_KEY)
    return{
        type: types.DELETE_ITEM,
        payload: request
    }
}

export function updateItem(id){
    const request = axios.put(BASE_URL+'/todos/'+id+API_KEY)
    return{
        type: types.UPDATE_ITEM,
        payload: request
    }
}

/*

axios.delete('http://api.reactprototypes.com/todos/[id?]/?key=[urapikey]')

*/
