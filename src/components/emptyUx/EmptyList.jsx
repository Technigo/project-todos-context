import yellow from "../../Image/yellow.jpeg";
import "./emptyList.css"

export const EmptyList = () => {
    return (
        <div className="empty-list-container">
            <img src={yellow} alt="a yellow" className="emptyImg"/>
            <p aria-label="remind for empty list"> 
                Your todo list is empty...
            </p>
        </div>
    )
}