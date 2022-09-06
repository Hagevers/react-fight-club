import React, {Component} from 'react';
import './styling/HomeToolBar.css';
import LoginPage from './LoginPage';
import ToolBarLogo from './styling/logoTransparent.png';

class HomeToolBar extends Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  render() {
    return (
      <div>
        <div>
          <ul>
            <li><a href='#'><span onClick={this.togglePop}>התחבר</span></a></li>
            <li><a href="#HOME">הוראות</a></li>
            <li><a href="#HOME">תמיכה</a></li>
            <li><a href="#HOME">פרסים</a></li>
            <li><a href="#HOME">FaceBook</a></li>
            <li><a href="#HOME">IG</a></li>
            <li className='left'><img src={ToolBarLogo} /></li>
          </ul>
        </div>
        <div>
           {this.seenReg ? <LoginPage toggle={this.togglePop}/> : null}
        </div>
      </div>
    );
  }
}
export default HomeToolBar;
