import { createClient } from 'contentful'

class Contentful {
    constructor(){
        this.client = createClient({
            space: '264kwb7lzv97',
            accessToken: 'ZZeUvfedE-fdblp7ey2t2uLW7RKcqpY9HwP3gXSopHc'
        })
    }

    async getSnippets(){
        let result = await this.client
            .getEntries({
                content_type: "snippet"        
            });
            return result.items;
    }

    async getSections(){
        let result = await this.client
            .getEntries({
                content_type: "section",
                order: 'fields.sectionNumber', 
            });
            return result.items;
    }
}

export default new Contentful();