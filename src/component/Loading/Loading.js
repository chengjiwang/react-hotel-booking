import React from 'react';
import { Ellipsis } from 'react-spinners-css';
import './loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-bg" />
      <Ellipsis color="#000" />
    </div>
  );
};

export default Loading;