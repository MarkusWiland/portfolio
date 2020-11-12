import sanityClient from '@sanity/client'

export default sanityClient({
    dataset: 'production',
    projectId:'g0qknqf1',
    useCdn: true
})



