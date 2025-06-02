-- Clear existing data (optional)
TRUNCATE TABLE products, categories, product_images RESTART IDENTITY CASCADE;

-- Insert Clothing Categories
INSERT INTO categories (name, description) VALUES
('T-Shirts', 'Basic and graphic tees for everyday wear'),
('Denim', 'Jeans, jackets, and all things denim'),
('Outerwear', 'Jackets and coats for all seasons'),
('Activewear', 'Performance clothing for workouts and sports'),
('Accessories', 'Hats, belts, and other accessories');

-- Insert Products
INSERT INTO products (name, description, price, stock_quantity, category_id) VALUES
('Classic White Tee', '100% organic cotton crew neck t-shirt', 29.99, 150, 1),
('Vintage Washed Denim Jacket', 'Distressed denim jacket with classic fit', 89.99, 75, 2),
('Black Skinny Jeans', 'Stretch denim skinny jeans in classic black', 59.99, 120, 2),
('Oversized Hoodie', 'Cozy oversized hoodie with kangaroo pocket', 49.99, 90, 1),
('Athletic Jogger Pants', 'Performance fabric joggers with elastic waist', 44.99, 85, 4),
('Dad Hat', 'Structured cotton cap with curved brim', 24.99, 200, 5),
('Bomber Jacket', 'Lightweight nylon bomber with ribbed trim', 79.99, 60, 3),
('Graphic Logo Tee', 'Boxy fit tee with brand logo print', 34.99, 110, 1),
('High-Waisted Mom Jeans', '90s inspired high-waisted straight leg', 64.99, 95, 2),
('Yoga Leggings', 'High-waisted leggings with moisture-wicking fabric', 54.99, 130, 4);

-- Insert Product Images
INSERT INTO product_images (product_id, image_url, alt_text, is_primary) VALUES
(1, 'https://example.com/images/white-tee-front.jpg', 'White t-shirt front view', true),
(1, 'https://example.com/images/white-tee-back.jpg', 'White t-shirt back view', false),
(2, 'https://example.com/images/denim-jacket.jpg', 'Vintage denim jacket', true),
(3, 'https://example.com/images/black-jeans.jpg', 'Black skinny jeans', true),
(4, 'https://example.com/images/hoodie.jpg', 'Oversized hoodie', true),
(5, 'https://example.com/images/joggers.jpg', 'Athletic jogger pants', true),
(6, 'https://example.com/images/dad-hat.jpg', 'Dad hat', true),
(7, 'https://example.com/images/bomber.jpg', 'Bomber jacket', true),
(8, 'https://example.com/images/graphic-tee.jpg', 'Graphic logo t-shirt', true),
(9, 'https://example.com/images/mom-jeans.jpg', 'High-waisted mom jeans', true),
(10, 'https://example.com/images/leggings.jpg', 'Yoga leggings', true);

-- Insert Sample User
INSERT INTO users (username, email, password_hash, first_name, last_name) VALUES
('style_admin', 'admin@yourbrand.com', '$2a$10$randomhashedpassword', 'Alex', 'Johnson');