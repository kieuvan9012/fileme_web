import React, { Component } from 'react';
import { Upload, Button, Icon, message, Row } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import {
  Upload_Response,
  Upload_Request,
  Upload_Model
} from '@/DTO';

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
      fileList: [],
      uploading: false,
    };
    this.uploadConfig = {
      accept: '.doc, .docx, .docm, .dotx, .dotm, .docb, .xls, .xlsb, .xlsm, .xlsx, .sldx, .pptx, .pptm, .potx, .potm, .ppam, .ppsx, .ppsm, .png, .jpg, .jpeg, .txt, .pdf',
      multiple: true,
      action: "http://dephoanmy.vn:9886/upload/media",
      // onStart: (e) => console.log(e),
      // onChange: this.onChange,
      // beforeUpload: (e) => { console.log(e) },
      // customRequest: (e) => { console.log(e) },
      data: {
        user_id: '1',
        branch: '1'
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        "Accept": 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Origin,Content-Type"
      }
    }
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const request = new Upload_Request();
    let reader = new FileReader();
    reader.re(fileList[0]);
    reader.onload = e => {
      request = Object.assign(request, {
        media: e.target.result,
        user_id: '1',
        branch: '1'
      });
      this.setState({
        uploading: true,
      });

      const { dispatch } = _this.props;
      dispatch({
        type: 'FileManager/uploadMedia',
        payload: request,
      });
    };
  };
  onRemove = (file) => {
    this.setState((state) => {
      const index = state.fileList.indexOf(file);
      const newFileList = state.fileList.slice();
      newFileList.splice(index, 1);
      return {
        fileList: newFileList,
      };
    });
  };

  beforeUpload = (file) => {
    this.setState(state => ({
      fileList: [...state.fileList, file],
    }));
    return false;
  };
  onChange = (info) => {
    const status = info.file.status;
    const { fileList } = this.state;
    const request = new Upload_Request();
    let reader = new FileReader();
    console.log(info);
    // reader.readAsDataURL(info.file);
    // reader.onload = e => {
    //   request = Object.assign(request, {
    //     media: e.target.result,
    //     user_id: '1',
    //     branch: '1'
    //   });
    //   this.setState({
    //     uploading: true,
    //   });

    //   const { dispatch } = _this.props;
    //   dispatch({
    //     type: 'FileManager/uploadMedia',
    //     payload: request,
    //   });
    //};
    // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    // if (status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  }
  render() {
    const { uploading, fileList } = this.state;
    return (
      <Row>
        {/* <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Dragger> */}

        <Upload {...this.uploadConfig}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
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
