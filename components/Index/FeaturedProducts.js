import React from 'react';
import Carousel from 'semantic-ui-carousel-react';
import { Responsive, Container, Item, Label, Header, Card, Image } from 'semantic-ui-react'
import products from "../../static/products.json";

function FeaturedProducts() {

    let elements = [
        {
            render: () => {
                return (
                    //SCREEN SIZES | Mobile: 320px to 766px | Tablet: 767px to 991xpx | Computer: 992px +
                    <>
                        <Responsive as={Item.Group} {...Responsive.onlyComputer} href="/product?_id=5e5672fb17bc444ff96fd419">
                            <Item>
                                <Item.Image size="medium" id="computerStyle" src={products[19].mediaUrl} />
                                <Item.Content verticalAlign='middle'>
                                    <Header color="red"><h1>50% OFF HUGE SAVINGS!!!</h1></Header>
                                    <br></br>
                                    <br></br>
                                    <Item.Header>{products[19].name}</Item.Header>
                                    <Item.Description>
                                        <h3>Was<s> ${products[19].price}</s></h3>
                                        <h2>Now Only ${products[19].sale}</h2>
                                        <Label>SKU: {products[19].sku}</Label>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Responsive>

                        <Responsive as={Item.Group} {...Responsive.onlyTablet} href="/product?_id=5e5672fb17bc444ff96fd419">
                            <Item>
                                <Item.Image size="medium" id="tabletStyle" src={products[19].mediaUrl} />
                                <Item.Content verticalAlign='middle'>
                                    <Header color="red"><h2>50% OFF HUGE SAVINGS!!!</h2></Header>
                                    <br></br>
                                    <br></br>
                                    <Item.Header>{products[19].name}</Item.Header>
                                    <Item.Description>
                                        <h4>Was<s> ${products[19].price}</s></h4>
                                        <h3>Now Only ${products[19].sale}</h3>
                                        <Label>SKU: {products[19].sku}</Label>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Responsive>

                        <Responsive fluid id="mobileStyle" as={Card} {...Responsive.onlyMobile} href="/product?_id=5e5672fb17bc444ff96fd419">
                            <Image src={products[19].mediaUrl} />
                            <Card.Content verticalAlign='middle'>
                                <Header color="red">50% OFF HUGE SAVINGS!!!</Header>
                                <Card.Header>{products[19].name}</Card.Header>
                                <Card.Description>
                                    <p>Was<s> ${products[19].price}</s></p>
                                    <p>Now Only ${products[19].sale}</p>
                                    <Label>SKU: {products[19].sku}</Label>
                                </Card.Description>
                            </Card.Content>

                        </Responsive>
                    </>
                )
            }
        },
        {
            render: () => {
                return (
                    //SCREEN SIZES | Mobile: 320px to 766px | Tablet: 767px to 991xpx | Computer: 992px +
                    <>
                        <Responsive as={Item.Group} {...Responsive.onlyComputer} href="/product?_id=5e5672fb17bc444ff96fd418">
                            <Item>
                                <Item.Image size="medium" id="computerStyle" src={products[18].mediaUrl} />
                                <Item.Content verticalAlign='middle'>
                                    <Header color="red"><h1>50% OFF HUGE SAVINGS!!!</h1></Header>
                                    <br></br>
                                    <br></br>
                                    <Item.Header>{products[18].name}</Item.Header>
                                    <Item.Description>
                                        <h3>Was<s> ${products[18].price}</s></h3>
                                        <h2>Now Only ${products[18].sale}</h2>
                                        <Label>SKU: {products[18].sku}</Label>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Responsive>

                        <Responsive as={Item.Group} {...Responsive.onlyTablet} href="/product?_id=5e5672fb17bc444ff96fd418">
                            <Item>
                                <Item.Image size="medium" id="tabletStyle" src={products[18].mediaUrl} />
                                <Item.Content verticalAlign='middle'>
                                    <Header color="red"><h2>50% OFF HUGE SAVINGS!!!</h2></Header>
                                    <br></br>
                                    <br></br>
                                    <Item.Header>{products[18].name}</Item.Header>
                                    <Item.Description>
                                        <h4>Was<s> ${products[18].price}</s></h4>
                                        <h3>Now Only ${products[18].sale}</h3>
                                        <Label>SKU: {products[18].sku}</Label>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Responsive>

                        <Responsive fluid id="mobileStyle" as={Card} {...Responsive.onlyMobile} href="/product?_id=5e5672fb17bc444ff96fd418">
                            <Image src={products[18].mediaUrl} />
                            <Card.Content verticalAlign='middle'>
                                <Header color="red">50% OFF HUGE SAVINGS!!!</Header>
                                <Card.Header>{products[18].name}</Card.Header>
                                <Card.Description>
                                    <p>Was<s> ${products[18].price}</s></p>
                                    <p>Now Only ${products[18].sale}</p>
                                    <Label>SKU: {products[18].sku}</Label>
                                </Card.Description>
                            </Card.Content>

                        </Responsive>
                    </>
                )
            }
        },
        {
            render: () => {
                return (
                    //SCREEN SIZES | Mobile: 320px to 766px | Tablet: 767px to 991xpx | Computer: 992px +
                    <>
                        <Responsive as={Item.Group} {...Responsive.onlyComputer} href="/product?_id=5e5672fb17bc444ff96fd416">
                            <Item>
                                <Item.Image size="medium" id="computerStyle" src={products[17].mediaUrl} />
                                <Item.Content verticalAlign='middle'>
                                    <Header color="red"><h1>50% OFF HUGE SAVINGS!!!</h1></Header>
                                    <br></br>
                                    <br></br>
                                    <Item.Header>{products[17].name}</Item.Header>
                                    <Item.Description>
                                        <h3>Was<s> ${products[17].price}</s></h3>
                                        <h2>Now Only ${products[17].sale}</h2>
                                        <Label>SKU: {products[17].sku}</Label>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Responsive>

                        <Responsive as={Item.Group} {...Responsive.onlyTablet} href="/product?_id=5e5672fb17bc444ff96fd416">
                            <Item>
                                <Item.Image size="medium" id="tabletStyle" src={products[17].mediaUrl} />
                                <Item.Content verticalAlign='middle'>
                                    <Header color="red"><h2>50% OFF HUGE SAVINGS!!!</h2></Header>
                                    <br></br>
                                    <br></br>
                                    <Item.Header>{products[17].name}</Item.Header>
                                    <Item.Description>
                                        <h4>Was<s> ${products[17].price}</s></h4>
                                        <h3>Now Only ${products[17].sale}</h3>
                                        <Label>SKU: {products[17].sku}</Label>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Responsive>

                        <Responsive fluid id="mobileStyle" as={Card} {...Responsive.onlyMobile} href="/product?_id=5e5672fb17bc444ff96fd416">
                            <Image src={products[17].mediaUrl} />
                            <Card.Content verticalAlign='middle'>
                                <Header color="red">50% OFF HUGE SAVINGS!!!</Header>
                                <Card.Header>{products[17].name}</Card.Header>
                                <Card.Description>
                                    <p>Was<s> ${products[17].price}</s></p>
                                    <p>Now Only ${products[17].sale}</p>
                                    <Label>SKU: {products[17].sku}</Label>
                                </Card.Description>
                            </Card.Content>

                        </Responsive>
                    </>
                )
            }
        },
    ]
    return (

        <Container text textAlign='center'>
            <Carousel
                elements={elements}
                duration={6000}
                animation='tada'
                showNextPrev={false}
                showIndicators={false}
            />
        </Container>

    )

}

export default FeaturedProducts;