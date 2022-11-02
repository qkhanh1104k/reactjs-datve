import React from "react";
import "./BookingTicket.css";
import ThongTinGhe from "./ThongTinGhe";
import HangGhe from "./HangGhe";
export default function BookingTicket() {
  
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
        backgroundSize: "100%",
      }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}>
        <div className="container">
          <div className="row">
            <div className="col-8 text-center">
              <div className="text-warning fs-2">
                ĐẶT VÉ XEM PHIM CYBERLEARN.VN
              </div>
              <div className="mt-5 text-white fs-4">
                Màn hình
              </div>
              <div
                className="mt-1"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}>
                <div className="screen"></div>
                
              </div>
              <HangGhe/>
            </div>
            <div className="col-4">
              <div className="text-white fs-3 mt-1">DANH SÁCH GHẾ BẠN CHỌN</div>
              <ThongTinGhe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
