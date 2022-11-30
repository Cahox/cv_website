import PB from "../js/particlesBackground";

function Main() {
    return (
        <>
            <PB></PB>
            <div className='not_found'>
                <div className="title">
                    PAGE NOT FOUND!
                </div>
                <div className="description">
                    The requested page was not found...
                </div>
                <a href="/" className='home_btn button'>
                    Main
                </a>
            </div>
        </>
    )
}

export default Main;