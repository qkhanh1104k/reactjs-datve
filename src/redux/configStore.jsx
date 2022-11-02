import {configureStore} from "@reduxjs/toolkit"
import BookingTicketReducer from "./BookingTicketReducer/BookingTicketReducer"

export const store = configureStore({
  reducer:{
    BookingTicketReducer,
    
  }
})