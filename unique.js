const uniqid = require('uniqid')

module.exports = function (filename) {
	const extension = filename.split('.').pop()
	return `${uniqid()}.${extension}`
}
