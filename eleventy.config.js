export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/resources");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  eleventyConfig.addPairedShortcode("section", (content, id, title) => {
    let section = `<section id='${id}'>`;

    if (title) {
      section += `<h2>${title}</h2>`;
    }

    section += `${content}</section>`;

    return section;
  });

  eleventyConfig.addPairedShortcode(
    "item",
    (content, headerLeft, headerRight) => {
      let item = "";

      if (headerLeft || headerRight) {
        item = "<div class='item-header'>";

        if (headerLeft) {
          item += `<h3>${headerLeft}</h3>`;
        }

        if (headerRight) {
          item += `<h3>${headerRight}</h3>`;
        }

        item += "</div>";
      }

      return item + content;
    }
  );
}
