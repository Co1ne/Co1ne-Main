import React, {Component} from "react";

import HomepageHeading from "./HomepageHeading";
import {Container, Menu, Responsive, Segment, Visibility} from "semantic-ui-react";
import PropTypes from 'prop-types'

class DesktopContainer extends Component {

    state = {activeMenuItem: 'home_menu_item'};

    handleMenuClick = (e, {name}) => {
        this.setState({activeMenuItem: name});
        this.state.contentPage = name
    };

    hideFixedMenu = () => this.setState({fixed: false});
    showFixedMenu = () => this.setState({fixed: true});

    render() {
        const {children} = this.props;
        const {fixed} = this.state;
        const {activeMenuItem} = this.state;

        return (<Responsive {...Responsive.onlyComputer}>
            <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                <Segment inverted textAlign='center' style={{
                    minHeight: 700,
                    padding: '1em 0em'
                }} vertical>
                    <Menu fixed={fixed
                        ? 'top'
                        : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size='large'>
                        <Container>
                            <Menu.Item as='a' active={activeMenuItem === 'home_menu_item'} name='home_menu_item'
                                       onClick={this.handleMenuClick}>
                                Co1ne
                            </Menu.Item>
                            <Menu.Item as='a' active={activeMenuItem === 'android_menu_item'} name='android_menu_item'
                                       onClick={this.handleMenuClick}>Android</Menu.Item>
                            <Menu.Item as='a' active={activeMenuItem === 'python_menu_item'} name='python_menu_item'
                                       onClick={this.handleMenuClick}>Python</Menu.Item>
                            <Menu.Item as='a' active={activeMenuItem === 'guitar_menu_item'} name='guitar_menu_item'
                                       onClick={this.handleMenuClick}>Guitar</Menu.Item>
                            <Menu.Item as='a' active={activeMenuItem === 'about_menu_item'} name='about_menu_item'
                                       onClick={this.handleMenuClick}>About</Menu.Item>
                        </Container>
                    </Menu>
                    <HomepageHeading/>
                </Segment>
            </Visibility>

            {children}
        </Responsive>)
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node
};
export default DesktopContainer;