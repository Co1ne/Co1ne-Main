import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({mobile}) => (
    <Container text>
        <Header
            as='h1'
            content="Co1ne's Page"
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='纵白发苍苍，仍是少年游'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
    </Container>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({fixed: false});
    showFixedMenu = () => this.setState({fixed: true});

    render() {
        const {children} = this.props;
        const {fixed} = this.state;

        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 700, padding: '1em 0em'}}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Co1ne
                                </Menu.Item>
                                <Menu.Item as='a'>Android</Menu.Item>
                                <Menu.Item as='a'>Python</Menu.Item>
                                <Menu.Item as='a'>Guitar</Menu.Item>
                                <Menu.Item as='a'>About</Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading/>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

class MobileContainer extends Component {
    state = {};

    handlePusherClick = () => {
        const {sidebarOpened} = this.state;

        if (sidebarOpened) this.setState({sidebarOpened: false})
    };

    handleToggle = () => this.setState({sidebarOpened: !this.state.sidebarOpened});

    render() {
        const {children} = this.props;
        const {sidebarOpened} = this.state;

        return (
            <Responsive {...Responsive.onlyMobile}>
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

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{minHeight: '100vh'}}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{minHeight: 350, padding: '1em 0em'}}
                            vertical>
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
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

const ResponsiveContainer = ({children}) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{padding: '8em 0em'}} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Android Is Amazing!
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            曾经看过一篇文章：说手机圈里，一直有一个梗叫做“安卓不是Android”。
                            我是一个原生粉。喜欢Google的Material Design。喜欢Android自由的灵魂。
                            爱折腾。毕竟就那么点爱好嘛 (,,•́ . •̀,,)

                        </p>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Android 自修复
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            作为一个开发者，因各种bug困扰数年了已经。所以...想要做一个bug自修复的方案。
                            但目前实力不足呀。嗯，正在学习Android运行时、Hook原理和Tensorflow Lite。不知道有没有志同道合的朋友呢~
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='http://chuantu.biz/t6/338/1530635256x-1566688658.jpg'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>给点建议？</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{padding: '0em'}} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Python
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            人生苦短，我用Python。Scrapy爬虫系列正在研究中...
                        </p>
                    </Grid.Column>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Guitar Play
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            <Image avatar src='http://p1.music.126.net/L05a0VandKzg0cgHqJ_sPA==/109951163167768433.jpg?param=130y130'/>
                            大家可以<a href={'https://music.163.com/#/song?id=105682'} target={'_blank'}>听一下</a>JerryC的摇滚版卡农~很有感觉的！
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{padding: '8em 0em'}} vertical>
            <Container text>
                <Header as='h3' style={{fontSize: '2em'}}>
                    我的Guitar
                </Header>
                <p style={{fontSize: '1.33em'}}>
                    后续将更新一些弹唱之类的在这里，敬请期待哦~
                </p>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{margin: '3em 0em', textTransform: 'uppercase'}}
                >
                    <p>不华丽的分割线</p>
                </Divider>
                <Header as='h3' style={{fontSize: '2em'}}>
                    简单介绍一下Co1ne
                </Header>
                <p style={{fontSize: '1.33em'}}>
                    其实最开始是叫柯东的，因为高中那段时间迷数学，然后有看到一个数学家叫柯西 -- 也就是柯西不等式的那位。然后柯南已经有了..
                    <br/>
                    所以在柯东和柯北中选了柯东，后来想起个英文名，就选中了Coine。
                </p>
            </Container>
        </Segment>
        <Segment inverted vertical style={{padding: '5em 0em'}}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About'/>
                            <List link inverted>
                                <List.Item as='a' href='https://github.com/Coine'>Github</List.Item>
                                <List.Item as='a'>QQ</List.Item>
                                <List.Item as='a'>邮箱</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Links'/>
                            <List link inverted>
                                <List.Item as='a' href='gank.io' target='_blank'>Gank</List.Item>
                                <List.Item as='a' href='https://android-arsenal.com/' target='_blank'>Android Arsenal</List.Item>
                                <List.Item as='a' href='https://www.ctolib.com/' target='_blank'>CTOLib码库</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Power by
                            </Header>
                            <p>
                                <a href={'https://react.semantic-ui.com/layouts/homepage'} target={'_blank'}>Semantic UI
                                    React Sample Page</a>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
);
export default HomepageLayout
