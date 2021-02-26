export class SalaryDetailModel {
  MonthlySalaryId: number;
  EmployeeId: number; //Id nhân viên
  LastName: string; //Họ tên NV
  MediaURL: string; //Ảnh NV
  WorkingYear: number;
  WorkingMonth: number; //WorkingMonth
  WorkingTimeSalaryAmount: number; //lương cơ bản theo thời gian làm việc
  InsuranceSalaryAmount: number; //lương đóng bảo hiểm xã hội = adm.Employees.InsuranceSalary
  AdditionBeforeTaxAmount: number;
  SubtractionBeforeTaxAmount: number;
  SubTotalAmount: number; //tổng thu nhập
  TaxableAmount: number; //thu nhập chịu thuế
  TaxCalculatedAmount: number; //thu nhập tính thuế
  TotalAmount: number; //tổng
  InsuranceAmount: number; //tổng bảo hiểm
  TaxAmount: number; //tổng thuế
  AccumulationAmount: number; //tổng truy thu, truy lĩnh
  FinalAmount: number; //thực lĩnh
  Type: number;
  Status: number;
  CreatedOn: string;
  CreatedBy: number;
  UpdatedOn: string;
  UpdatedBy: number;
  //Thêm các trường
  BaseSalary: number; //Lương cơ bản
  RealCount: number; //Công đi làm
  HolidayCount: number; //Công chế độ
}
