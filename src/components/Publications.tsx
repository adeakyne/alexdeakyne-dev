import { publications } from '../data/publications.ts'
import PublicationGroup from './PublicationGroup.tsx'
import TalkGroups from './TalkGroup.tsx'
import { talks } from '../data/talks.ts'
import Talk from './Talks.tsx'

const books = publications.filter(pub => pub.type === "book")
const journals = publications.filter(pub => pub.type === "journal")
const conferences = publications.filter(pub => pub.type === "conference")
const preprints = publications.filter(pub => pub.type === "preprint")
const selectedTalks = talks.filter(tlk => tlk.type === "talk")
const selectedPosters = talks.filter(tlk => tlk.type === "poster")

function Publications() {
    return (
        <section>
            <h2>Publications</h2>
            <TalkGroups heading="Selected Talks" talks={selectedTalks}/>
            <PublicationGroup heading="Book Chapters" pubs={books} />
            <PublicationGroup heading="Journal Articles" pubs={journals} />
            <PublicationGroup heading="Conference Papers" pubs={conferences} />
            <PublicationGroup heading="Preprints" pubs={preprints} />
            <TalkGroups heading="Conference Posters" talks={selectedPosters} />
        </section>
    )
}

export default Publications