import { Common } from '@/helpers/Commons';
import {
  FileList_Response,
  FileList_Model,
  Upload_Response,
  Upload_Model
} from '@/DTO';
import axios from 'axios';

export async function getFileList(Request) {
  console.log('BEGIN invoke api FileList');
  var _this = this;
  var rltResult = new FileList_Response();

  await axios.post('http://dephoanmy.vn:9886/file/list', Request)
    .then(response => {
      const { data } = response;
      rltResult.mapNodeExpectResult(data);
      //if (rltResult.checkResponse()) {}
      rltResult.tranform2Model(data.data);

      return rltResult;
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
  await axios.post('http://dephoanmy.vn:9886/upload/media', Request, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json'
    }
  })
    .then(response => {
      const { data } = response;
      rltResult.mapNodeExpectResult(data);
      //if (rltResult.checkResponse()) {}
      rltResult.tranform2Model(data.data);

      return rltResult;
    })
    .catch(error => {
      console.log(error);
    });
  return rltResult;
}