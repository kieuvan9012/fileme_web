import React, { Component } from 'react';
import Moment from 'moment';
import FileBrowser from 'react-keyed-file-browser';
import PropTypes from 'prop-types';
import UploadMedia from './Upload';
import { connect } from 'dva';
import { isEqual } from 'lodash';
import {
  FileList_Response,
  FileList_Model
} from '@/DTO';
import Icons from './Icons';
import { Icon } from 'antd';
@connect(({ FileManager }) => ({
  FileList_Response: FileManager.FileList_Response,
}))
export default class FileManager extends Component {
  static propTypes = {
    FileList_Response: PropTypes.object.isRequired,
  };
  static defaultProps = {
    FileList_Response: new FileList_Response(),
  };
  constructor(props) {
    super(props);

    this.__isMounted = false;
    this.isLoading = false;
    this.state = {
      files: [],
    };
  }
  componentDidMount = () => {
    this.__isMounted = true;
    this.getFileList();
  };
  componentWillUnmount = () => {
    this.__isMounted = false;
  };
  shouldComponentUpdate = (nextProps, nextStates) => {
    const { FileList_Response } = this.props;
    return !isEqual(FileList_Response.Result, nextProps.FileList_Response.Result);
  };
  getFileList = () => {
    var _this = this;

    const { dispatch } = _this.props;
    dispatch({
      type: 'FileManager/getFileList',
      payload: { user_id: '612' },
    });
  };
  handleCreateFolder = key => {
    const { files } = this.state;
    this.setState({
      files: files.concat([{ key }]),
    });
  };

  handleCreateFiles = (nfiles, prefix) => {
    const { files } = this.state;
    const newFiles = nfiles.map(file => {
      let newKey = prefix;
      if (prefix !== '' && prefix.substring(prefix.length - 1, prefix.length) !== '/') {
        newKey += '/';
      }
      newKey += file.name;
      return {
        key: newKey,
        size: file.size,
        modified: +Moment(),
      };
    });
    let uniqueNewFiles = [];
    uniqueNewFiles = newFiles.map(newFile => {
      const exists = files.some(existingFile => {
        return existingFile.key === newFile.key;
      });
      if (!exists) return newFile;
      return null;
    });
    this.setState({
      files: files.concat(uniqueNewFiles.filter(n => n)),
    });
  };

  handleRenameFolder = (oldKey, newKey) => {
    const { files } = this.state;
    const newFiles = [];
    files.map(file => {
      if (file.key.substr(0, oldKey.length) === oldKey) {
        newFiles.push({
          ...file,
          key: file.key.replace(oldKey, newKey),
          modified: +Moment(),
        });
      } else {
        newFiles.push(file);
      }
      return null;
    });
    this.setState({
      files: newFiles.filter(n => n),
    });
  };

  handleRenameFile = (oldKey, newKey) => {
    const { files } = this.state;
    const newFiles = [];
    files.map(file => {
      if (file.key === oldKey) {
        newFiles.push({
          ...file,
          key: newKey,
          modified: +Moment(),
        });
      } else {
        newFiles.push(file);
      }
      return null;
    });
    this.setState({
      files: newFiles,
    });
  };

  handleDeleteFolder = folderKey => {
    const { files } = this.state;
    const newFiles = files.map(file => {
      return file.key.substr(0, folderKey.length) !== folderKey;
    });
    this.setState({
      files: newFiles,
    });
  };

  handleDeleteFile = fileKey => {
    const { files } = this.state;
    const newFiles = files.filter(file => {
      return file.key !== fileKey;
    });
    this.setState({
      files: newFiles,
    });
  };

  render() {
    const { FileList_Response } = this.props;
    const { Result } = FileList_Response;
    // FileList_Response.Result.forEach(item => {
    //   FileList_Response.Result.forEach(sub => {
    //     if (sub.parent_id === item.id) {
    //       console.log(item.originalName)
    //     }
    //   })
    // });
    const fileList = Result.map(item => {
      // Result.forEach(sub => {
      //   if (item.parent_id === sub.id) {
      //     item.FilePath += (sub.OriginalName + "/");
      //   }
      // })
      return {
        key: item.FilePath,
        modified: new Date(item.Date),
        size: Number(item.Size) || 0,
      };
    });
    console.log(FileList_Response.Result);
    return (
      <React.Fragment>
        <UploadMedia />
        <FileBrowser
          files={fileList}
          icons={Icons}
          onCreateFolder={this.handleCreateFolder}
          onCreateFiles={this.handleCreateFiles}
          onMoveFolder={this.handleRenameFolder}
          onMoveFile={this.handleRenameFile}
          onRenameFolder={this.handleRenameFolder}
          onRenameFile={this.handleRenameFile}
          onDeleteFolder={this.handleDeleteFolder}
          onDeleteFile={this.handleDeleteFile}
        />
      </React.Fragment>
    );
  }
}
