const fs = require("fs-extra");
const path = require("path");

// Set the directory where the images are located
const assetsDir = path.join("public", "static", "assets");

// Function to generate import statements for each image
const setImports = (imageNames) =>
  imageNames
    .map(
      (imageName) =>
        `import ${imageName
          .replace(/\..+$/, "")
          .toUpperCase()
          .replace(/[^a-zA-Z0-9_]/g, "_")} from "static/assets/${imageName}";`
    )
    .join("\n");

// Function to generate image properties for the object
const setImageProps = (imageNames) =>
  imageNames
    .map(
      (imageName) =>
        `${imageName
          .replace(/\..+$/, "")
          .toUpperCase()
          .replace(/[^a-zA-Z0-9_]/g, "_")},`
    )
    .join("\n");

// Function to generate export statements for each image
const setExports = (imageNames) =>
  imageNames
    .map(
      (imageName) =>
        `export { ${imageName
          .replace(/\..+$/, "")
          .toUpperCase()
          .replace(/[^a-zA-Z0-9_]/g, "_")} };`
    )
    .join("\n");

// Main function to update image imports, object properties, and export statements
const setFullImageExport = async () => {
  try {
    // Read the image files from the assets directory
    const imageFiles = await fs.readdir(assetsDir);

    // Generate the import statements for the images
    const imageImports = setImports(imageFiles);

    // Generate the image properties for the object
    const imageObjectProperties = setImageProps(imageFiles);

    // Generate the export statements for the images
    const imageExports = setExports(imageFiles);

    // Define the target file where the exportImages.js is located
    const targetFile = path.join("helpers", "exportImages.js");

    // Read the existing content of the target file
    const existingContent = await fs.readFile(targetFile, "utf-8");

    // Regular expressions to match import and object properties
    const importRegex = /import .+ from "static\/assets\/.+";\n/g;
    const objectRegex = /export const images = \{[\s\S]*\};\n/g;

    // Remove all existing import statements from the existing content
    const updatedContentWithoutImports = existingContent.replace(
      importRegex,
      ""
    );

    // Replace the object properties with the new ones
    const updatedContentWithProperties = updatedContentWithoutImports.replace(
      objectRegex,
      `export const images = {\n${imageObjectProperties}};\n`
    );

    // Combine the updated content with new import and export statements
    const updatedContent = `${imageImports}\n${updatedContentWithProperties}\n${imageExports}`;

    // Write the updated content back to the target file
    await fs.writeFile(targetFile, updatedContent, "utf-8");

    console.log(
      "Updated image imports, object properties, and exports successfully!"
    );
  } catch (error) {
    console.error(
      "Error updating image imports, object properties, and exports:",
      error
    );
  }
};

// Call the main function to update the exportImages.js file
setFullImageExport();
