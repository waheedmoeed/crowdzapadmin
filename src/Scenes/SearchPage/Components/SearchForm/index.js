import * as React from 'react';
import SelectComponent from 'Components/SelectComponent';
import SingleHouse from 'Components/SingleHouse';
import SearchMap from '../SearchMap';
import './style.css'
import { Icon } from 'react-fa';
import Loader from 'react-loader-spinner'
import {connect} from "react-redux";
import {getListedProps} from "Services/ListProperty";
import PlaceHolder from "Components/Common/PlaceHolder";


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultTab: 'list'
    };
  }

  componentDidMount() {
    //if there is no data and tried is false
    if(!this.props.tried && !this.props.listedProps){
      this.props.getListedProps()
    }
  }

  changeResultTab = (tab) => {
    if (tab !== this.state.resultTab) {
      this.setState({
        resultTab: tab
      });
    }
  }
  resultList = () => {
    return (
      <div className="resultsList">
        <div className="row">
          {this.props.listedProps.map((data, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index}>
                <SingleHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  resultMap = () => {
    return (
      <div className="resultsMap">
        <SearchMap />
      </div>
    );
  }
  render() {
    let resultBody=null
    if(this.props.listedProps){
      resultBody = this.state.resultTab === 'list' ? this.resultList() : this.resultMap()
    }
    //if listedProps null and also not in loading state
    if(!this.props.listedProps && !this.props.loading){
      resultBody = <PlaceHolder type="listedProperties"/>
    }
    return (
      <div className="searchForm">
        <div className="filterBox">
          <div className="row form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 yearOfBirth">
              <h4>Prototype Type</h4>
              <div className="selectItem">
                <SelectComponent listItem={['All', 'Rent', 'Sale']} />
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label>Bedrooms</label>
                <div className="volume">
                  <a href="#" className="btn btn-gray btn-round-left">
                    <Icon name="angle-left" />
                  </a>
                  <input type="text" className="form-control" readOnly={true} value="1" />
                  <a href="#" className="btn btn-gray btn-round-right">
                    <Icon name="angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label>Bathrooms</label>
                <div className="volume">
                  <a href="#" className="btn btn-gray btn-round-left"><Icon name="angle-left" /></a>
                  <input type="text" className="form-control" readOnly={true} value="1" />
                  <a href="#" className="btn btn-gray btn-round-right"><Icon name="angle-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resultTable">
          <div className="resultTab">
            <ul>
              <li 
                className={this.state.resultTab === 'list' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('list')}
              >
                <a><Icon name="th-list" /> Listing view</a>
              </li>
              <li
                className={this.state.resultTab === 'map' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('map')}
              >
                <a><Icon name="map-o" /> Map view</a>
              </li>
            </ul>
          </div>
          <div className="resultBody">
            <Loader
                type="Grid" color="#00A9A4" height={80} width={80} visible={this.props.loading}
            />
            {resultBody}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.listedProps.loading,
  listedProps: state.listedProps.listedProperties,
  tried: state.listedProps.tried,
  filterBy: state.listedProps.filterBy
});
export default connect(
    mapStateToProps,
    { getListedProps}
)(SearchForm);