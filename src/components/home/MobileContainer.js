import {Component} from "react";
import {Container, Icon, Menu, Responsive, Segment, Sidebar} from "semantic-ui-react";
import PropTypes from 'prop-types'
import HomepageHeading from "./HomepageHeading";
import React from "react";

class MobileContainer extends Component {
    state = {};

    handlePusherClick = () => {
        const {sidebarOpened} = this.state;

        if (sidebarOpened)
            this.setState({sidebarOpened: false})
    };

    handleToggle = () => this.setState({
        sidebarOpened: !this.state.sidebarOpened
    });

    render() {
        const {children} = this.props;
        const {sidebarOpened} = this.state;

        return (<Responsive {...Responsive.onlyMobile}>
            <Sidebar.Pushable>
                <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
                    <Menu.Item as='a' active>
                        Co1ne
                    </Menu.Item>
                    <Menu.Item as='a'>Android</Menu.Item>
                    <Menu.Item as='a'>Guitar</Menu.Item>
                    <Menu.Item as='a'>Python</Menu.Item>
                    <Menu.Item as='a'>About</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{
                    minHeight: '100vh'
                }}>
                    <Segment inverted textAlign='center' style={{
                        minHeight: 350,
                        padding: '1em 0em'
                    }} vertical>
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar'/>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile/>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Responsive>)
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node
};

export default MobileContainer;