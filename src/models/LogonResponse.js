import { BaseFunction } from "../commons";
function LogonModel() {
    this.address = "";
    this.aliasname = "";
    this.avatar = "";
    this.cover = "";
    this.create_date = "";
    this.district_id = "";
    this.district_name = "";
    this.gender = 0;
    this.id = 0;
    this.info_success = 0;
    this.password = "";
    this.phone = "";
    this.province_id = 0;
    this.province_name = "";
    this.university_id = 0;
    this.university_name = "";
    this.username = "";

}

function LogonResponse() {
    this.base = BaseFunction;
}
export { LogonResponse, LogonModel };
