import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { huyVeGhe } from "../../redux/BookingTicketReducer/BookingTicketReducer";

export default function ThongTinGhe() {
  const { danhSachGheDangDat } = useSelector(
    (state) => state.BookingTicketReducer
  );
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="mt-5">
        <button className="btn gheDuocChon"></button>
        <span className="fs-4 text-white">Ghế đã đặt</span>
        <br />
        <button className="btn gheDangChon"></button>
        <span className="fs-4 text-white">Ghế đang đặt</span>
        <br />
        <button className="btn ghe ms-0"></button>
        <span className="fs-4 text-white">Ghế chưa đặt</span>
      </div>
      <div className="table-responsive mt-5">
        <table className="table table-bordered ">
          <thead>
            <tr className="text-white fs-3">
              <th scope="col">Số ghế</th>
              <th scope="col">Giá</th>
              <th scope="col">Hủy</th>
            </tr>
          </thead>
          <tbody>
            {danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <tr className="text-white " key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        const action = huyVeGhe(gheDangDat.soGhe);
                        dispatch(action);
                      }}>
                      Hủy
                    </button>
                  </td>
                </tr>
                
              );
            })}
            <tr className="text-white fs-4 fw-bolder">
              <td></td>
              <td>Tổng tiền</td>
              <td>
                {danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                  return (tongTien += gheDangDat.gia);
                },0).toLocaleString()}
              </td>
            </tr>
          </tbody>
          <tfoot>
            
          </tfoot>
        </table>
      </div>
    </div>
  );
}
