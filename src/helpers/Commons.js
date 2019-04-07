import React from 'react';
import _ from 'lodash';
import { getLocale } from 'umi/locale';

export const Commons = {
  stringFormat(str, params) {
    if (this.isNullOrEmpty(str)) {
      return '';
    }

    let rltResult = `${str}`;

    if (`${typeof params}` !== 'object') {
      rltResult = rltResult.replace('{0}', params);
    } else {
      params.forEach((value, i) => {
        rltResult = rltResult.replace(`{${i}}`, value || '');
      });
    }

    return rltResult;
  },
  isNullOrEmpty(obj) {
    return obj !== null && typeof obj === 'object' ? !_.some(obj) : _.isEmpty(_.trim(obj));
  },
};
