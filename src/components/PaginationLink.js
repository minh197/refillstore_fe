import React from 'react'
import Button from 'react-bootstrap/Button'


const PaginationLink =({disabled, handleClick, children})=> {
    if(disabled){
    return  <Button className="btn disabled btn-product">{children}</Button>
}
    return (
        <Button   onClick={handleClick} classname="btn-product">{children}</Button>
    )
}

export default PaginationLink
