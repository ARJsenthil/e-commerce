import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home () {
    const storedData = localStorage.getItem('data');
    const data = storedData ? JSON.parse(storedData) : "";
    const deleteProductData = () => {
        Swal.fire({
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
                }
                catch(e) {

                }
                finally {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });                    
                }

            }
          });
    }

    return (
        <div className="container">
            <button onClick={deleteProductData} className="btn btn-danger">Clear Data</button>
        <div className="row trending-container">
            {data ? (data.map((data1) => 
                    <div className="col-12 col-md-6 col-lg-4 trending-box">
                        <div className="my-1 border trending-box-inner-container">
                        <div className="w-100 trending-box-img-container">
                            <img src={data1.productImgSrc} />
                            <div className="w-100 trending-img-hover-box">
                                <i class="bi bi-heart text-right"></i>
                            </div>
                        </div>  
                            
                        <div className="img-content px-2 py-3">
                        {/* <span className="text-sm-center text-md-left text-secondary">{data1.productType.toUpperCase()}</span> */}
                        <h6 className="text-center m-0">{data1.productName.toUpperCase()}</h6>
                        <h3 className="product_price_parent"><span className="product_price" id="product_price">₹{data1.productFinalPrice}</span><del className="product_org_price" id="product_org_price">{data1.productDiscountType == -1 ? '' : ('₹'+data1.productOrginalPrice)}</del><span style={{color: 'green'}}><span className="product_discount" id="product_discount">{data1.productDiscountType == "%" ? (data1.productDiscount + "%"): (data1.productDiscountType == "flat" ? ("₹" + data1.productDiscount) : "")}</span></span> </h3>
                        <Link className="btn btn-primary" to={`/Shopping?id=${parseInt(data1.id)}`}>View Product</Link>
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