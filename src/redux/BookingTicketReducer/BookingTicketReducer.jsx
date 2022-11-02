import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  danhSachGheDangDat: [],
};

const BookingTicketReducer = createSlice({
  name: "BookingTicketReducer",
  initialState,
  reducers: {
    datGheAction: (state, action) => {
      let gheDuocChon = action.payload;
      let danhSachGheDanDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDanDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === gheDuocChon.soGhe
      );
      if (index !== -1) {
        danhSachGheDanDatUpdate.splice(index, 1);
      } else {
        danhSachGheDanDatUpdate.push(gheDuocChon);
      }
      state.danhSachGheDangDat = danhSachGheDanDatUpdate;
    },
    huyGheAction: (state, action) => {
      let soGheHuy = action.payload;
      state.danhSachGheDangDat = state.danhSachGheDangDat.filter(
        (ghe) => ghe.soGhe !== soGheHuy
      );
    },
  },
});

export const { datGheAction, huyGheAction } = BookingTicketReducer.actions;

export default BookingTicketReducer.reducer;

//action creator
export const datVeGhe = (ghe) => {
  return (dispatch) => {
    let result = ghe;
    const action = datGheAction(result);
    dispatch(action);
  };
};

export const huyVeGhe = (soGhe) => {
  return (dispatch) => {
    let result = soGhe;
    const action = huyGheAction(result);
    dispatch(action);
  };
};
