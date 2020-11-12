import sanityClient from '@sanity/client'

export default sanityClient({
    dataset: 'production',
    projectId:'4946ui0q',
    useCdn: true
})



