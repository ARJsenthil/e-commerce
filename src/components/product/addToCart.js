import '../style/product/addToCart.css';
import { useEffect } from "react";


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
    var data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
    fixedData.productName = data[0].productName;
    fixedData.productDiscription = data[0].productDiscription;
    fixedData.productImgSrc = data[0].productImgSrc;
    fixedData.productOrginalPrice = parseInt(data[0].productOrginalPrice);
    fixedData.productDiscountType = data[0].productDiscountType;
    fixedData.productDiscount = parseInt(data[0].productDiscount);
      
    fixedData.productFinalPrice = parseInt(data[0].productFinalPrice);
    fixedData.productQuantityLimit = parseInt(data[0].productQuantityLimit);
    fixedData.productType = data[0].productType;
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