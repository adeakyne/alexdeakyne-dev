import Patent from './Patent.tsx'
import { patents } from '../data/patents.ts'

function Patents () {
    return (
        <section>
            <h2>Patents</h2>
            <ol>
                {patents.map(pat => (
                    <Patent
                    key={pat.number}
                    title={pat.title}
                    number={pat.number}
                    url={pat.url}
                    />
                ))}
            </ol>
        </section>
    )
}

export default Patents