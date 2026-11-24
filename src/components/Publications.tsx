import Publication from './Publication.tsx'
import { publications } from '../data/publications.ts'

const books = publications.filter(pub => pub.type === "book")
const journals = publications.filter(pub => pub.type === "journal")
const conferences = publications.filter(pub => pub.type === "conference")
const preprints = publications.filter(pub => pub.type === "preprint")

function Publications() {
    return (
        <section>
            <h2>Publications</h2>
            <h3>Book Chapters</h3>
            <ol>
                {books.map(pub=> (
                    <Publication
                    key={pub.url}
                    title={pub.title}
                    venue={pub.venue}
                    year={pub.year}
                    url={pub.url}
                    />
                ))}
            </ol>
            <h3>Journal Articles</h3>
            <ol>
                {journals.map(pub=> (
                    <Publication
                    key={pub.url}
                    title={pub.title}
                    venue={pub.venue}
                    year={pub.year}
                    url={pub.url}
                    />
                ))}
            </ol>
            <h3>Conference Papers</h3>
            <ol>
                {conferences.map(pub=> (
                    <Publication
                    key={pub.url}
                    title={pub.title}
                    venue={pub.venue}
                    year={pub.year}
                    url={pub.url}
                    />
                ))}
            </ol>
            <h3>Preprint</h3>
            <ol>
                {preprints.map(pub=> (
                    <Publication
                    key={pub.url}
                    title={pub.title}
                    venue={pub.venue}
                    year={pub.year}
                    url={pub.url}
                    />
                ))}
            </ol>
        </section>
    )
}

export default Publications