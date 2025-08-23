import { DateTime } from "luxon"; 

export default async function(eleventyConfig) {
    // eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('src/assets');
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
        
    return {
        dir: {
            input: "src",
        },
        templateFormats: [ "md", "njk", "html", ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
}