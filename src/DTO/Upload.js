import { BaseResponse, BaseRequest } from '@/DTO';
import { Commons } from '@/helpers/Commons';
function Upload_Response() {
    this.base = BaseResponse;
    this.Result = [];
}

Upload_Response.prototype = new BaseResponse();
Upload_Response.prototype.tranform2Model = function (rawData) {
    const _this = this;
    if (!Commons.isNullOrEmpty(rawData)) {
        _this.Result = rawData.map((item, index) => {
            return Object.assign(new Upload_Model(), {
                FieldName: item.fieldname,
                OriginalName: item.originalname,
                Encoding: item.encoding,
                MimeType: item.mimetype,
                Destination: item.destination,
                FileName: item.filename,
                Path: item.path,
                Size: item.size
            });
        });
    }
};
function Upload_Model() {
    this.FieldName = "";
    this.OriginalName = "";
    this.Encoding = "";
    this.MimeType = "";
    this.Destination = "";
    this.FileName = "";
    this.Path = "";
    this.Size = "";
}
function Upload_Request() {
    this.base = BaseRequest;
    this.media = "";
    this.branch = '1';
}
export { Upload_Response, Upload_Model, Upload_Request };
