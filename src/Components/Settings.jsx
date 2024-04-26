import { Component } from "react";
import CustomNavbar from "../Components/MyNavbar";
import MySettingsMain from "../Components/MySettingsMain";

class Settings extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white", height: "100%" }}>
        <CustomNavbar bg />
        <MySettingsMain />
      </div>
    );
  }
}

export default Settings;
