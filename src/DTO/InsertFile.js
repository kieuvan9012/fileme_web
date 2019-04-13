import { BaseResponse, BaseRequest } from '@/DTO';
import { Commons } from '@/helpers/Commons';
function InsertFile_Response() {
    this.base = BaseResponse;
    this.Result = [];
}

InsertFile_Response.prototype = new BaseResponse();
InsertFile_Response.prototype.tranform2Model = function (rawData) {
    const _this = this;
    if (!Commons.isNullOrEmpty(rawData)) {
        _this.Result = rawData.map((item, index) => {
            return Object.assign(new InsertFile_Model(), {
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
function InsertFile_Model() {
    this.Id = '';
    this.UserId = '';
    this.Des = '';
    this.Date = '';
    this.ParentId = '';
    this.Destination = '';
    this.Originalname = '';
    this.Path = '';
    this.Mimetype = '';
    this.Size = '';
    this.Filename = '';
}
function InsertFile_Request() {
    this.base = BaseRequest;
    this.FieldName = "";
    this.OriginalName = "";
    this.Encoding = "";
    this.MimeType = "";
    this.Destination = "";
    this.FileName = "";
    this.Path = "";
    this.Size = "";
}
export { InsertFile_Response, InsertFile_Model, InsertFile_Request };
