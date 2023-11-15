import { person_name, person_number } from "../utils/const_config"
import "./PersonBadge.scss";

export const PersonBadge = () => {
  return (
    <div className="tag-person shadow " >
      <div className="number m-r-16">{person_number}</div>
      <h1 className="name">{person_name}</h1>
    </div>
  )
}