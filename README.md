# ecart

A responsive product showcase application built as part of a frontend developer assignment. The app fetches data from a mock API and allows users to browse, filter, sort, and view product details — simulating a real e-commerce frontend.

---

## 🚀 Working Procedure

1. **Fetch Data** from [Fake Store API](https://fakestoreapi.com/)
2. **Display Products** with pagination (10 per page)
3. **Filter** products by:
   - Category (select dropdown)
   - Price (range slider)
4. **Sort** products by:
   - Price (ascending/descending)
   - Name
   - Popularity (rating)
5. **View Product Detail** page by clicking a product
6. **Add to Cart** (dummy functionality using local storage or mock API)
7. (Bonus) **Cart Page** displays added items with total calculation

---

## 🔧 Tech Stack & Versions

| Feature        | Tech Used              |
|----------------|------------------------|
| Framework      | React.js (v18.x)       |
| CSS Framework  | Tailwind CSS (v3.x)    |
| Component Lib  | Ant Design (v5.x)      |
| Carousel       | react-slick (v0.29.x)  |
| Icons & Alerts | Ant Design, SVGs       |
| API            | [Fake Store API](https://fakestoreapi.com) |
| Version Control| Git & GitHub           |

---

## 📡 API Information

Data is sourced from:  
🔗 https://fakestoreapi.com

| Endpoint                         | Usage                          |
|----------------------------------|--------------------------------|
| `GET /products`                  | Get all products               |
| `GET /products?limit=10`         | Limit number of products       |
| `GET /products/categories`       | Fetch all product categories   |
| `GET /products/category/:cat`    | Fetch products by category     |
| `GET /products/:id`              | Get single product detail      |
| `POST /carts` (dummy)            | Simulate add-to-cart action    |

> **Note**: Filtering by price must be implemented on the frontend.

---

## 🎯 Features

- ✅ Responsive Homepage with Product Grid
- ✅ Search Products by Name
- ✅ Filter by:
  - Category
  - Price Range
- ✅ Sort by:
  - Price
  - Rating (Popularity)
  - Name
- ✅ Product Detail View with image, description, and rating
- ✅ Add to Cart (dummy)
- ✅ Pagination (10 products per page)
- 🔄 Bonus:
  - Cart Page with product summary
  - Total price calculation
  - LocalStorage support

---

## 📷 Screenshots

- `screenshots/home.png`
- `screenshots/product-detail.png`
- `screenshots/cart.png`

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git https://github.com/christymathew9742/ecart.git
cd ecart

# Install dependencies
npm install

# Run locally
npm run start
