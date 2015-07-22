/*
 * SCSS Lint Grunt plugin
 * https://github.com/ahmednuaman/grunt-scss-lint
 */

module.exports = function (grunt, options) {
    return {

        // Lint sass folder
        sass: [
            '<%= srcPath %>/sass'
        ],

        options: {
            config: '<%= testPath %>.scss-lint.yml',
            reporterOutput: '<%= testPath %>scss-lint-report.xml',
            compact: true,
            maxBuffer: NaN
        }
    };
};
