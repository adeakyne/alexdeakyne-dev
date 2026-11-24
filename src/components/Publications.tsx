import Publication from './Publication.tsx'
import { publications } from '../data/publications.ts'

const books = publications.filter(pub => pub.type === "book")
const journals = publications.filter(pub => pub.type === "journal")

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
                    journal={pub.journal}
                    year={pub.year}
                    url={pub.url}
                    />
                ))}
            </ol>
            <h3>Publications</h3>
            <ol>
                {journals.map(pub=> (
                    <Publication
                    key={pub.url}
                    title={pub.title}
                    journal={pub.journal}
                    year={pub.year}
                    url={pub.url}
                    />
                ))}
            </ol>
        </section>
    )
}

export default Publications