import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTranslation, SupportedLanguage } from 'Services/Geo';

const mapStateToProps = (state) => ({
  lang: state.setting.lang,
});

class Caption extends React.Component {
  render() {
    return (
      <div className="homeCaption">
        <div className="homeTitle">{getTranslation(this.props.lang, 'Now it\'s easy to find your future home')}</div>
        <div className="homeSubtitle">
          {getTranslation(this.props.lang, 'With Famireales - Real Estate HTML Template')}
        </div>
        <Link className="btn btn-black" to="/search">{getTranslation(this.props.lang, 'Learn More')}</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Caption);