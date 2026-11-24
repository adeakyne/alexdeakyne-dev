import type {EducationData} from "../data/education";

function Degree(props: EducationData) {
    return (
        <li>
            <strong>{props.degree}</strong>, {props.field}
            <em>{props.thesis ? `, ${props.thesis}` : null}</em>, {""}
            {props.university}, {props.year}
        </li>
    )}

export default Degree
