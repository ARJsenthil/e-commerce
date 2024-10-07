import { Breadcrumb } from 'react-bootstrap';
import '../style/product/addToCart.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';


function AddToCart()
{

  
  const fixedData = {
    productName: '',
    productDiscription: '',
    productImgSrc: '',
    productOrginalPrice: '',
    productDiscountType: '',
    productDiscount: '',
    productFinalPrice: '',
    productQuantityLimit: '',
    productType: '',
    quantity: '',
  }
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  // useEffect(() => {
    var productList = JSON.parse(localStorage.getItem('data'));
    var data = {};
    productList.forEach(element => {
      if(parseInt(element.id) === parseInt(id)) {
        data = element;
      }
      });
    console.log(data);
    fixedData.productName = data.productName;
    fixedData.productDiscription = data.productDiscription;
    fixedData.productImgSrc = data.productImgSrc;
    fixedData.productOrginalPrice = parseInt(data.productOrginalPrice);
    fixedData.productDiscountType = data.productDiscountType;
    fixedData.productDiscount = parseInt(data.productDiscount);
      
    fixedData.productFinalPrice = parseInt(data.productFinalPrice);
    fixedData.productQuantityLimit = parseInt(data.productQuantityLimit);
    fixedData.productType = data.productType;
    fixedData.quantity = localStorage.getItem('Quantity');
  // cl();
  // }, [fixedData])
  const cl = () => {
    // var discount = fixedData.productDiscount;
    // var discountType = fixedData.productDiscountType;
    // var quantity = fixedData.quantity;
    // var finalPrice = fixedData.productFinalPrice;
    // var orginalPrice = fixedData.productOrginalPrice;
    // if(discountType == '%')
    // {
    //   fixedData.productDiscount = discount;
    //   fixedData.productDiscountType = disType;
    //   fixedData.productOrginalPrice = quantity * orginalPrice;
    //   fixedData.productOrginalPrice = quantity * orginalPrice;
    // }
    // else if(discountType == 'flat')
    // {
    //   fixedData.productDiscount = discount * quantity;
    //   fixedData.productDiscountType = 'off';
    //   fixedData.productOrginalPrice = quantity * orginalPrice;
    //   fixedData.productOrginalPrice = quantity * orginalPrice;
    // }

    // var c = orginalPrice - price;
    // var pro_dis = document.getElementById('pro_dis');
    
    // if(finalPrice > 499)
    // {
    // del_cost.innerHTML = quantity * 40;
    
    // if(disType != '')
    // {
    //   product_price1.innerHTML = quantity * price;
    //   orginalPr = quantity * orginalPrice;
    //   discount = '-₹' + quantity * c;
    // }
    // else
    // {
    //   product_price1.innerHTML = quantity * price;
    //   fixedData.productOrginalPrice = quantity * price;
    //   pro_dis.innerHTML = 'No Discount';
    //   pro_dis.style = 'color: inherit;'
    // }
    // }
    // else
    // {
    // del_cost.innerHTML = quantity * 40;
    // free.style = 'display: none;';

    // if(disType != '')
    // {
    //   product_price1.innerHTML = (( quantity * price ) + ( quantity * 40 ));
    //   fixedData.productOrginalPrice = quantity * orginalPrice;
    //   pro_dis.innerHTML = '-₹' + quantity * c;
    // }
    // else
    // {
    //   product_price1.innerHTML = (( quantity * price ) + ( quantity * 40 ));
    //   fixedData.productOrginalPrice = quantity * price;
    //   pro_dis.innerHTML = 'No Discount';
    //   pro_dis.style = 'color: inherit;'
    // }
    // }
    
    }
    return(
        <div class="p-5">
        <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to={`/Shopping?id=${id}`}>Add Products</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="">AddToCart</Link></Breadcrumb.Item>
        </Breadcrumb>
            <div class="row m-auto">
                <img src={fixedData.productImgSrc} alt="" class="col-md-3 col-sm-5" id="img"/>
                <div class="col-md-5 col-sm-7 p-lg-3 p-1" style={{backgroundColor: "rgba(0, 128, 0, 0.445)"}}>

                    <h1 id="product_name">{fixedData.productName}</h1>
                    <p id="product_des">{fixedData.productDiscription}</p>
                    <h3 class="d-flex" className="product_price_parent"><span className="product_price" id="product_price">₹{fixedData.productFinalPrice * fixedData.quantity}</span><del className="product_org_price" id="product_org_price">{fixedData.productDiscountType == -1 ? '' : ('₹'+fixedData.productOrginalPrice  * fixedData.quantity)}</del><span style={{color: 'green'}}><span className="product_discount" id="product_discount">{fixedData.productDiscountType == "%" ? (fixedData.productDiscount + "%"): (fixedData.productDiscountType == "flat" ? ("₹" + fixedData.productDiscount * fixedData.quantity) : "")}</span></span> </h3>
                    {/* <h3 class="d-flex" id="product_price_parent"><span id="product_price"></span><del id="product_org_price"></del><span style={{color: "green"}}><span id="product_discount"></span><span id="product_dis_type"></span></span> </h3> */}
                </div>
                <div class="col-md-4 col-sm-12 d-grid" style={{gap: "10px"}}>
                    <h6 class="pt-3 pb-3">PRICE DETAILS</h6>
                    <p class="row"><span class="col-7">Price Item({fixedData.quantity})</span><span class="col-5" id="product_org_price1">₹{parseInt(fixedData.productOrginalPrice) * fixedData.quantity}</span></p>
                    <p class="row"><span class="col-7">Discount</span><span class="col-5 text-success" id="pro_dis">{fixedData.productDiscountType == '-1' ? "No Discount" : ('- ₹'+((parseInt(fixedData.productOrginalPrice) * fixedData.quantity) - (parseInt(fixedData.productFinalPrice) * fixedData.quantity)))}</span></p>
                    <p class="row"><span class="col-7" >Deleviry Cost</span><span  class="col-5 text-success" id="">{(parseInt(fixedData.productFinalPrice) * parseInt(fixedData.quantity)) > 500 ? <span className='text-success'><del className='text-secondary'>₹ 40</del> Free</span> : '₹ 40'} </span></p>
                    <p class="row"><span class="col-7">Total Cost</span><span class="col-5" id="product_price1">₹{(parseInt(fixedData.productFinalPrice) * parseInt(fixedData.quantity)) > 500 ? (parseInt(fixedData.productFinalPrice) * parseInt(fixedData.quantity)) : (parseInt(fixedData.productFinalPrice) * parseInt(fixedData.quantity) + 40)}</span></p>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;