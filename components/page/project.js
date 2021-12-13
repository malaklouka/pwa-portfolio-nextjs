export default function Project(props) {
    return (
        <div className='box grid  '>
            {props.project.map((project, i) => {
                let { url, title, description, year, image } = project
                return (
                    <div className=' box col w-300 ui m center-text space' key={i}>
                        <h3>
                            <img src={image} height="260px" width="300px"/>
                            {title}</h3>

                        <span>{year}</span>
                        <p>{description}</p>
                        <a href={url} className='btn ui'>{props.data.oglink}</a>
                    </div>
                )
            })}
        </div>
    )
}