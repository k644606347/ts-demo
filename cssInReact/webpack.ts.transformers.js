// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer({
    getDisplayName(fileName, bingdingName) {
        return bingdingName;
    }
});

// 3. create getCustomTransformer function
const getCustomTransformers = () => ({ before: [styledComponentsTransformer] });

// 4. export getCustomTransformers
module.exports = getCustomTransformers;