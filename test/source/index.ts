import Jasmine = require('jasmine')
const jasmine = new Jasmine({})

import { apple } from '@my-npm-name/my-package-name'

describe('apple', () => {
	it('10 seeds', async () => {
		const seeds = await apple.seeds
		expect(seeds).toEqual(10)
	})
})

jasmine.execute()
