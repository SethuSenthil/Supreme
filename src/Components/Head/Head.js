import React, { Component } from 'react';
import Clock from 'react-live-clock';

export default class LI extends React.Component {
    render() {
      return (
      <hgroup>
  <time>
  <span id="month">{new Date().getMonth() + 1}</span>/
  <span id="date">{new Date().getDate()}</span>/
  <span id="year">{new Date().getFullYear().toString()}</span>
  &nbsp;
  </time>
        <Clock
          format={'hh:mma'}
          ticking={true}
          timezone={'US/Eastern'} /> <span>NYC</span>
        </hgroup>
        );
    }
  }