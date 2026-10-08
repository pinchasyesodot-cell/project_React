import type React from "react";
import { useEffect, useState } from "react";
import type { ProductCardProps } from "../interfaces/ProductCard";
import type { EditProductType } from "../interfaces/EditProductType";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export const EditProductDialog = ({
  product,
  open,
  onEdit,
  onClose,
}: EditProductType): React.JSX.Element => {
  const [editProduct, setEditProduct] = useState<ProductCardProps | null>(
    product,
  );

  useEffect(() => {
    if (product) {
      setEditProduct(product);
    }
  }, [product]);

  if (!product) return <></>;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Edit Product
        <IconButton
          onClick={onClose}
          color="error"
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!editProduct) return;
            const finalProduct = {
              ...editProduct,
              price: Number(editProduct.price),
              rating: Number(editProduct.rating),
            };
            onEdit(finalProduct);
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField
              label="Title"
              value={editProduct?.title}
              onChange={(e) =>
                setEditProduct((prev) =>
                  prev ? { ...prev, title: e.target.value } : null,
                )
              }
            />
            <TextField
              label="Category"
              value={editProduct?.category}
              onChange={(e) =>
                setEditProduct((prev) =>
                  prev ? { ...prev, category: e.target.value } : null,
                )
              }
            />
            <TextField
              label="Description"
              value={editProduct?.description}
              onChange={(e) =>
                setEditProduct((prev) =>
                  prev ? { ...prev, description: e.target.value } : null,
                )
              }
            />
            <TextField
              label="Price"
              type="number"
              value={editProduct?.price}
              onChange={(e) =>
                setEditProduct((prev) =>
                  prev ? { ...prev, price: e.target.value } : null,
                )
              }
            />
            <TextField
              label="Rating"
              type="number"
              value={editProduct?.rating}
              onChange={(e) =>
                setEditProduct((prev) =>
                  prev ? { ...prev, rating: e.target.value } : null,
                )
              }
            />
            <TextField
              label="Image"
              value={editProduct?.images[0]}
              onChange={(e) =>
                setEditProduct((prev) =>
                  prev ? { ...prev, images: [e.target.value] } : null,
                )
              }
            />
            <Button type="submit">Save Product</Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};
