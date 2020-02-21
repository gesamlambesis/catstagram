import React, {useEffect, useState, useCallback} from 'react'
import GridCats from '../../components/gridCats'
import NavBar from '../../components/navBar'
import {Modal} from 'react-bootstrap'

const CatList = () => {

    const [catList, setCatList] = useState([])
    const [filterCat, setFilterCat] = useState("")
    const [firstSearch, setFirstSearch] = useState(true)
    const [imageToShow, setImageToShow] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getCats(limit) {
      
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${filterCat}&include_breeds=true`)
        const catData = await response.json()

        if(filterCat !== "") {
            if(firstSearch || catData.length === 0) {
                setCatList([
                    ...catData]) 
                setFirstSearch(false)
            } else {
                setCatList([
                    ...catList,
                    ...catData]) 
            }
        } else {
            if(!firstSearch) {
                setCatList([
                    ...catData]) 
                setFirstSearch(true)    
            } else {
                setCatList([
                    ...catList,
                    ...catData]) 
            }
        }
        
    }

    useEffect(() => {
        getCats(12)
    }, [filterCat])

    const showModalCallback = useCallback((imageToShow) => {

        setImageToShow(imageToShow)
        handleShow(true)

    }, [handleShow, setImageToShow])

    return (
        <div>
            <NavBar
                filterCats={setFilterCat}
            />        
            <GridCats
                catList={catList}
                showModal={showModalCallback}
            />
            <button className="search-button" onClick={() => {
               getCats(4)
            }}> 
                Mostrar más
            </button>

            <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img className="modal-img" src={imageToShow} height="400"/>
        </Modal.Body>
       
      </Modal>
         
        </div>
    )
}

export default CatList