import React, { useState } from 'react';
import { Input } from 'orui-ui';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function () {
  //
  var v = useState('');
  var a = useState(''); //

  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsx(Input, {
      models: v,
      clearable: true,
      placeholder: 'Please input',
    }),
  });
});
