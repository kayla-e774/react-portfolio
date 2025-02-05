import document from '../assets/Resume2024.pdf'
export default function Resume() {
    return (
        <>
            <div>
                <h2 className="h2 text-center">Resume</h2>
            </div>
            <div className="container">
                <div className="text-center">
                    <a href={document} download="Resume" target="_blank">
                        <button className="btn btn-primary">
                            Download Resume
                        </button>
                    </a>
                </div>
                <dl className="row">
                    <dt className="col-sm-3">Front End Tools</dt>
                    <dd className="col-sm-9">
                        <ul>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </dd>

                    <dt className="col-sm-3">Back End Tools</dt>
                    <dd className="col-sm-9">
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>PostgreSQL/SQL</li>
                            <li>REST</li>
                        </ul>
                    </dd>

                    <dt className="col-sm-3">Other Tools</dt>
                    <dd className="col-sm-9">
                        <ul>
                            <li>C#/.NET</li>
                            <li>VB6</li>
                            <li>Blazor</li>
                            <li>NI Tools - TestStand</li>
                            <li>NI Tools - LabVIEW</li>
                            <li>Python</li>
                            <li>Git</li>
                            <li>TFS</li>
                        </ul>
                    </dd>

                </dl>
            </div>
        </>
    );
}