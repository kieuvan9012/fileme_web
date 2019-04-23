import { BaseResponse } from '@/DTO';
import { Commons } from '@/helpers/Commons';
function FileList_Response() {
  this.base = BaseResponse;
  this.Result = [];
}

FileList_Response.prototype = new BaseResponse();
FileList_Response.prototype.tranform2Model = function (rawData) {
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
        OriginalName: item.originalname,
        Path: item.path,
        MimeType: item.mimetype,
        Size: item.size,
        FileName: item.filename,
        ParentId: item.parent_id,
        FilePath: getFilePath(rawData, item)
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
  this.OriginalName = '';
  this.Path = '';
  this.MimeType = '';
  this.Size = '';
  this.FileName = '';
  this.ParentId = '';
  this.FilePath = '';
}

function getFilePath(rawData, item) {
  let filepath = "";
  const parent = rawData.find(element => { return element.id === item.parent_id });
  if (parent)
    filepath += getFilePath(rawData, parent) + item.originalname + "/";
  else filepath = item.originalname + "/"
  return filepath;
}

export { FileList_Response, FileList_Model };
