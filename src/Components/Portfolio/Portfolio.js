import './Portfolio.css';

function Portfolio({projects}) {
    return ( 
        projects.map(project => {
            return (
                <div 
                    className="container-fluid" 
                    key={project.id} 
                    style={project.name === 'Calculator' ? {marginTop: '70px', marginBottom: '70px'}: {marginTop: '10px'} || 
                    project.name === 'Form Component' ? {marginBottom: '70px'}: {marginBottom: '0'}}
                >
                        <div className="row">
                            <h1 className="projName">{project.name}</h1>
                                <div className="col-lg-8">
                                    <div className="card projLeftCardStyles">
                                        <h2 className="projLeftCardName">Project screenshot</h2>
                                        <img 
                                            src={project.screenShot.src} 
                                            className={`card-img-top ${project.screenShot.styles}`} 
                                            height={`${project.screenShot.height}`}
                                            alt={`${project.screenShot.src}`}
                                        />
                                    </div>
                                </div>
                            <div className="col-lg-4">
                                <div className="card projRightCardStyles">
                                    <h2 className="projRightCardName">Description</h2>
                                    <div className="card-body" style={{padding: '0 16px'}}>
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                    <div className="card-footer" style={{border: 'none', marginBottom: '10px', padding: '0'}}>
                                        <a 
                                           href={`${project.urlGit}`} 
                                           target="_blank" 
                                           rel="noreferrer"
                                           without="true"
                                           style={{width: '40%', margin: '0 0 0 10px'}}
                                           className="btn descrBtn"
                                        >
                                            View code
                                        </a>
                                        <a 
                                           href={`${project.url}`} 
                                           target="_blank" 
                                           rel="noreferrer"
                                           without="true"
                                           style={{width: '50%', margin: '0 10px 0 0', float: 'right'}}
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