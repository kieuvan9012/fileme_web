import { BaseResponse, BaseRequest } from '@/DTO';
import { Commons } from '@/helpers/Commons';
function Register_Response() {
    this.base = BaseResponse;
    this.Result = [];
}

Register_Response.prototype = new BaseResponse();
Register_Response.prototype.tranform2Model = function (rawData) {
    const _this = this;
    if (!Commons.isNullOrEmpty(rawData)) {
        _this.Result = rawData.map((item, index) => {
            return Object.assign(new Register_Model(), {
                Id: item.id,
                UserId: item.user_id,
                Des: item.des,
                Date: item.date,
                ParentId: item.parent_id,
                Destination: item.destination,
                Originalname: item.originalname,
                Path: item.path,
                Mimetype: item.mimetype,
                Size: item.size,
                Filename: item.filename,
            });
        });
    }
};
function Register_Model() {
    this.Id = '';
    this.UserName = '';
    this.AliasName = '';
    this.Phone = '';
}
function Register_Request() {
    this.username = "";
    this.password = "";
}
export { Register_Response, Register_Model };
