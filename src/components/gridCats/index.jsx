import React from 'react'
import './style.css'

const GridCats = ({
    catList,
    showModal
}) => {

    return (
        <div className="center">
            <section>
                {catList.map((cat) =>

                    <img className="img-padding" src={cat.url} width="200" height="200" onClick={() => {
                        showModal(cat.url)
                    }}/>

                )}
            </section>
        </div>
    )
}

export default GridCats