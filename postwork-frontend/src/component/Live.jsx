export const Live = (props) => {
    const { liveId, title, author, category } = props.data
    return (
        <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://via.placeholder.com/300x180?text=Book image" alt="Live image" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Author: {author}</p>
                <p className="card-text">Id: {liveId}</p>
                <p className="card-text">Category: {category}</p>
            </div>
        </div>
    )
} 