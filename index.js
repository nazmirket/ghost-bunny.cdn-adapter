const BaseAdapter = require('ghost-storage-base')
const BunnyClient = require('./client')

const Config = require('./config.json')

const unique = require('./unique')
const fs = require('fs')

module.exports = class BunnyAdapter extends BaseAdapter {
	constructor() {
		super()
	}

	exists(filename) {
		return BunnyClient({
			endpoint: filename,
			method: 'PUT',
		})
			.then(response => response.ok)
			.catch(() => false)
	}

	save(file) {
		const name = unique(file.name)

		const headers = {}

		if (file.type) headers['Content-Type'] = file.type
		if (file.size) headers['Content-Length'] = file.size

		return BunnyClient({
			endpoint: name,
			method: 'PUT',
			headers,
			body: fs.createReadStream(file.path),
		}).then(() => [Config.cdn, name].join('/'))
	}

	serve() {
		return function customServe(req, res, next) {
			next()
		}
	}

	delete(filename) {
		return BunnyClient({
			endpoint: filename,
			method: 'DELETE',
		}).then(response => response.ok)
	}

	read(options) {
		return BunnyClient({
			endpoint: options.path,
			method: 'GET',
		}).then(() => {})
	}
}
