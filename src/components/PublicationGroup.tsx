import Publication from './Publication'
import type { PublicationData } from '../data/publications'

type PublicationGroupProps = {
    heading: string
    pubs: PublicationData[]
}

function PublicationGroup(props: PublicationGroupProps) {
    return (
        <>
        <h3>{props.heading}</h3>
        <ol>
            {props.pubs.map(pub => (
                <Publication
                    key={pub.url}
                    title={pub.title}
                    venue={pub.venue}
                    year={pub.year}
                    url={pub.url}
                />
            ))}
        </ol>
        </>
    )
}
export default PublicationGroup