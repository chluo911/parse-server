const traceAllExecution = (obj, parentKey = '') => {
  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      const originalFunction = obj[key];

      obj[key] = function () {
        // Log the function call and stack trace
        const stackTrace = new Error().stack;
        console.log(`Function called: ${parentKey}.${key}\nStack Trace: ${stackTrace}`);

        // Call the original function
        return originalFunction.apply(this, arguments);
      };
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recursively trace functions in nested objects
      traceAllExecution(obj[key], `${parentKey}.${key}`);
    }
  }
};

// Import the parse-server module
const parseServerModule = require("../lib/cli/parse-server");

// Trace all function calls within the parse-server module
traceAllExecution(parseServerModule);

// Export the modified parse-server module
module.exports = parseServerModule;

