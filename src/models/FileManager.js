import { Common } from '@/helpers/Commons';
import {
  FileList_Response,
  FileList_Model,
  Upload_Response,
  Upload_Model
} from '@/DTO';
import { getFileList, uploadMedia } from '@/services/FileManager';
import { isEqual } from 'lodash';

export default {
  namespace: 'FileManager',

  state: {
    FileList_Response: new FileList_Response(),
    Upload_Response: new Upload_Response(),
  },

  effects: {
    *getFileList({ payload }, { call, put }) {
      var rltResult = yield call(getFileList, payload);
      //if (rltResult.RetCode === RET_CODE.SUCCESS) {}
      yield put({
        type: 'getFileList_Finish',
        payload: rltResult
      });
    },
    *uploadMedia({ payload }, { call, put }) {
      var rltResult = yield call(uploadMedia, payload);
      //if (rltResult.RetCode === RET_CODE.SUCCESS) {}
      yield put({
        type: 'uploadMedia_Finish',
        payload: rltResult,
      });
    },
  },

  reducers: {
    getFileList_Finish(state, { payload }) {
      return {
        ...state,
        FileList_Response: payload,
      };
    },
    uploadMedia_Finish(state, { payload }) {
      return {
        ...state,
        Upload_Response: payload,
      };
    },
  },
};
