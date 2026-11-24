import type {EducationData} from "../data/education";

function Degree(props: EducationData) {
    return (
        <li>
            {props.degree}, {props.field}, 
            {props.thesis ? `, ${props.thesis}` : null},
            {props.university}, {props.university}, {props.year}
        </li>
    )}

export default Degree
