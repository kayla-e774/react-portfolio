export default function Project(props) {
    return (
        <>
            <div className="card">
                <div className="bg-image hover-zoom">
                    <img className="card-img-top" src={props.image} alt="Card image cap"/>
                </div>
                <div className="card-body row">
                    <div className="col-md-4 text-center">
                        <h4 className="card-title">{props.title}</h4>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href={props.repoLink} target="_blank">
                            <button className="btn btn-primary">Github Repo</button>
                        </a>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href={props.deployLink} target="_blank">
                            <button className="btn btn-primary">Deployed Project</button>
                        </a>
                    </div>
                </div>
            </div>
            <p></p>
        </>
    )
}