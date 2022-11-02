import React from "react";
import danhSachGheData from "../../Data/danhSachGhe.json";
import { useSelector, useDispatch } from "react-redux";
import { datVeGhe } from "../../redux/BookingTicketReducer/BookingTicketReducer";
export default function HangGhe() {
  const { danhSachGheDangDat } = useSelector(
    (state) => state.BookingTicketReducer
  );
  const dispatch = useDispatch();
  return (
    <>
      {danhSachGheData.map((hangGhe, index) => {
        if (index === 0) {
          return (
            <div key={index}>
              <div className="text-white text-start ms-5 mt-3 fs-3">
                {hangGhe.hang}
                {hangGhe.danhSachGhe.map((hang, index) => {
                  return <button className="rowNumber" key={index}>{hang.soGhe}</button>;
                })}
              </div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div className="text-white text-start mt-3 fs-3">
                <span
                  className="btn text-white fs-3"
                  style={{ width: "37.45px" }}>
                  {hangGhe.hang}
                </span>
                {hangGhe.danhSachGhe.map((ghe, index) => {
                  let cssGheDaDat = "";
                  let disabled = false;
                  //Trạng thái ghế đã bị người khác đặt rồi
                  if (ghe.daDat) {
                    cssGheDaDat = "gheDuocChon";
                    disabled = true;
                  }
                  //Xét trạng thái ghế đang đặt
                  let cssGheDangDat = "";
                  let indexGheDangDat = danhSachGheDangDat.findIndex(
                    (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
                  );
                  if (indexGheDangDat !== -1) {
                    cssGheDangDat = "gheDangChon";
                  }
                  return (
                    <button
                      onClick={() => {
                        const action = datVeGhe(ghe);
                        dispatch(action);
                      }}
                      disabled={disabled}
                      className={`ghe fw-bold fs-6 ${cssGheDaDat} ${cssGheDangDat}`}
                      key={index}>
                      {ghe.soGhe}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
