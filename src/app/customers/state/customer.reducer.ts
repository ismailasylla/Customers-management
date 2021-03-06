import * as customersActions from "../state/customer.action";
import { Customer } from "../models/customers.model";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";


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

const getCustomerFeatureState = createFeatureSelector<CustomerState>(
  "customers"
);

export const getCustomers = createSelector(
  getCustomerFeatureState,
  // customerAdapter.getSelectors().selectAll
  (state: CustomerState) => state.customers
);

export const getCustomersLoading = createSelector(
  getCustomerFeatureState,
  (state: CustomerState) => state.loading
);

export const getCustomersLoaded = createSelector(
  getCustomerFeatureState,
  (state: CustomerState) => state.loaded
);

export const getError = createSelector(
  getCustomerFeatureState,
  (state: CustomerState) => state.error
);

// export const getCurrentCustomerId = createSelector(
//   getCustomerFeatureState,
//   (state: CustomerState) => state.selectedCustomerId
// );
// export const getCurrentCustomer = createSelector(
//   getCustomerFeatureState,
//   getCurrentCustomerId,
//   state => state.entities[state.selectedCustomerId]
// );


