import { Common } from '@/helpers/Commons';
import {
  FileList_Response,
  FileList_Model,
  Upload_Response,
  Upload_Model,
  InsertFile_Response,
  InsertFile_Model
} from '@/DTO';
import { getFileList, uploadMedia, insertFile } from '@/services/FileManager';
import { isEqual, assign } from 'lodash';

export default {
  namespace: 'FileManager',

  state: {
    FileList_Response: new FileList_Response(),
    Upload_Response: new Upload_Response(),
    InsertFile_Response: new InsertFile_Response()
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
      if (rltResult.Success === 1) {
        yield put({
          type: 'insertFile',
          payload: assign(rltResult.Result[0], { "user_id": "612","parrent_path":"" }),
        });
      }
      yield put({
        type: 'uploadMedia_Finish',
        payload: rltResult,
      });
    },
    *insertFile({ payload }, { call, put }) {
      var rltResult = yield call(insertFile, payload);
      //if (rltResult.RetCode === RET_CODE.SUCCESS) {}
      yield put({
        type: 'insertFile_Finish',
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
    insertFile_Finish(state, { payload }) {
      return {
        ...state,
        InsertFile_Response: payload,
      };
    },
  },
};
