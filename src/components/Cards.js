import React from 'react';
import { Container, 
        Col, 
        Row, 
        Card } from 'react-bootstrap'
import '../styles/Cards.css'


function Cards() {
    {/** displaying all cards on products page (Products.js) */}
    return (
        <>
            <div className="products-list">
                {/** container listing products
       * 6 rows and 5 columns
       */}
                <Container>

                    {/** row 1 of 6 */}
                    <Row>
                    
                        {/**Col 1 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem'}}>
                                <Card.Img variant="top" src='/images/amethyst.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>AMETHYST</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 2 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/aquamarine.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>AQUAMARINE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 3 of 5  */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/aura-quartz.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>AURA QUARTZ</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 4 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/aventurine.jpg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>AVENTURINE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 5 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/brookite.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>BROOKITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>



                    {/** row 2 of 6 */ }
                    <Row>
                        
                        {/**Col 1 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/citrine.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>CITRINE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 2 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/carnelian.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>CARNELIAN</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 3 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/clear-quartz.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>CLEAR QUARTZ</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 4 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/danburite.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>DANBURITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 5 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/emerald.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>EMERALD</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>



                    {/** row 3 of 6  */ }
                    <Row>
                        
                        {/**Col 1 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/fluorite.jpeg' style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>FLUORITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 2 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/hematite.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>HEMATITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 3 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/howilite.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>HOWLITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 4 of 65*/}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/jasper.jpg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>JASPER</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 5 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/kunzite.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>KUNZITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>



                    {/** row 4 of 5  */  }
                    <Row>
                        
                        {/**Col 1 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/kyanite.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>KYANITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 2 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/labradorite.jpeg'style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '19px'}}>LABRADORITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 3 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/lapiz-lazuli.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '19px' }}>LAPIS LAZULI</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 4 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/malachite.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>MALACHITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 5 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/moldavite.jpeg'style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>MOLDAVITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>



                    {/** row 5 of 6  */}
                    <Row>

                        {/**Col 1 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/moonstone.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>MOON STONE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 2 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/obsidian.jpg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>OBSIDIAN</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 3 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/opal.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>OPAL</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 4 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/opalite.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>OPALITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 5 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/peridot.jpeg'style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>PERIDOT</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>



                    {/** row 6 of 6 */}
                    <Row>

                        {/**Col 1 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/pyrite.jpeg'style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>PYRITE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 2 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/quantom-quattro.jpeg'style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px' }}>QUANTOM QUATTRO</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 3 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/rose-quartz.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '19px' }}>ROSE QUARTZ</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 4 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/ruby.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>RUBY</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/**Col 5 of 5 */}
                        <Col>
                            <Card className="card border-0" style={{ width: '10rem' }}>
                                <Card.Img variant="top" src='/images/sapphire.jpeg' style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>SAPPHIRE</Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>$45.00 CAD</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>

    )
}
export default Cards;
