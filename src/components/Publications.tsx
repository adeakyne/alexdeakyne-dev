import { publications } from '../data/publications.ts'
import PublicationGroup from './PublicationGroup.tsx'

const books = publications.filter(pub => pub.type === "book")
const journals = publications.filter(pub => pub.type === "journal")
const conferences = publications.filter(pub => pub.type === "conference")
const preprints = publications.filter(pub => pub.type === "preprint")

function Publications() {
    return (
        <section>
            <h2>Publications</h2>
            <PublicationGroup heading="Book Chapters" pubs={books} />
            <PublicationGroup heading="Journal Articles" pubs={journals} />
            <PublicationGroup heading="Conference Papers" pubs={conferences} />
            <PublicationGroup heading="Preprints" pubs={preprints} />
        </section>
    )
}

export default Publications