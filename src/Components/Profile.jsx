import { Component } from "react";
import NavbarProfile from "./MyNavbarProfile";
import EditProfile from "./MainProfile";

class Profile extends Component {
  render() {
    return (
      <div>
        <NavbarProfile />
        <EditProfile />
      </div>
    );
  }
}

export default Profile;
