import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { SalaryListModel } from "src/app/model/salary/salary-list.model";
import { SalaryListService } from "src/app/service/salary/salary-list.service";
import { SalaryDetailPage } from "../salary-detail/salary-detail.page";

@Component({
  selector: "app-wages-payroll",
  templateUrl: "./wages-payroll.page.html",
  styleUrls: ["./wages-payroll.page.scss"],
})
export class WagesPayrollPage implements OnInit {
  listSalaryOfYear: SalaryListModel[];
  currentDate = new Date().toISOString();
  selectedYear = new Date().getFullYear();
  constructor(
    private salaryListService: SalaryListService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getListSalayOfMonth(this.selectedYear);
  }
  changeDate(e) {
    let date = new Date(e.detail.value);
    this.selectedYear = date.getFullYear();
    this.getListSalayOfMonth(this.selectedYear)
  }
  async openModal(item) {
    console.log(item);

    const modal = await this.modalController.create({
      component: SalaryDetailPage,
      cssClass: "salary-detail",
      componentProps: {
        data: item,
      },
    });
    await modal.present();
  }

  getListSalayOfMonth(year) {
    this.salaryListService
      .getListSalaryOfYear(year)
      .subscribe((res) => {
        this.listSalaryOfYear = res;
      });
  }
}
