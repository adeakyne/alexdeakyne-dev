import Publication from './Publication.tsx'
import { publications } from '../data/publications.ts'

function Publications() {
    return (
        <section>
            <h2>Publications</h2>
            <ol>
                {publications.map(pub=> (
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