import { Item, Label, Button, Icon } from "semantic-ui-react";
import AddProductToCart from "./AddProductToCart";
import Link from "next/link";

function ProductSummary({ name, mediaUrl, _id, price, sku, user }) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size="medium" src={mediaUrl} />
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>
            <p>${price}</p>
            <Label>SKU: {sku}</Label>
          </Item.Description>
          <Item.Extra>
            <AddProductToCart user={user} productId={_id} />
          </Item.Extra>
        </Item.Content>
      </Item>
      <Button color="orange" size="small">Back to items
        <Link href="/">
          <Icon name="arrow left" size="large" />
        </Link>
      </Button>
    </Item.Group>
  )
}
export default ProductSummary;
