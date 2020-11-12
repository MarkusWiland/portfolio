import BlockContent from '@sanity/block-content-to-react';

export default function PostBody({content}) {
    console.log(content)
    return (
        <BlockContent
        blocks={content} projectId={'4946ui0q'} dataset={'production'} />
    )
}