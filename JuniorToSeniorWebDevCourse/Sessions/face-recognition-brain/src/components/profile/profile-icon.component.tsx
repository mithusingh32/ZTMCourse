import {useContext, useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {User} from "../../interfaces/auth.interface";
import {AppStore} from "../../context/appStore";

const ProfileIcon = (props: {
  handleSignOut: (user: User | undefined) => void;
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const context= useContext(AppStore);

  return (
    <Dropdown isOpen={dropDownOpen} toggle={() => setDropDownOpen(s => !s)} direction={'down'}>
      <DropdownToggle tag="span" data-toggle="dropdown">
        <div className="tc pt4 pr4">
          <img src="https://static.thenounproject.com/png/2034286-200.png" className="br-100 pa1 ba b--black-10 h3 w3"
               alt="avatar"/>
        </div>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => {
          context.setIsProfileOpen(s => !s);
        }}>View Profile</DropdownItem>
        <DropdownItem onClick={() => props.handleSignOut(undefined)}>Sign Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>

  )
}

export default ProfileIcon;
