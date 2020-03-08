import {
    Container,
    Divider,
    Grid,
    Image,
    List,
    Segment,
    Header,
    Button
} from 'semantic-ui-react';

function Footer() {

    return (
        <div>
            <Segment id="footer" inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                <Container textAlign='center'>
                    <Grid divided inverted stackable>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='SHOP' />
                            <List link inverted>
                                <List.Item as='a' href="/">Beds</List.Item>
                                <List.Item as='a' href="/?page=2">Tables</List.Item>
                                <List.Item as='a' href="/">Lounges</List.Item>
                                <List.Item as='a' href="/?page=2">Lamps</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='CUSTOMER SERVICE' />
                            <List link inverted>
                                <List.Item as='a'>Delivery</List.Item>
                                <List.Item as='a'>Raincheck Policy</List.Item>
                                <List.Item as='a'>FAQs</List.Item>
                                <List.Item as='a'>Refund, Return &amp; Repairs</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='CONNECT' />
                            <List link inverted>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Rate &amp; Review a Product</List.Item>
                                <List horizontal inverted divided link size='small'>

                                    <Button circular color='facebook' icon='facebook' />
                                    <Button circular color='twitter' icon='twitter' />
                                    <Button circular color="red" icon='pinterest p' />
                                    <Button circular color='google plus' icon='google plus' />

                                </List>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header inverted as='h4' content='ABOUT' />
                            <p>
                                Since joining the online retail industry in 2019, MyCART has shown that its “Shop with Confidence” promise can be delivered to customers across all digital channels. MyCART is commited to quality, value and service.
                            </p>
                        </Grid.Column>
                    </Grid>

                    <Divider inverted section />

                    <Image centered size='mini' src="/static/logo.png" />
                    <strong>My</strong><sub><i>CART</i></sub>
                    <br></br>
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
          </List.Item>
                        <List.Item as='a' href='#'>
                            Terms &amp; Conditions
          </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
          </List.Item>
                    </List>
                </Container>
            </Segment>
        </div >
    )
}
export default Footer;