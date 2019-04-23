import React, { Component } from 'react';
import FileManager from "./FileManager";
import UploadMedia from './Upload';
import { Commons } from '@/helpers/Commons';
export default class FileMe extends Component {
  constructor(props) {
    super(props);

    this.__isMounted = false;
    this.isLoading = false;
    this.state = {
      SelectedFile: null,
      SelectedFolder: null,
      isInserted: false
    };
  }
  componentDidMount = () => {
    this.__isMounted = true;
  };
  componentWillUnmount = () => {
    this.__isMounted = false;
  };
  onSelectFile = (file) => {
    this.setState({
      SelectedFile: file,
      SelectedFolder: null
    });
  }
  onSelectFolder = (folder) => {
    this.setState({
      SelectedFile: null,
      SelectedFolder: folder
    });
  }
  onUploaded = (isSuccess) => {
    this.setState({ isInserted: isSuccess })
  }
  render() {
    const { SelectedFile, SelectedFolder, isInserted } = this.state;

    return (
      <React.Fragment>
        <UploadMedia
          onUploaded={this.onUploaded}
          ParentId={Commons.isNullOrEmpty(SelectedFile) ?
            Commons.isNullOrEmpty(SelectedFolder) ? 0 : SelectedFolder.context.Id
            : SelectedFile.context.ParentId}
        />
        <FileManager
          isInserted={isInserted}
          onSelectFile={this.onSelectFile}
          onSelectFolder={this.onSelectFolder}
        />
      </React.Fragment>
    );
  }
}
