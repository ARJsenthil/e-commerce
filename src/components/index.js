import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import d from "sweetalert2";
import d from "sweetalert";

export default function Home () {
    const [data, setData] = useState([]);
    useEffect(() => {
        dataRetrive();
    }, [])

    console.log(data);
    
    const dataRetrive = () => {
    var storedData = localStorage.getItem('data');
    setData(storedData ? JSON.parse(storedData) : "");

    }
    const deleteProductData = () => {
        if(data.length > 0) {
            d.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        localStorage.setItem('data', '[]')
                        d.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });   
                          dataRetrive();
                    }
                    catch(e) {
                        d.fire({
                            title: "Sorry!",
                            text: "try again later.",
                            icon: "swarningccess"
                          }); 
                    }
                }
              });
        }
        else {
            d('Sorry !', 'Nothing To Delete', 'warning');
        }
    }

    const delectProduct = (id) => {
        var filterData = data.filter(item => item.id !== id);
        localStorage.setItem('data', JSON.stringify(filterData));
        dataRetrive();
    }

    return (
        <div className="container">
        <div className="row trending-container">
            <div className="col-12">
            <button onClick={deleteProductData} className="float-right my-2 btn btn-danger">Clear Data</button>
            </div>
            {data ? (data.map((data) => 
                    <div className="col-12 col-md-6 col-lg-4 trending-box">
                        <div className="my-1 border trending-box-inner-container">
                        <div className="w-100 trending-box-img-container">
                            <img src={data.productImgSrc} />
                            <div className="w-100 trending-img-hover-box">
                                <i class="bi bi-heart text-right"></i>
                            </div>
                        </div>  
                            
                        <div className="img-content px-2 py-3">
                        {/* <span className="text-sm-center text-md-left text-secondary">{data.productType.toUpperCase()}</span> */}
                        <h6 className="text-center m-0">{data.productName.toUpperCase()}</h6>
                        <h3 className="product_price_parent_home"><span className="product_price" id="product_price">₹{data.productFinalPrice}</span><del className="product_org_price" id="product_org_price">{data.productDiscountType == -1 ? '' : ('₹'+data.productOrginalPrice)}</del><span style={{color: 'green'}}><span className="product_discount" id="product_discount">{data.productDiscountType == "%" ? (data.productDiscount + "%"): (data.productDiscountType == "flat" ? ("₹" + data.productDiscount) : "")}</span></span> </h3>
                        <div className="action">
                            <Link className="btn btn-primary" to={`/Shopping?id=${data.id}`}>View Product</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => delectProduct(data.id)} style={{cursor:'pointer'}} width="23  " height="23  " fill="currentColor" class="text-danger bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/></svg>
                        </div>
                        </div>
                        </div>
                    </div>
            )) : ""}
            <div className="col-12 col-md-6 col-lg-4 trending-box">
                        <div className="my-1 border trending-box-inner-container">
                            <Link to={"/AddProduct"} className="add-product-link"><i className='bi bi-plus-circle-dotted'></i><span>Add Product</span></Link>
                        </div>
            </div>
            </div>
        </div>
    )
}