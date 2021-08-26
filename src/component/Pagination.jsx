import React from "react";
import Button from '@material-ui/core/Button';
const Pagination = (props)=>{
    const pageNumber = [];
    for(let i=1; i<=props.total; i++){
        pageNumber.push(i);
    }

    return(<>
            <div className="all_btn">
            <span>Pages:</span>
                {pageNumber.map((number)=>{
                    return(
                            <Button className="btn" onClick={()=>{props.paginate(number)}} href="!#">{number}</Button>
                    )
                })}
                </div>
    </>)
}

export default Pagination;