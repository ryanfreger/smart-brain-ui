import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownOpen: false
        }
    }
    toggle = () => {
        this.setState(prevState => ({
            dropDownOpen: !prevState.dropDownOpen
        }));
    }

    render() {
        return (
            <div>
                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropDownOpen}
                    >
                            <img
                                src="http://tachyons.io/img/logo.jpg"
                                className="br-100 h3 w3 dib" alt="avatar" />
                    </DropdownToggle>
                    <DropdownMenu right className='b--transparent shadow-5 mt3'>
                        <DropdownItem onClick={this.props.toggleModal}>Profile</DropdownItem>
                        <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default ProfileIcon;