import { useRecoilValue } from "recoil";
import { cartTotalQuantitySelector } from "../store/selectors";
import { Badge, Box, IconButton, Tooltip } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const totalQuantity = useRecoilValue(cartTotalQuantitySelector);
  const navigate = useNavigate();
  return (
    <Box>
      <Tooltip title="My Cart">
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            navigate("/cart");
          }}
        >
          <Badge badgeContent={totalQuantity}>
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
