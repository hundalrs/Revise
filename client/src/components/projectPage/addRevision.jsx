import React, { Component } from 'react';
import SkyLight from 'react-skylight';

import '../../styles/addRevision.css';

import apiClient from '../../utils/api.js';

class AddRev extends Component {

  constructor(props) {
    super(props);

    this.state = {
      revisionForm: {
        title: "",
        body: ""
      }
    }
  }


  render() {
    return (
      <div className="addRev">
        <button id="addRevBtn" onClick={() => this.simpleDialog.show()}>Add revision</button>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Make a Revision">
          <form className="revForm">
            <input id="createRevTitle"name="title" type="text" placeholder="Revision Title"/>
            <textarea id="createRevText" name="text"></textarea>
            <button id="createRevBtn" type="submit">Make Revision</button>
          </form>
        </SkyLight>
      </div>
    );
  }
}

export default AddRev;
