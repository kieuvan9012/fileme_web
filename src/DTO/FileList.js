import { BaseResponse } from '@/DTO';
import { Commons } from '@/helpers/Commons';
function FileList_Response() {
  this.base = BaseResponse;
  this.Result = [];
}

FileList_Response.prototype = new BaseResponse();
FileList_Response.prototype.tranform2Model = function(rawData) {
  const _this = this;
  if (!Commons.isNullOrEmpty(rawData)) {
    _this.Result = rawData.map((item, index) => {
      return Object.assign(new FileList_Model(), {
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
function FileList_Model() {
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

export { FileList_Response, FileList_Model };
