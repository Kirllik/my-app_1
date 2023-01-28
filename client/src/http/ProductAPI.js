import {$host} from "./index";
import data from "bootstrap/js/src/dom/data";


export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.get('api/device')
    console.log("data= ", data)
    return data
}

export const fetchProductOne = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    console.log("fetchProductOne", data)
    return data
}