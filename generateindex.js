const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "images", "bgremoved");
const outputFilePath = path.join(__dirname, "products.json");

// Ensure the target directory exists
if (!fs.existsSync(imagesDir)) {
  console.error("Directory 'bgremoved' does not exist.");
  process.exit(1);
}

// Function to list subdirectories
const getDirectories = source =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// Function to list image files in a directory
// Function to list image files in a directory
const getImages = source =>
    fs.readdirSync(source)
      .filter(file => /\.(jpg|jpeg|png|gif)$/.test(file))
      .map(file => ({
        title: path.basename(file, path.extname(file)),
        image: path.join("images", "bgremoved", path.basename(source), file)
      }));
  
// Generate index based on directory structure
const generateIndex = () => {
  const categories = getDirectories(imagesDir);
  let products = [];

  categories.forEach(category => {
    const categoryPath = path.join(imagesDir, category);
    const categoryProducts = getImages(categoryPath);
    products = products.concat(categoryProducts);
  });

  return products;
};

// Write products to products.json
const writeProductsJSON = products => {
  fs.writeFileSync(outputFilePath, JSON.stringify(products, null, 2), "utf-8");
  console.log("products.json updated successfully.");
};

// Generate index and write to products.json
const productsIndex = generateIndex();
writeProductsJSON(productsIndex);
