import photo from "@/assets/products/cottage cheese.jpg";
import { Product } from "@/types/product";
import freshbread from "@/assets/products/milk.jpg";
export const products: Product[] = [
  {
    id: 1,
    name: "Milk",
    description:
      "Enjoy the pure taste of FreshSan milk, free from hormones and additives.",
    price: 300,
    image: photo.src,
  },
  {
    id: 2,
    name: "Fresh Bread",
    description: "Soft and freshly baked bread for your daily meals.",
    price: 120,
    image: freshbread.src,
  },
  {
    id: 3,
    name: "Milk Carton Packs",
    description:
      "Milk boxes isolated on white aked bread for your daily meals.",
    price: 35,
    image: photo.src,
  },
  {
    id: 4,
    name: "Fresh Milk",
    description:
      "Nullam turpis sagittis mi metus taciti sodales fusce etiam enim.",
    price: 35,
    image: photo.src,
  },
  {
    id: 5,
    name: "Premium Cheese",
    description:
      "Nullam turpis sagittis mi metus taciti sodales fusce etiam enim.",
    price: 51,
    image: photo.src,
  },
  {
    id: 6,
    name: "Premium Yogurt",
    description:
      "Yogurt with muesli and berries. Nullam turpis sagittis mi metus taciti sodales fusce etiam enim.",
    price: 22,
    image: photo.src,
  },
  {
    id: 7,
    name: "Organic Milk",
    description:
      "Fresh milk, wheat seeds, and two eggs. Nullam turpis sagittis mi metus taciti sodales fusce etiam enim.",
    price: 37,
    image: photo.src,
  },
  {
    id: 8,
    name: "FreshMoo Butter",
    description:
      "Butter curl on a bread slice. Nullam turpis sagittis mi metus taciti sodales fusce etiam enim.",
    price: 15,
    image: photo.src,
  },
  {
    id: 9,
    name: "Milky Ice Cream",
    description:
      "Ice cream balls in a paper cup. Nullam turpis sagittis mi metus taciti sodales fusce etiam enim.",
    price: 14,
    image: photo.src,
  },
  {
    id: 10,
    name: "Cottage Cheese",
    description:
      "Butter and cheese. Nullam turpis sagittis mi metus taciti sodales fusce etiam enim.",
    price: 35,
    image: photo.src,
  },
  {
    id: 11,
    name: "Cream Milk",
    description:
      "Pouring condensed milk isolated on white background. Nullam turpis sagittis mi metus taciti sodales fusce etiam enim.",
    price: 35,
    image: photo.src,
  },
];
