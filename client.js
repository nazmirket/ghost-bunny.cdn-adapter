const fetch = require('node-fetch')
const Config = require('./config.json')

module.exports = function (opts) {
	const { endpoint, method, headers, body } = opts
	const url = [Config.storageUrl, Config.storageZone, endpoint].join('/')
	return fetch(url, {
		method,
		headers: {
			AccessKey: Config.accessKey,
			...headers,
		},
		body,
	}).then(r => {
		if (!r.ok) throw new Error()
		return r
	})
}
