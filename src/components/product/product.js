

import '../style/product/product.css';
import { useEffect, useState } from "react";
import { Breadcrumb, Spinner, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function Product()
{
  const [productName, setProductName] = useState();
  const [productDiscription, setProductDiscription] = useState();
  const [productImgSrc, setProductImgSrc] = useState();
  const [productOrginalPrice, setProductOrginalPrice] = useState();
  const [productDiscountType, setProductDiscountType] = useState();
  const [productDiscount, setProductDiscount] = useState();
  const [productFinalPrice, setProductFinalPrice] = useState();
  const [productQuantityLimit, setProductQuantityLimit] = useState();
  const [productType, setProductType] = useState();
  const [maxMinQua, setMaxMinQua] = useState(1);
  const fixedData = {
    productOrginalPrice : parseInt(localStorage.getItem('productOrginalPrice')),
    productFinalPrice : '',
    productDiscount : '',
  }
  const [productDiscountManditary, setProductDiscountManditary] = useState(false);
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  
  console.log(id)
  useEffect(() => {
    var productList = JSON.parse(localStorage.getItem('data'));
    var data; 
      productList.forEach(element => {
      if(parseInt(element.id) === parseInt(id)) {
        data = element;
        console.log(element)
      }
      });
  fixedData.productOrginalPrice = data.productOrginalPrice;
  fixedData.productDiscount = data.productDiscount;
  fixedData.productFinalPrice = (data.productFinalPrice);
  }, [fixedData])
  useEffect(() => {
    var productList = JSON.parse(localStorage.getItem('data'));
    var data; 
      productList.forEach(element => {
      if(parseInt(element.id) === parseInt(id)) {
        data = element;
        console.log(element)
      }
      });
  setProductName(data.productName);
  setProductDiscription(data.productDiscription);
  setProductImgSrc(data.productImgSrc);
  setProductOrginalPrice(data.productOrginalPrice);
  setProductDiscountType(data.productDiscountType);
  setProductDiscount(data.productDiscount);
  
  setProductFinalPrice(data.productFinalPrice);
  setProductQuantityLimit(data.productQuantityLimit);
  setProductType(localStorage.getItem('productType'));
  cl();
  }, [])
  const nav = useNavigate();

  const cl = () =>
    {
        if(productDiscountType == 'flat')
        {
          setProductDiscount(productDiscount * maxMinQua);
        }
        
    }

    const  pluse = () =>
    {
        if(maxMinQua < productQuantityLimit)
        {
            var max_min_value = maxMinQua;
            max_min_value++;
            setMaxMinQua(max_min_value);
            var a = max_min_value;
            setProductFinalPrice((Math.round(parseInt(fixedData.productFinalPrice)) * a));
            if(productDiscountType == '%' || productDiscountType == 'flat')
            {
              setProductOrginalPrice((Math.round(fixedData.productOrginalPrice) * a));
            }
            if(productDiscountType == 'flat')
            {
              setProductDiscount((fixedData.productDiscount * a));
            }
        }
    }

    const  minus = () =>
    {
        if(maxMinQua !== 1) {
        if(maxMinQua <= productQuantityLimit)
        {
            var max_min_value = maxMinQua;
            max_min_value--;
            setMaxMinQua(max_min_value);
            setProductFinalPrice((Math.round(fixedData.productFinalPrice) * max_min_value));
            if(productDiscountType == '%' || productDiscountType == 'flat')
            {
              setProductOrginalPrice((Math.round(fixedData.productOrginalPrice) * max_min_value));
            }
            if(productDiscountType == 'flat')
            {
              setProductDiscount((fixedData.productDiscount * max_min_value));
            }
        }
      }
    }

    const addToCart = () => {
      localStorage.setItem('Quantity', maxMinQua);
      nav(`/AddToCart?id=${id}`, { replace: true })
    }

    return(
        <div class="container">
        <Breadcrumb className='mt-2'>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="">Product</Link></Breadcrumb.Item>
        </Breadcrumb>
            <div class="row overflow-hidden product">
                <div class="col-md-5 col-sm-12 bg-dark text-white img_cont" style={{height: '500px'}}>
                    <h5 class="py-2" style={{height : '40px'}}>Product Image</h5>
                    <img src={productImgSrc} alt="" className="img" id="img" class="w-100 pb-3" style={{height : '450px'}} />  
                </div>
                <div class="col-md-7 col-sm-12 position-relative" style={{height: '500px', backgroundColor: 'rgba(153, 153, 153, 0.79)'}}>
                    <h1 className="product_name" id="product_name">{productName}</h1>
                    <h3 class="d-flex" className="product_price_parent"><span className="product_price" id="product_price">₹{productFinalPrice}</span><del className="product_org_price" id="product_org_price">{productDiscountType == -1 ? '' : ('₹'+productOrginalPrice)}</del><span style={{color: 'green'}}><span className="product_discount" id="product_discount">{productDiscountType == "%" ? (productDiscount + "%"): (productDiscountType == "flat" ? ("₹" + productDiscount) : "")}</span></span> </h3>
                    <p className="product_des" id="product_des">{productDiscription}</p>
                    <div className='btn-parent w-100'>
                      <div class="max-min"><button onClick={minus} class="minus">-</button><input type="text" name="" className="max_min" id="max_min" value={maxMinQua} style={{maxWidth : '30px !important'}} readonly /><button onClick={pluse} class="pluse">+</button></div>
                      <button onClick={addToCart} class="addToCart " >Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;