import Publication from './Publication'

type PublicationGroupProps = {
    heading: string
    pubs: {
        title: string
        venue: string 
        year: number
        url: string
    }[]
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