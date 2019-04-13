import React, { Component } from 'react';
import { Upload, Button, Icon, message, Row } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { isEqual } from 'lodash';
import {
  Upload_Response,
  Upload_Request,
  Upload_Model
} from '@/DTO';
import { file } from '@babel/types';

const Dragger = Upload.Dragger;

@connect(({ FileManager }) => ({
  Upload_Response: FileManager.Upload_Response,
}))
class UploadMedia extends Component {
  static propTypes = {
    Upload_Response: PropTypes.object.isRequired,
  };
  static defaultProps = {
    Upload_Response: new Upload_Response(),
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
  // shouldComponentUpdate = (nextProps) => {
  //   const { Upload_Response } = this.props;
  //   if (isEqual(Upload_Response.Result, nextProps.Upload_Response.Result))
  //     return false;
  //   else {
  //     this.setState({
  //       uploading: false
  //     })
  //     return true;
  //   }
  // };
  handleUpload = (info) => {
    const { fileList } = this.state;
    var formdata = new FormData();
    formdata.append("user_id", '1');
    formdata.append("brand", '1');
    formdata.append("media", info.file);
    //const request = Object.assign(new Upload_Request(), formdata);
    const { dispatch } = this.props;
    dispatch({
      type: 'FileManager/uploadMedia',
      payload: formdata,
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
