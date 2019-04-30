import React, { Component } from 'react';
import Moment from 'moment';
import FileBrowser from 'react-keyed-file-browser';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { isEqual } from 'lodash';
import {
  FileList_Response
} from '@/DTO';
import Icons from './Icons';
import { Icon } from 'antd';
@connect(({ FileManager }) => ({
  FileList_Response: FileManager.FileList_Response,
}))
export default class FileManager extends Component {
  static propTypes = {
    FileList_Response: PropTypes.object.isRequired,
    onSelectFile: PropTypes.func,
    onSelectFolder: PropTypes.func,
    isInserted: PropTypes.bool.isRequired
  };
  static defaultProps = {
    FileList_Response: new FileList_Response(),
    isInserted: false
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
  componentDidUpdate = () => {
    this.getFileList();
  }
  shouldComponentUpdate = (nextProps, nextStates) => {
    const { FileList_Response } = this.props;
    return !isEqual(FileList_Response.Result, nextProps.FileList_Response.Result) || nextProps.isInserted === true;
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
    const { FileList_Response } = this.props;
    const { Result } = FileList_Response;
    const deleteFiles = Result.map(file => {
      return file.key.substr(0, folderKey.length) !== folderKey? file.context.id : null;
    });
    const { dispatch } = this.props;
    console.log(deleteFiles);
    // dispatch({
    //   type: 'FileManager/getFileList',
    //   payload: { user_id: '612' },
    // });
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
  onSelectFile = file => {
    return this.props.onSelectFile instanceof Function && this.props.onSelectFile(file);
  }
  onSelectFolder = item => {
    return this.props.onSelectFolder instanceof Function && this.props.onSelectFolder(item);
  }
  render() {
    const { FileList_Response } = this.props;
    const { Result } = FileList_Response;
    const fileList = Result.map(item => {
      return {
        key: Number(item.Size) > 0 ? item.FilePath.slice(0, -1) : item.FilePath,
        modified: new Date(item.Date),
        size: Number(item.Size) || 0,
        context: { ...item }
      };
    });
    return (
      <FileBrowser
        files={fileList}
        icons={Icons}
        onSelectFile={this.onSelectFile}
        onSelectFolder={this.onSelectFolder}

        onCreateFolder={this.handleCreateFolder}
        onCreateFiles={this.handleCreateFiles}
        onMoveFolder={this.handleRenameFolder}
        onMoveFile={this.handleRenameFile}
        onRenameFolder={this.handleRenameFolder}
        onRenameFile={this.handleRenameFile}
        onDeleteFolder={this.handleDeleteFolder}
        onDeleteFile={this.handleDeleteFile}
      />
    );
  }
}
