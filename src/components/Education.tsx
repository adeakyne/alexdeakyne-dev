import Degree from "./Degree";
import { education } from "../data/education";

function Education() {
    return (
        <>
            <h2>Education</h2>
            {education.map(deg => (
                <Degree key={deg.degree} {...deg} />
            ))}
        </>
    )
}

export default Education