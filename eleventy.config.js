module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/**/*.css")

    // Entire static section of site should be copied literally to the top-level
    eleventyConfig.addPassthroughCopy({ "./static": "." })

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}
