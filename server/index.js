const express = require("express");
const React = require("react");
const fs = require("fs");
const path = require("path");
const { renderToStaticMarkup } = require("react-dom/server");
const { IconsManifest } = require("react-icons");
const { camelCase, startCase, stubString, trim } = require("lodash");
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

const app = express();
const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const generateIcons = () => {
  const icons = [];

  for (const iconSet of IconsManifest) {
    const iconsLibrary = require(`react-icons/${iconSet.id}`);

    for (const iconName in iconsLibrary) {
      const IconComponent = iconsLibrary[iconName];
      const iconSvg = renderToStaticMarkup(React.createElement(IconComponent));
      const camelCased = camelCase(iconName);
      const withoutPrefix = camelCased.substring(2, camelCased.length);
      const trimmed = trim(withoutPrefix);

      icons.push({ id: iconName, name: startCase(trimmed), svg: iconSvg });
    }
  }

  const outputFilePath = path.join(__dirname, "public", "icons.json");
  fs.writeFileSync(outputFilePath, JSON.stringify(icons, null, 2), "utf-8");
  console.log(`Icons generated and saved to ${outputFilePath}`);
};

generateIcons();

app.use(express.static("public"));

app.get("/icons", (req, res) => {
  res.sendFile(path.join(publicDir, "icons.json"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
