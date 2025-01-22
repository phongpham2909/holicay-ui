const webfont = require("webfont").default;
const path = require("path");
const fs = require("fs");

(async () => {
  try {
    const svgFiles = path.resolve(__dirname, "public/svg-icons/*.svg");
    const outputPath = path.resolve(__dirname, "public/fonts");
    const result = await webfont({
      files: svgFiles, // Path to your SVG icons
      fontName: "holicay-ui-icons",
      fontWeight: "normal",
      fontStyle: "normal",
      dest: outputPath, // Output directory
      template: "css",
    });
    // Write font files
    if (result.ttf) {
      fs.writeFileSync(
        path.join(outputPath, "holicay-ui-icons.ttf"),
        result.ttf
      );
      console.log("TTF file saved.");
    }

    if (result.eot) {
      fs.writeFileSync(
        path.join(outputPath, "holicay-ui-icons.eot"),
        result.eot
      );
      console.log("EOT file saved.");
    }

    if (result.woff) {
      fs.writeFileSync(
        path.join(outputPath, "holicay-ui-icons.woff"),
        result.woff
      );
      console.log("WOFF file saved.");
    }

    if (result.woff2) {
      fs.writeFileSync(
        path.join(outputPath, "holicay-ui-icons.woff2"),
        result.woff2
      );
      console.log("WOFF2 file saved.");
    }

    if (result.svg) {
      fs.writeFileSync(
        path.join(outputPath, "holicay-ui-icons.svg"),
        result.svg
      );
      console.log("SVG font file saved.");
    }

    // Write the generated CSS file
    if (result && result.template) {
      const cssPath = path.join(outputPath, "holicay-ui-icons.css");
      fs.writeFileSync(cssPath, result.template);
      console.log("CSS file generated at:", cssPath);
      console.log("Webfont generated successfully!");
    }
  } catch (error) {
    console.error("Error generating webfont:", error);
  }
})();
