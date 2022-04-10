import PageTemplate from "../../components/PageTemplate";

const About = () => {

    const head = { title: "About" }

    const renderAboutPage = () => {
        return <>
            <h1>About</h1>
        </>
    };

    return <PageTemplate head={head}>
        { renderAboutPage() }
    </PageTemplate>;
}

export default About;