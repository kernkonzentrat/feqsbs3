// https://github.com/indieisaconcept/grunt-styleguide -  CSS styleguide generator
module.exports = {
    options: {
        title: 'SN FE Quickstarter Styleguide'
    },
    dist: {
        files: {
            '<%= config.dist %>/styleguide/index.html': '<%= config.styleguide %>/main.css'
        },
        options: {
            config: '<%= config.styleguide %>/config_dist.md',
        }
    },
    tmp: {
        files: {
            '<%= config.tmp %>/styleguide/index.html': '<%= config.styleguide %>/main.css'
        },
        options: {
            config: '<%= config.styleguide %>/config_server.md',
        }
    }
};
