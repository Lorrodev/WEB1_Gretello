import { createClient } from 'contentful'

class Contentful {
    constructor(){
        this.client = createClient({
            space: '264kwb7lzv97',
            accessToken: 'ZZeUvfedE-fdblp7ey2t2uLW7RKcqpY9HwP3gXSopHc'
        })
    }
}

export default new Contentful();