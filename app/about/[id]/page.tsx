const AboutDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params; //{} destructuring คือการเอาค่าออกมาจาก object
    console.log(id);
    return (
        <div>
            AboutDetailsPage
            <h1>{id}</h1>
        </div>
    )
}
export default AboutDetailsPage