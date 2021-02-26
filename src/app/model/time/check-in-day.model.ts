//Kiểm tra dữ liệu checkin mới nhất trong ngày có bị đi muộn/về sớm hay không
export class CheckInDay {
  WorkingDay: string; // ngày
  CheckinTime: string; // giờ vào
  CheckoutTime: string; // giờ ra
  Duration: number; // sớm muộn ? phút
}
