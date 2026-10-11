import { useEffect, useState } from "react";
import type { AddProductType } from "../interfaces/AddProductType";
import type { ProductCardProps } from "../interfaces/ProductCard";
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

export const AddProductDialog = ({ open, onAdd, onClose }: AddProductType) => {
  const [newProduct, setNewProduct] = useState<ProductCardProps>({
    id: 0,
    title: "",
    price: 0,
    rating: 0,
    category: "",
    description: "",
    images: [""],
    total: 1,
  });

  useEffect(() => {
    if (open) {
      setNewProduct({
        id: 0,
        title: "",
        price: 0,
        rating: 0,
        category: "",
        description: "",
        images: [""],
        total: 1,
      });
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Add New Product
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
            const finalProduct = {
              ...newProduct,
              id: Date.now(),
              price: Number(newProduct.price),
              rating: Number(newProduct.rating),
            };
            e.preventDefault();
            onAdd(finalProduct);
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Titel"
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
              required
            />
            <TextField
              label="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              required
            />
            <TextField
              label="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              required
            />
            <TextField
              label="Price"
              type="number"
              value={newProduct.price === 0 ? "" : newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              required
            />
            <TextField
              label="Reting"
              type="number"
              value={newProduct.rating === 0 ? "" : newProduct.rating}
              onChange={(e) =>
                setNewProduct({ ...newProduct, rating: e.target.value })
              }
              required
            />
            <TextField
              label="Image"
              value={newProduct.images[0]}
              onChange={(e) =>
                setNewProduct({ ...newProduct, images: [e.target.value] })
              }
              required
            />
            <Button type="submit">Save Product</Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};
