import Star from "../Star";

function Stars({ count }) {
    const getStarts = count => {
        let listStars = [];
        if (count > 0 && count <= 5) {
            for (let i = 0; i < count; i++) {
                listStars.push(
                    <li key={i}>
                        <Star />
                    </li>
                );
            }
            return listStars;
        } else {
            return listStars;
        }

    };

    return (
        <div>
            <ul className="card-body-stars">
                {getStarts(count)}
            </ul>
        </div>
    )
}

Stars.defaultProps = {
    count: 0
}

export default Stars; 