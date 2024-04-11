const Model = ({imgurl, currentIndex, fielnameTotitle, close}) => {

    return(
        <>
        <div className="flex-col">
            <img key={imgurl}src={`${imgurl}.jpg`} className="imgStyle"/>
        <p>{fielnameTotitle(imgurl)}</p>
        </div>
        </>
    )

}

export default Model