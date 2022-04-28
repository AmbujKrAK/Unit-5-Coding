import { legacy_createStore } from "@reduxjs/toolkit";
import {counterReducer} from "./reducer";

export const store = createStore(counterReducer, { counter: 0, todos: []});

// store.subscribe(() =>{
//     console.log("Subscribtion", store.getState());
// });

