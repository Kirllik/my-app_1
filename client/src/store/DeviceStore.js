import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Масла"},
            {id: 2, name: "Шины"},
            {id: 3, name: "Диски"},
            {id: 4, name: "ИТД"}
        ]
        this._brands = [
            {id: 1, name: "Nokian"},
            {id: 2, name: "Barum"},
            {id: 3, name: "Barum"},
            {id: 4, name: "Continental"},
            {id: 5, name: "Barum"},
            {id: 6, name: "Barum"},
            {id: 7, name: "Barum"},
            {id: 8, name: "Barum"},
            {id: 9, name: "Barum"},
            {id: 10, name: "Barum"},
            {id: 11, name: "Barum"},
            {id: 12, name: "Barum"},
            {id: 13, name: "Barum"},
            {id: 14, name: "Barum"},
            {id: 15, name: "Barum"},
            {id: 16, name: "Barum"},
            {id: 17, name: "Barum"},
        ]
        this._products = [
            {
                id: 1,
                name: "Nordman SX3",
                price: 5000,
                rating: 3,
                img: 'https://img.exist.ru/img.jpg?Key=7981c580-72e7-47ea-bd14-35239db4029d_304&Size=1600x1400&MethodType=36'
            },
            {
                id: 2,
                name: "Hakka Blue 3",
                price: 6000,
                rating: 2,
                img: 'https://img.exist.ru/img.jpg?Key=7981c580-72e7-47ea-bd14-35239db4029d_304&Size=1600x1400&MethodType=36'
            },
            {
                id: 3,
                name: "Brillantis 2",
                price: 7000,
                rating: 4,
                img: 'https://img.exist.ru/img.jpg?Key=7981c580-72e7-47ea-bd14-35239db4029d_304&Size=1600x1400&MethodType=36'
            },
            {
                id: 4,
                name: "Mobile",
                price: 5500,
                rating: 5,
                img: 'https://img.exist.ru/img.jpg?Key=c558cbf6-cd2b-489c-8d2d-e26c1b8ceb04_304&Size=1600x1400&MethodType=36'
            },
            {
                id: 5,
                name: "Lukoil",
                price: 3500,
                rating: 3   ,
                img: 'https://img.exist.ru/img.jpg?Key=c558cbf6-cd2b-489c-8d2d-e26c1b8ceb04_304&Size=1600x1400&MethodType=36'
            }
        ]
        this._selectedType = {}  // Для хранения выделенного типа Type
        this._selectedBrand = {}  // Для хранения выделенного типа Brand

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}