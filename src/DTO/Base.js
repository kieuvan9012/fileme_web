import Commons from '../helpers/Commons';

function BaseResponse() {
  this.Mesage = '';
  this.Data = null;
  this.Value = '';
  this.Success = 0;
  this.Code = 0;
}

//only receive node data of response of axios
BaseResponse.prototype.mapNodeExpectResult = function (data) {
  if (data !== undefined && data !== null) {
    this.Code = data.code;
    this.Success = Number(data.success || 0);
    this.Value = data.value;
    this.Mesage = data.mesage || '';
  }
};
BaseResponse.prototype.checkResponse = function (data) {
  if (data !== undefined && data !== null) {
    return this.Success === 1;
  }
  return false;
};
function BaseRequest() {
  this.user_id = "";//dung ham lay id tu session
}

//only receive node data of response of axios
BaseRequest.prototype.checkRequest = function (data) {
  if (data !== undefined && data !== null) {
    this.Code = data.code;
    this.Success = Number(data.success || 0);
    this.Value = data.value;
    this.Mesage = data.mesage || '';
  }
};
export { BaseResponse, BaseRequest };