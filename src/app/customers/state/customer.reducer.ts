import * as customersActions from "../state/customer.action";
import { Customer } from "../models/customers.model";
import * as fromRoot from "../../state/app.state";


export interface CustomerState {
  customers: Customer[],
  loading: boolean,
  loaded: boolean,
  error: string

}

export interface AppState extends fromRoot.AppState {
  customers: CustomerState
}

export const initialState : CustomerState = {
  customers:[],
  loading: false,
  loaded: false,
  error: ""
}


export function customerReducer(state = initialState, action: customersActions.CustomerActions): CustomerState{
  switch (action.type ){
    case customersActions.CustomerActionTypes.LOAD_CUSTOMERS:{
      return {
        ...state,
        loading: true,
      }
    }

    case customersActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS:{
      return {
        ...state,
        loading: false,
        loaded: true,
        customers: action.payload
      }
    }

    case customersActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL:{
      return {
        ...state,
        customers:[],
        loading: false,
        loaded: false,
        error: action.payload
      }
    }


    default:{
      return state
    }
  }
}

// const initialState = {
//   customers: [
//     {
//       "id": 1,
//       "name": "James",
//       "membership": "Platinium",
//       "phone": "00-222-55-678",
//       "address": {
//         "street": "6649 N Blue Gum St",
//         "city": "New Orleans",
//         "state": "LA",
//         "zip": "70116"
//       }
//     },
//   ],
//   loading: false,
//   loaded: true
// } 

// export function customerReducer(state = initialState, action: { type: any }){
//   switch (action.type ){
//     case "LOAD_CUSTOMERS":{
//       return {
//         ...state,
//         loading: true,
//         loaded: false
//       }
//     }
//     default:{
//       return state
//     }
//   }
// }