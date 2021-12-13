import Homes from "../../components/page/home"
import Project from "../../components/page/project"
import Contact from "../../components/page/contact"
import Skills from "../../components/page/skill"

export default function Page(props) {
    let { query, data } = props
    if (query.page === 'project') {
        return (
            <section>
                <Homes data={data} />
                <Project data={data.text} project={data.project} />
                
            </section>
        )
    } if (query.page === 'skill') {
        return (
            <section>
                <Homes data={data} />
                <Skills data={data} skills={data.skills} />
            </section>
        )
    } if (query.page === 'contact') {
        return (
            <section>
                <Homes data={data} />
                <Contact data={data} />
            </section>
        )
    }
}


Page.getInitialProps = async ({ query }) => {
    let res = await import(`../../data/lang/${query.lang}.json`)
    return { data: res, query }
}