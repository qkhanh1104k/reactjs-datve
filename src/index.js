import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingTicket from "./Pages/BookingTicket/BookingTicket";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<BookingTicket />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
