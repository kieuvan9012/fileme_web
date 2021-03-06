import React, { Component } from 'react';
import { Upload, Button, Icon, message, Row } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { isEqual } from 'lodash';
import {
  Upload_Response,
  Upload_Request,
  Upload_Model,
  InsertFile_Response,
  InsertFile_Request,
  InsertFile_Model
} from '@/DTO';
import { file } from '@babel/types';

const Dragger = Upload.Dragger;

@connect(({ FileManager }) => ({
  Upload_Response: FileManager.Upload_Response,
  InsertFile_Response: FileManager.InsertFile_Response
}))
class UploadMedia extends Component {
  static propTypes = {
    Upload_Response: PropTypes.object,
    InsertFile_Response: PropTypes.object.isRequired,
    ParentId: PropTypes.number,
    onUploaded: PropTypes.func.isRequired
  };
  static defaultProps = {
    Upload_Response: new Upload_Response(),
    InsertFile_Response: new InsertFile_Response(),
    onUploaded: () => { }
  };
  constructor(props) {
    super(props);

    this.__isMounted = false;
    this.isLoading = false;
    this.state = {
      file: null,
      fileList: [],
      uploading: false,
    };
  }
  shouldComponentUpdate = (nextProps) => {
    const { InsertFile_Response } = this.props;
    if (isEqual(InsertFile_Response.Result, nextProps.InsertFile_Response.Result)) {
      this.props.onUploaded instanceof Function && this.props.onUploaded(nextProps.InsertFile_Response.Success === 1);
      return false;
    }
    else {
      this.setState({
        uploading: false
      });
      return true;
    }
  };
  handleUpload = (info) => {
    const { fileList } = this.state;
    const { dispatch } = this.props;
    var formdata = new FormData();
    formdata.append("user_id", '612');
    formdata.append("brand", '1');
    formdata.append("media", info.file);
    dispatch({
      type: 'FileManager/uploadMedia',
      payload: {
        formdata: formdata,
        ParentId: this.props.ParentId
      },
    });
  };

  beforeUpload = (file) => {
    this.setState(state => ({
      fileList: [...state.fileList, file],
      uploading: true
    }));
  };
  render() {
    const { uploading, fileList } = this.state;
    const uploadConfig = {
      accept: '.doc, .docx, .docm, .dotx, .dotm, .docb, .xls, .xlsb, .xlsm, .xlsx, .sldx, .pptx, .pptm, .potx, .potm, .ppam, .ppsx, .ppsm, .png, .jpg, .jpeg, .txt, .pdf',
      multiple: true,
      fileList,
      beforeUpload: this.beforeUpload,
      customRequest: this.handleUpload
    }
    return (
      <Row>
        <Dragger {...uploadConfig}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Dragger>

        {/* <Upload {...uploadConfig}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload> */}
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </Row>
    );
  }
}
export default UploadMedia;
