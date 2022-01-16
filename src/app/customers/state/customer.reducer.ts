const initialState = {
  customers: [
    {
      "id": 1,
      "name": "James",
      "membership": "Platinium",
      "phone": "00-222-55-678",
      "address": {
        "street": "6649 N Blue Gum St",
        "city": "New Orleans",
        "state": "LA",
        "zip": "70116"
      }
    },
  ],
  loading: false,
  loaded: true
} 

export function customerReducer(state = initialState, action: { type: any }){
  switch (action.type ){
    case "LOAD_CUSTOMERS":{
      return {
        ...state,
        loading: true,
        loaded: false
      }
    }
    default:{
      return state
    }
  }
}