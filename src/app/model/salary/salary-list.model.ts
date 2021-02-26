// /Danh sách phiếu lương của cá nhân
export class SalaryListModel {
  MonthlySalaryId: number;
  EmployeeId: number; //Id nhân viên
  LastName: string; //họ tên NV
  MediaURL: string; //	Ảnh NV
  TaxRequired: number; //Cộng trừ trước thuế hay sau thuế
  WorkingTimeSalaryAmount: number; //lương cơ bản theo thời gian làm việc
  InsuranceSalaryAmount: number; // đóng bảo hiểm xã hội = adm.Employees.InsuranceSalary
  AdditionBeforeTaxAmount: number;
  SubtractionBeforeTaxAmount: number;
  SubTotalAmount: number; //tổng thu nhập
  TaxableAmount: number; //thu nhập chịu thuế
  TaxCalculatedAmount: number; //thu nhập tính thuế
  TotalAmount: number; //tổng
  InsuranceAmount: number; // bảo hiểm
  TaxAmount: number; //tổng thuế
  AccumulationAmount: number; //tổng truy thu, truy lĩnh
  FinalAmount: number; //thực lĩnh
  Type: number;
  Status: number;
  CreatedOn: string; //iso
  CreatedBy: number;
  UpdatedOn: string; //iso
  UpdatedBy: number;
}
