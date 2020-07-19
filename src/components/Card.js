import React from 'react'
export default Card

function Card() {
   
    const ProductsList = () => {
        const [products, setProducts] = useState([]);
        const [pageNum, setPageNum] = useState(1);
        const [maxPageNum, setMaxPageNum] = useState(1000);
        const { eid } = useParams();
      
        useEffect(() => {
          async function fetchData() {
            const data = await fetch(`http://localhost:3001/product?page=${pageNum}`);
            const response = await data.json();
            setProducts(response.data);
            console.log(response);
            setMaxPageNum(parseInt(response.maxPageNum)); // 1
          }
          fetchData();
        }, [pageNum]);
    }
    const goNextPage = () => {
        setPageNum(pageNum + 1);
      };
      const goPrevPage = () => {
        setPageNum(pageNum - 1);
      };
    const Product = ({
        _id,
        title,
        pictureURL,
        price,
        origin,
        materials,
        description,
        howToUse,
      }) => {
        const history = useHistory();
        return (
        //     <Container>
        //     <Row id="pruducts-list" gutter={[16, 16]}>
        //       {products.map((e) => (
        //         <Col lg="6" md="8" xs="24">
        //           <Product {...e} />
        //         </Col>
        //       ))}
        //     </Row>
        //     <div className="d-flex justify-content-between">
        //       <PaginationLink disabled={pageNum === 1} handleClick={goPrevPage}>
        //         Prev Page
        //       </PaginationLink>
        //       <PaginationLink
        //         disabled={pageNum === maxPageNum}
        //         handleClick={goNextPage}
        //       >
        //         Next Page
        //       </PaginationLink>
        //     </div>
        //   </Container>
          <Row>
            <Col className="main-product" sm={12} md={12}>
              <Card style={{ width: "18rem", marginBottom: "10px" }}>
                <div className="imgBox">
                  <a href={`/product/${_id}`}>
                    <Card.Img
                      className="img-fluid"
                      variant="top"
                      style={{
                        height: "18rem",
                        objectFit: "cover",
                        width: "100%",
                        maxHeight: "150px",
                      }}
                      className="cardImg"
                      src={pictureURL}
                    />
      
                    {/* <Card.Img class="img-fluid" variant="top" src={pictureURL} /> */}
                  </a>
                </div>
      
                <Card.Body>
                  <Card.Title>Product: {title}</Card.Title>
                  <Card.Text>Price: ${price}</Card.Text>
                  <Card.Text>Origin: {origin}</Card.Text>
                  <Card.Text>Materials: {materials}</Card.Text>
                  <Card.Text>Description: {description}</Card.Text>
                  <Card.Text>Functions:{howToUse}</Card.Text>
                </Card.Body>
                <div className="product-button text-center d-flex justify-content-around pb-3">
                  <Button className="btn btn-product">Add to cart</Button>
      
                  <Button
                    className="btn btn-product"
                    onClick={() => {
                      history.push(`product/${_id}`);
                    }}
                  >
                    See more
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        );
      };
    
        

    }