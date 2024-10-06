
// {

// // import { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";


// // function Product()
// // {
  
// //   const imgSrc = localStorage.getItem('productImgSrc');
// //   const [productName, setProductName] = useState(localStorage.getItem('productName'));
// //   const [productPrice, setProductPrice] = useState(localStorage.getItem('productPrice'));
// //   const [productOrgPrice, setProductOrgPrice] = useState(localStorage.getItem('productOrgPrice'));
// //   const [productDiscount, setProductDiscount] = useState(localStorage.getItem('productDis'));
// //   const [productDisType, setProductDisType] = useState(localStorage.getItem('discountType'));
// //   const [productDes, setProductDes] = useState(localStorage.getItem('productDesc'));
// //   const [maxMinValue, setMaxminvalue] = useState('');

// //   const nav = useNavigate();
// //   useEffect(() => {
// //     cl();
// //   }, [])

// //   const cl = () =>
// //     {
    
// //       setProductName(localStorage.getItem('productName'));
// //       setProductPrice(localStorage.getItem('productPrice'));
// //       setProductOrgPrice(localStorage.getItem('productOrgPrice'));
// //       setProductDiscount(localStorage.getItem('productDis'));
// //       setProductDisType(localStorage.getItem('discountType'));
// //       setProductDes(localStorage.getItem('productDesc'));
// //         localStorage.setItem('maxQua', maxMinValue);

// //         if(disType == '%')
// //         {
// //           product_discount.innerHTML = discount;
// //           product_dis_type.innerHTML = disType+'off';
// //         }
// //         else if(disType == 'flat')
// //         {
// //           product_discount.innerHTML = '₹'+discount;
// //           product_dis_type.innerHTML = 'off';
// //         }

// //         var a = localStorage.getItem('maxQua');
// //         product_price.innerHTML = '₹'+localStorage.getItem('productPrice') * a;
// //         if(disType != '')
// //         {
// //           product_org_price.innerHTML = '₹'+localStorage.getItem('productOrgPrice') * a;
// //           product_org_price.innerHTML = '₹'+org_price;
// //         }
// //         if(localStorage.getItem('discountType') == 'flat')
// //         {
// //           product_discount.innerHTML = '₹'+localStorage.getItem('productDis') * a;
// //         }
        
// //     }


// //     const  pluse = () =>
// //     {
        
// //         var max_qua = localStorage.getItem('productMaxQuantity');
// //         var max_min = document.getElementById('max_min');
// //         var disType = localStorage.getItem('discountType');

// //         console.log(max_qua)
// //         if(max_min.value < parseInt(max_qua))
// //         {
// //             var max_min_value = parseInt(max_min.value);
// //             max_min_value++;
// //             max_min.value = max_min_value;


// //             localStorage.setItem('maxQua', max_min_value);
// //             var a = localStorage.getItem('maxQua');
// //             product_price.innerHTML = '₹'+Math.round(localStorage.getItem('productPrice')) * a;
// //             if(disType == '%' || disType == 'flat')
// //             {
// //               product_org_price.innerHTML = '₹'+Math.round(localStorage.getItem('productOrgPrice')) * a;
// //             }
// //             if(localStorage.getItem('discountType') == 'flat')
// //             {
// //               product_discount.innerHTML = '₹'+localStorage.getItem('productDis') * a;
// //             }
// //         }


// //     }


// //     const  minus = () =>
// //     {
        
// //         var max_qua = localStorage.getItem('productMaxQuantity');
// //         var max_min = document.getElementById('max_min');
// //         var disType = localStorage.getItem('discountType');

// //         console.log(max_qua)
// //         if(max_min.value > 1)
// //         {
// //             var max_min_value = parseInt(max_min.value);
// //             max_min_value--;
// //             max_min.value = max_min_value;


// //             localStorage.setItem('maxQua', max_min_value);
// //             var a = localStorage.getItem('maxQua');
// //             product_price.innerHTML = '₹'+Math.round(localStorage.getItem('productPrice')) * a;
// //             if(disType == '%' || disType == 'flat')
// //             {
// //               product_org_price.innerHTML = '₹'+Math.round(localStorage.getItem('productOrgPrice')) * a;
// //             }
// //             if(localStorage.getItem('discountType') == 'flat')
// //             {
// //               product_discount.innerHTML = '₹'+localStorage.getItem('productDis') * a;
// //             }
// //         }


// //     }


// //     const addToCart = () =>
// //     {
// //         nav('./addToCart.html', {replace : true})
// //     }
    
// //     return(
// //         <div class="container">
// //             <div class="row">
// //                 <div class="col-md-5 col-sm-12 bg-dark text-white img_cont" style={{height: '500px'}}>
                
// //                     <h5 class="py-2">Product Image</h5>
// //                     <img src={imgSrc} alt="" id="img" class="w-100 pb-3" />
                        
// //                 </div>
// //                 <div class="col-md-7 col-sm-12 position-relative" style={{height: '500px', backgroundColor: 'rgba(59, 216, 80, 0.79)'}}>
                
// //                     <h1 id="product_name">{productName}</h1>
// //                     <h3 class="d-flex" className="product_price_parent"><span id="product_price">₹{productPrice}</span><del id="product_org_price">{productDisType == -1 ? '' : ('₹'+productOrgPrice)}</del><span style={{color: 'green'}}><span id="product_discount">{productDisType == "%" ? (productDiscount + "%"): (productDisType == "flat" ? ("₹" + productDiscount) : "")}</span></span> </h3>
// //                     <p id="product_des">{productDes}</p>
// //                     <div class="max-min"><button onClick={minus}>-</button><input type="text" name="" id="max_min" value="1" readonly /><button onClick={pluse}>+</button></div>
                
// //                     <Link to="/addToCart" class="addToCart" onClick={addToCart}>Add To Cart</Link>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Product;
// }


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

  useEffect(() => {
    fixedData.productOrginalPrice = parseInt(localStorage.getItem('productOrginalPrice'));
  fixedData.productDiscount = parseInt(localStorage.getItem('productDiscount'));
  fixedData.productFinalPrice = (parseInt(localStorage.getItem('productFinalPrice')));
  }, [fixedData])
  useEffect(() => {
  setProductName(localStorage.getItem('productName'));
  setProductDiscription(localStorage.getItem('productDiscription'));
  setProductImgSrc(localStorage.getItem('productImgSrc'));
  setProductOrginalPrice(parseInt(localStorage.getItem('productOrginalPrice')));
  setProductDiscountType(localStorage.getItem('productDiscountType'));
  setProductDiscount(parseInt(localStorage.getItem('productDiscount')));
  
  setProductFinalPrice(parseInt(localStorage.getItem('productFinalPrice')));
  setProductQuantityLimit(parseInt(localStorage.getItem('productQuantityLimit')));
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
      nav(`/addToCart`, { replace: true })
    }

    return(
        <div class="container">
        <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/products">Products</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to={`/pre-view-product?id=${id}`}>PreViewProduct</Link></Breadcrumb.Item>
        </Breadcrumb>
            <div class="row">
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