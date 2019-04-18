module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["react-app", 'plugin:react/recommended'],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'jsx-quotes': ['error', 'prefer-double'],
        'react/forbid-prop-types': ['error', { 'forbid': ['any'] }],
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'react/jsx-boolean-value': ['off'],
        'react/jsx-indent': ['warn', 2],
        'react/jsx-indent-props': ['warn', 2],
        'react/jsx-pascal-case': 'error',
        'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always' }],
        'react/sort-comp': ['error', {
            'order': [
                'static-methods',
                'lifecycle',
                'everything-else',
                'render'
            ],
            'groups': {
                'lifecycle': [
                    'displayName',
                    'propTypes',
                    'props',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'state',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'state',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount'
                ]
            }
        }],
    }
};