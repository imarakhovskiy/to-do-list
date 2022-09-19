import { StyledCard, StyledList } from "./styled";

interface ListItem {
  id: string;
  name: string;
}

interface WishlistProps {}

export const FRIENDS = Array(15)
  .fill(null)
  .map((_, index) => ({
    id: `${index}`,
    name: `Andrew ${index}`,
  }));

export const Wishlist = ({}: WishlistProps) => {
  return (
    <StyledCard>
      <StyledList data={FRIENDS} isItemsDraggable>
        {(data) => <p className="heading-1">{(data as ListItem).name}</p>}
      </StyledList>
    </StyledCard>
  );
};
