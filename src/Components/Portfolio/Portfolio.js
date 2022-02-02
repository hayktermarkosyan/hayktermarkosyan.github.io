import './Portfolio.css';


function Portfolio({projects}) {
    return ( 
        projects.map(project => {
            return (
                <div className="container-fluid mb-2 custom" key={project.id}>
                        <div className="row">
                            <h1 className="projName">{project.name}</h1>
                            <div className="col-lg-8">
                                <div className="card projCardStyles">
                                    <h2 className="projCardName">Project screenshot</h2>
                                    <img 
                                        src={project.screenShot.src} 
                                        className={`card-img-top ${project.screenShot.styles}`} 
                                        height={`${project.screenShot.height}`}
                                        alt={`${project.screenShot.src}`}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card projCardStyles">
                                    <h2 className="projCardName">Description</h2>
                                    <div className="card-body">
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                    <div className="card-footer" style={{border: 'none', marginBottom: '10px'}}>
                                        <a 
                                           href={`${project.urlGit}`} 
                                           target="_blank" 
                                           rel="noreferrer"
                                           without="true"
                                           className="btn descrBtn"
                                        >
                                            View code
                                        </a>
                                        <a 
                                           href={`${project.url}`} 
                                           target="_blank" 
                                           rel="noreferrer"
                                           without="true"
                                           style={{width: '50%', marginLeft: '36px'}}
                                           className="btn descrBtn"
                                        >
                                            View project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        })
    )
}

export default Portfolio;