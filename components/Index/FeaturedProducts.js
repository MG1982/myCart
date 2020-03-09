import React from 'react';
import Carousel from 'semantic-ui-carousel-react';
import { Container, Item, Label, Header } from 'semantic-ui-react'
import products from "../../static/products.json";

function FeaturedProducts() {


    let elements = [
        {
            render: () => {
                return (
                    <Item.Group>
                        <Item href="/product?_id=5e5672fb17bc444ff96fd419">
                            <Item.Image size="medium" src={products[19].mediaUrl} />
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
                    </Item.Group>
                )
            }
        },
        {
            render: () => {
                return (
                    <Item.Group href="/product?_id=5e5672fb17bc444ff96fd418">
                        <Item>
                            <Item.Image size="medium" src={products[18].mediaUrl} />
                            <Item.Content verticalAlign='middle'>
                                <Header color="red"><h1>30% OFF SALE PRICE!!!</h1></Header>
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
                    </Item.Group>
                )
            }
        },
        {
            render: () => {
                return (
                    <Item.Group href="/product?_id=5e5672fb17bc444ff96fd416">
                        <Item>
                            <Item.Image size="medium" src={products[17].mediaUrl} />
                            <Item.Content verticalAlign='middle'>
                                <Header color="red"><h1>40% OFF CRAZY PRICE!!!</h1></Header>
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
                    </Item.Group>
                )
            }
        },
    ]
    return (
        <Container text textAlign='center'>
            <Carousel
                style={{ background: "red" }}
                elements={elements}
                duration={6000}
                animation=''
                showNextPrev={false}
                showIndicators={false}
            />
        </Container>
    )

}

export default FeaturedProducts;