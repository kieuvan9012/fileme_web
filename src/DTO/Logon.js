import { BaseResponse } from '@/DTO';
import { Commons } from '@/helpers/Commons';
function Logon_Response() {
  this.base = BaseResponse;
  this.Result = [];
}

Logon_Response.prototype = new BaseResponse();
Logon_Response.prototype.tranform2Model = function(rawData) {
  const _this = this;
  if (!Commons.isNullOrEmpty(rawData)) {
    _this.Result = rawData.map((item, index) => {
      return Object.assign(new Logon_Model(), {
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
function Logon_Model() {
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

export { Logon_Response, Logon_Model };
