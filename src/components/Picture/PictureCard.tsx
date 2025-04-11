import "./PictureCard.css"

interface pictureCardProps {
    picture: {
        imgSrc?: string;
        id: string;
        author: string;
    };
}





function PictureCard({ picture }: pictureCardProps) {
    return (
        <>
            {picture.imgSrc !== undefined ? (
                <img
                    src={picture.imgSrc}
                    alt={picture.author}
                />
            ) : (
                <p>???</p>
            )}
            <figcaption>{picture.author}</figcaption>
        </>
    );
}

export default PictureCard;