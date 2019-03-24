import React, { Component } from 'react';
import Moment from 'moment';
import FileBrowser, { Icons } from 'react-keyed-file-browser';
import Avatar from './Upload';

export default class FileManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [
        {
          key: 'photos/animals/cat in a hat.png',
          modified: +Moment().subtract(1, 'hours'),
          size: 1.5 * 1024 * 1024,
        },
        {
          key: 'photos/animals/kitten_ball.png',
          modified: +Moment().subtract(3, 'days'),
          size: 545 * 1024,
        },
        {
          key: 'photos/animals/elephants.png',
          modified: +Moment().subtract(3, 'days'),
          size: 52 * 1024,
        },
        {
          key: 'photos/funny fall.gif',
          modified: +Moment().subtract(2, 'months'),
          size: 13.2 * 1024 * 1024,
        },
        {
          key: 'photos/holiday.jpg',
          modified: +Moment().subtract(25, 'days'),
          size: 85 * 1024,
        },
        {
          key: 'documents/letter chunks.doc',
          modified: +Moment().subtract(15, 'days'),
          size: 480 * 1024,
        },
        {
          key: 'documents/export.pdf',
          modified: +Moment().subtract(15, 'days'),
          size: 4.2 * 1024 * 1024,
        },
      ],
    };
  }

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
    const { files } = this.state;
    return (
      <React.Fragment>
        <Avatar />
        <FileBrowser
          files={files}
          icons={Icons.FontAwesome(4)}
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
