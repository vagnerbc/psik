const { mergeResolvers } = require("@graphql-tools/merge");

const bookResolver = require("./book/index.resolver");
const studentResolver = require("./student/index.resolver");

const files = [bookResolver, studentResolver];

const resolvers = mergeResolvers(files);

module.exports = resolvers;
