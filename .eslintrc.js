// .eslintrc.js
module.exports = {
    // ... your existing ESLint configuration
    rules: {
      // Your existing rules
    },
    overrides: [
      {
        files: ['**/*.js'], // Adjust this pattern to match your file types
        env: {
          node: true,
        },
        rules: process.env.CI === 'true' ? {
          'no-warning-comments': 'off', // Example rule, turn off specific rules here
        } : {},
      },
    ],
  };
  