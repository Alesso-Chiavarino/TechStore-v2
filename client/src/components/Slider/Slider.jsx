import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {

    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: "400px" }}
                        className="d-block w-100"
                        src="./img/2.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "400px" }}
                        className="d-block w-100"
                        src="./img/4.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "400px" }}
                        className="d-block w-100"
                        src="./img/3.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "400px" }}
                        className="d-block w-100"
                        src="./img/8.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>

            </Carousel>
        </div>
    )
}
export default Slider