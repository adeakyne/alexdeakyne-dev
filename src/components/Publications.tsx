import Publication from './Publication.tsx'
import { publications } from '../data/publications.ts'

const books = publications.filter(pub => pub.type == "book")
const journals = publications.filter(pub => pub.type == "journal")

function Publications() {
    return (
        <section>
            <h2>Book Chapters</h2>
            <ol>
                {books.map(pub=> (
                    <Publication
                    key={pub.url}
                    type={pub.type}
                    title={pub.title}
                    journal={pub.journal}
                    year={pub.year}
                    url={pub.url}
                    />
                ))}
            </ol>
            <h2>Publications</h2>
            <ol>
                {journals.map(pub=> (
                    <Publication
                    key={pub.url}
                    type={pub.type}
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