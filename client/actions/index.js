import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

import ACTION_TYPES from '../constants';


const phonesList = [
    {
        id: "1",
        categoryId: "1",
        name: "Apple iPhone 5c",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 823,
        image: "/production/uploads/iphone5c-selection-hero-2013.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "2",
        categoryId: "1",
        name: "Apple iPhone 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 953,
        image: "/production/uploads/51u6y9Rm8QL._SY300_.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "3",
        categoryId: "4",
        name: "Lenovo A6000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 764,
        image: "/production/uploads/_35%20(1).JPG",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "4",
        categoryId: "5",
        name: "Nokia Lumia 1520",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "/production/uploads/Lumia1520-Front-Back-png.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "5",
        categoryId: "3",
        name: "HTC One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "/production/uploads/htc-one-m7-802w-dual-sim-silver.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "6",
        categoryId: "2",
        name: "Samsung Galaxy S6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "/production/uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    }
]

const categoriesList = [
  {
    id: "1",
    name: 'Apple'
  },
  {
    id: "2",
    name: 'Samsung'
  },
  {
    id: "3",
    name: 'Htc'
  },
  {
    id: "4",
    name: 'Lenovo'
  },
  {
    id: "5",
    name: 'Microsoft'
  }
]


export function loadMorePhones() {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.LOAD_MORE_PHONES_REQUEST
        });

        Promise.resolve()
            .then(() => {
                dispatch({
                    type: ACTION_TYPES.LOAD_MORE_PHONES_SUCCESS,
                    payload: {
                        phones: phonesList
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: ACTION_TYPES.LOAD_MORE_PHONES_FAILURE,
                    error: err
                })
            })

        // axios.get(`${apiPrefix}/phones`)
        //     .then(({data}) => {

        //         dispatch({
        //             type: ACTION_TYPES.LOAD_MORE_PHONES_SUCCESS,
        //             payload: {
        //                 phones: data
        //             }
        //         })
        //     })
        //     .catch(err => {
        //         dispatch({
        //             type:ACTION_TYPES.LOAD_MORE_PHONES_FAILURE,
        //             error: err
        //         })
        // })
    }
};

export function fetchCategories() {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.FETCH_CATEGORIES_REQUEST
        });

        Promise.resolve()
            .then(() => {
                dispatch({
                    type: ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
                    payload: {
                        categories: categoriesList
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
                    error: err
                })
            })
    }
};

export function fetchPhones() {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.FETCH_PHONES_REQUEST
        });

        Promise.resolve()
            .then(() => {
                dispatch({
                    type: ACTION_TYPES.FETCH_PHONES_SUCCESS,
                    payload: {
                        phones: phonesList
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: ACTION_TYPES.FETCH_PHONES_FAILURE,
                    error: err
                })
            })
    }
};


export function fetchPhoneById(id) {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.FETCH_PHONE_BY_ID_REQUEST
        });

        Promise.resolve()
            .then(() => {

                const phone = phonesList.filter(phone => phone.id == id)[0]

                dispatch({
                    type: ACTION_TYPES.FETCH_PHONE_BY_ID_SUCCESS,
                    payload: {
                        phone
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: ACTION_TYPES.FETCH_PHONE_BY_ID_FAILURE,
                    error: err
                })
            })
    }
};

export function addPhoneToBasket(id){
    return (dispatch) => dispatch({
            type: ACTION_TYPES.ADD_PHONE_TO_BASKET,
            payload: {
                id
            }
        });
}

export function removePhoneFromBasket(id){
    return (dispatch) => dispatch({
            type: ACTION_TYPES.REMOVE_PHONE_TO_BASKET,
            payload: {
                id
            }
        });
}

export function searchPhone(text){
    return (dispatch) => dispatch({
            type: ACTION_TYPES.SEARCH_PHONE,
            payload: {
                text
            }
        });
}

export function cleanBasket(){
    return  (dispatch) => dispatch({
      type: ACTION_TYPES.CLEAN_BASKET
    })
}

export function basketCheckout(phones){
    alert(JSON.stringify(phones))
}