const Model = ({imgurl, currentIndex, close}) => {

    return(
        <>
        <div className="flex-col">
            <img key={imgurl}src={`${imgurl}.jpg`} className="imgStyle"/>
        <p>{currentIndex}</p>
        </div>
        </>
    )

}

export default Model