import { Common } from '@/helpers/Commons';
import {
  FileList_Response,
  FileList_Model,
  Upload_Response,
  Upload_Model,
  InsertFile_Response,
  InsertFile_Model
} from '@/DTO';
import axios from 'axios';

export async function getFileList(Request) {
  var _this = this;
  var rltResult = new FileList_Response();

  await axios.post('http://dephoanmy.vn:9886/file/list', Request)
    .then(response => {
      const { data } = response;
      rltResult.mapNodeExpectResult(data);
      //if (rltResult.checkResponse()) {}
      rltResult.tranform2Model(data.data);

      //return rltResult;
    })
    .catch(error => {
      console.log(error);
    });
  return rltResult;
};
export async function uploadMedia(Request) {
  console.log('BEGIN invoke api uploadMedia');
  var _this = this;
  var rltResult = new Upload_Response();
  await axios.post('http://dephoanmy.vn:9886/upload/media', Request.formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    }
  })
    .then(response => {
      const { data } = response;
      rltResult.mapNodeExpectResult(data);
      //if (rltResult.checkResponse()) {}
      rltResult.tranform2Model(data.data);

      //return rltResult;
    })
    .catch(error => {
      console.log(error);
    });
  return rltResult;
}
export async function insertFile(Request) {
  console.log('BEGIN invoke api insertFile');
  var _this = this;
  var rltResult = new InsertFile_Response();
  await axios.post('http://dephoanmy.vn:9886/file/insert', Request)
    .then(response => {
      const { data } = response;
      rltResult.mapNodeExpectResult(data);
      if (rltResult.checkResponse()) {
        rltResult.tranform2Model(data.data);
      }
    })
    .catch(error => {
      console.log(error);
    });
  return rltResult;
}
export async function deleteFile(Request) {
  console.log('BEGIN invoke api deletefile');
  var _this = this;
  var rltResult = new BaseResponse();
  await axios.post('http://dephoanmy.vn:9886/file/delete', Request)
    .then(response => {
      const { data } = response;
      rltResult.mapNodeExpectResult(data);
    })
    .catch(error => {
      console.log(error);
    });
  return rltResult;
}