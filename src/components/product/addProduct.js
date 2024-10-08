// import { useState } from "react";


// function AddProduct()
// {

//     const [imgSrc, setImgSrc] = useState();
//     const [productName, setProductName] = useState();
//     const [productPrice, setProductPrice] = useState();
//     const [productOrgPrice, setProductOrgPrice] = useState();
//     const [productDiscount, setProductDiscount] = useState();
//     const [productDisType, setProductDisType] = useState('-1');
//     const [productDes, setProductDes] = useState();
//     const [productMaxQua, setProductMaxQua] = useState();

//     const inputHandle = (e) => {
//         var id = e.target.id;
//         var value = e.target.value;

//         if(id == "product_name") {
//             setProductName(value)
//         }
//         else if(id == "product_desc") {
//             setProductDes(value)
//         }
//         else if(id == "product_org_price") {
//             setProductOrgPrice(value)
//             productOrgPriceFun();
//         }
//         else if(id == "product_dis") {
//             setProductDiscount(value)
//             disPriceCount();
//         }
//         else if(id == "product_max_quantity") {
//             setProductMaxQua(value)
//         }
//         else if(id == "product_img") {
//             productImg(e.target.files[0]);
//         }
//     }
//     const disPriceCount = () =>
//         {
//             localStorage.setItem('discountType', productDisType);
//             localStorage.setItem('productOrgPrice', productOrgPrice);
//             localStorage.setItem('productDis', productDiscount);
//             localStorage.setItem('productPrice', productPrice);
        
        
//             // discount_type.style = 'border-color: none;';
//             // setProductPrice('');
        
//             if(productDisType == '%')
//             {
//                 setProductPrice(Math.round(parseInt(productOrgPrice) - (parseInt(productOrgPrice) * (parseInt(productDiscount)/100))));
//             }
//             else if(productDisType == 'flat')
//             {
//                 setProductPrice(Math.round(parseInt(productOrgPrice) - parseInt(productDiscount)));
//             }
//             else
//             {
//                 // discount_type.style = 'border-color: red;';
//             }
//         }
        
        
//         const disTypeSelect = (e) =>
//         {
//             var value = e.target.value;
//             setProductDisType(value)
//             // const discount_type = document.getElementById('discount_type');
//             // const product_org_price = document.getElementById('product_org_price');
//             // const product_dis = document.getElementById('product_dis');
//             // const product_price = document.getElementById('product_price');
//             // const product_name = document.getElementById('product_name');
//             // const product_desc = document.getElementById('product_desc');
//             // const product_max_quantity = document.getElementById('product_max_quantity');
        
//             localStorage.setItem('discountType', productDisType);
//             localStorage.setItem('productOrgPrice', productOrgPrice);
//             localStorage.setItem('productDis', productDiscount);
//             localStorage.setItem('productPrice', productPrice);
        
//             // discount_type.style = 'border-color: none;';
        
//             if(value == '%')
//             {
//                 if(productDiscount)
//                 {
//                     setProductPrice(Math.round(parseInt(productOrgPrice) - (parseInt(productOrgPrice) * (parseInt(productDiscount)/100))));
//                 }
//                 else
//                 {
//                     setProductPrice(Math.round(productOrgPrice));
        
//                 }
//             }
//             else if(value == 'flat')
//             {
//                 if(productDiscount)
//                 {
//                     setProductPrice(Math.round(parseInt(productOrgPrice) - parseInt(productDiscount)));
//                 }
//                 else
//                 {
//                     setProductPrice(Math.round(productOrgPrice));
//                 }
//             }
//             else
//             {
//                 // discount_type.style = 'border-color: red;';
//                 setProductPrice(Math.round(parseInt(productOrgPrice)));
//             }
//         }
        
//         const productOrgPriceFun = () =>
//         {
        
//             var discount_type = document.getElementById('discount_type');
//             var product_org_price = document.getElementById('product_org_price');
//             var product_dis = document.getElementById('product_dis');
//             var product_price = document.getElementById('product_price');
        
        
//             localStorage.setItem('discountType', productDisType);
//             localStorage.setItem('productPrice', productPrice);
        
//             if(productDisType == '%')
//             {
//                 if(productDiscount)
//                 {
//                     setProductPrice(Math.round(parseInt(productOrgPrice) - (parseInt(productOrgPrice) * (parseInt(productDiscount)/100))));
//                 }
//                 else
//                 {
//                     setProductPrice(Math.round(productOrgPrice));
//                 }
//             }
//             else if(productDisType == 'flat')
//             {
//                 if(productDiscount)
//                 {
//                     setProductPrice(Math.round(parseInt(productOrgPrice) - parseInt(productDiscount)));
//                 }
//                 else
//                 {
//                     setProductPrice(Math.round(productOrgPrice));
//                 }
//             }
//             else
//             {
//                 discount_type.style = 'border-color: red;';
//                 setProductPrice(parseInt(productOrgPrice));
//             }
//         }
        
//         const productImg = (data) =>
//         {
//             console.log('event --- ',data);
//             var reader = new FileReader();
        
//             console.log(reader.result);
//             reader.onload = function(){
//                 // var output = document.getElementById('productimg');
//                 setImgSrc(reader.result);
        
//                 localStorage.setItem('productImgSrc', reader.result);
        
//             };
//             reader.readAsDataURL(data);
//         }
        
        
//         const addProduct = () =>
//         {
        
//             const discount_type = document.getElementById('discount_type');
//             const product_org_price = document.getElementById('product_org_price');
//             const product_dis = document.getElementById('product_dis');
//             const product_price = document.getElementById('product_price');
//             const product_name = document.getElementById('product_name');
//             const product_desc = document.getElementById('product_desc');
//             const product_max_quantity = document.getElementById('product_max_quantity');
        
        
//             localStorage.setItem('productName', productName);
//             localStorage.setItem('productDesc', productDes);
//             localStorage.setItem('productMaxQuantity', productMaxQua);
//             localStorage.setItem('productPrice', productPrice);
//             localStorage.setItem('discountType', productDisType);
//             localStorage.setItem('productOrgPrice', productOrgPrice);
//             localStorage.setItem('productDis', productDiscount);
        
//             if(productDisType == '-1')
//             {
//             localStorage.setItem('productDis', '');
//             localStorage.setItem('discountType', '');
//             }
//         }
//     return(
//         <form class="form" action="./shopping.js" style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
//         <table>
//             <tr><td colspan="2"><h1 className="text-center">ADD PRODUCT</h1></td></tr>
//             <tr>
//                 <td><label for="product777_name">Product Name</label></td>
//                 <td><input type="text" value={productName} onInput={inputHandle} name="product_name" id="product_name" required /></td>
//             </tr>
//             <tr>
//                 <td><label for="product_desc">Product Description</label></td>
//                 <td><textarea name="product_desc" value={productDes} onInput={inputHandle} id="product_desc" cols="30" rows="10" maxlength="300" required></textarea></td>
//             </tr>
//             <tr>
//                 <td rowspan="2"><label for="product_img">Product Image</label></td>
//                 <td><input type="file" name="product_img" id="product_img" /*onChange={productImg}*/ onInput={inputHandle} required /></td>
//             </tr>
//             <tr>
//                 <td><img src={imgSrc}  alt="" id="productimg" style={{maxWidth: '250px'}} /></td>
//             </tr>
//             <tr>
//                 <td><label for="product_org_price">Product Orginal Price</label></td>
//                 <td><input type="text" name="product_org_price" id="product_org_price" /*onInput={productOrgPriceFun}*/ onInput={inputHandle} required /></td>
//             </tr>
//             <tr>
//                 <td><label for="product_dis_type">Product Discount Type</label></td>
//                 <td>
//                     <select name="product_dis_type" id="discount_type" value={productDisType} onClick={disTypeSelect}>
//                         <option value="-1"> - - select discount type - -</option>
//                         <option value="%">Percentage %</option>
//                         <option value="flat">Flat</option>
//                     </select>
//                 </td>
//             </tr>
//             <tr>
//                 <td><label for="product_dis">Product Discount Price</label></td>
//                 <td><input type="number" name="product_dis" id="product_dis" /*onInput={disPriceCount}*/ onInput={inputHandle} required {...productDisType == "-1" ? 'disabled' : 'a'} /></td>
//             </tr>
//             <tr>
//                 <td><label for="product_price">Product Price</label></td>
//                 <td><input type="number" name="product_price" id="product_price" readonly /></td>
//             </tr>
//             <tr>
//                 <td><label for="product_max_quantity">Product Max Quantity</label></td>
//                 <td><input type="number" name="product_max_quantity" id="product_max_quantity" onInput={inputHandle} required /></td>
//             </tr>
//             <tr>
//                 <td colspan="2" class=""><button className="m-auto" style={{padding: "10px 20px"}} onClick={addProduct}>Add Product</button></td>
//             </tr>
//         </table>
//     </form>
//     );
// }

// export default AddProduct;



import { useState } from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function AddProduct() {

      const nav = useNavigate();
  
  const [productName, setProductName] = useState('');
  const [productDiscription, setProductDiscription] = useState('');
  const [productImgSrc, setProductImgSrc] = useState();
  const [productOrginalPrice, setProductOrginalPrice] = useState('');
  const [productDiscountType, setProductDiscountType] = useState('-1');
  const [productDiscount, setProductDiscount] = useState(0);
  const [productFinalPrice, setProductFinalPrice] = useState('');
  const [productQuantityLimit, setProductQuantityLimit] = useState('');
  const [productType, setProductType] = useState('');
  
  const [productDiscountManditary, setProductDiscountManditary] = useState(false);
const [data, setData] = useState();


  const numberRegex = /^\d*$/;

  const productOrgPrice = (data) =>
    {
      if(productDiscount != 0)
      {
      if(productDiscountType == '%')
      {
        setProductDiscountManditary(true)
          if(productDiscount)
          {
              var d = parseInt(productOrginalPrice) - (parseInt(productOrginalPrice) * (parseInt(productDiscount.value)/100));
              console.log('%', d);
              setProductFinalPrice(Math.round(d));
          }
      }
      else if(productDiscountType == 'flat')
      {
        setProductDiscountManditary(true)
  
          if(productDiscount)
          {
              var d = parseInt(productOrginalPrice) - parseInt(productDiscount);
              console.log('Flat', d);
              setProductFinalPrice(Math.round(d));
          }
      }
    }
    else
    {
      setProductFinalPrice(data);
    }
    }
    const disTypeSelect = (data) =>
    {
      if(data == '%')
      {
          setProductDiscountManditary(true)
          if(productDiscount)
          {
              var d = parseInt(productOrginalPrice) - (parseInt(productOrginalPrice) * (parseInt(productDiscount)/100));
              console.log('%', d);
              setProductFinalPrice(Math.round(d));
          }
          else
          {
              var d = productOrginalPrice;
  
          if(d > 0)
          {
            setProductFinalPrice(Math.round(d));
          }
          else
          {
            setProductFinalPrice('');
          }
          }
      }
      else if(data == 'flat')
      {
          if(productDiscount)
          {
              var d = parseInt(productOrginalPrice) - parseInt(productDiscount);
              console.log('Flat', d);
              setProductFinalPrice(Math.round(d));
          }
          else
          {
              var d = productOrginalPrice;
  
          if(d != '')
          {
            setProductFinalPrice(Math.round(d));
          }
          else
          {
            setProductFinalPrice('');
          }
          }
      }
      else if(data == '-1')
      {
        setProductDiscountManditary(false)
          var d = parseInt(productOrginalPrice);
          setProductDiscount(0)
  
          if(d > 0)
          {
            setProductFinalPrice(Math.round(d));
          }
          else
          {
            setProductFinalPrice('');
          }
      }
    }
    const disPriceCount = (data) =>
    {
      // setProductFinalPrice('');  
      if(data.length > 0)
      {
        if(productDiscountType == '%')
        {
            var d = parseInt(productOrginalPrice) - (parseInt(productOrginalPrice) * (parseInt(data)/100));
            if(d > 0)
            {
              setProductFinalPrice(Math.round(d));                  
            }
            else
            {
              // setProductFinalPrice('');
            }
        }
        else if(productDiscountType == 'flat')
        {
            var d = parseInt(productOrginalPrice) - parseInt(data);
            if(d > 0)
            {
              setProductFinalPrice(Math.round(d));                  
            }
            else
            {
              setProductFinalPrice('');
            }
        }
        
      }
      else
      {
        setProductFinalPrice(productOrginalPrice)
      }
    }
  const inp = (event) =>
  {
    var value = event.target.value;
    var id = event.target.id;
    if(id == 'product_Name')
    {
      setProductName(value);
    }
    else if(id == 'product_Discription')
    {
      setProductDiscription(value);
    }
    else if(id == 'product_Orginal_Price')
    {
        // if(numberRegex.test(value))
        setProductOrginalPrice(parseInt(value));
        productOrgPrice(value);
    }
    else if(id == 'product_Discount_Type')
    {
        setProductDiscountType(value);
        disTypeSelect(value);
    }
    else if(id == 'product_Discount')
    {
      console.log('dis')
      if(numberRegex.test(value))
      {
        setProductDiscount(value);
        disPriceCount(value);
      }
    }
    else if(id == 'product_Final_Price')
    {
      setProductFinalPrice(value);
    }
    else if(id == 'product_Quantity_Limit')
    {
      // if(numberRegex.test(value))
      // {
        setProductQuantityLimit(value);
      // }
    }
    else if(id == 'product_Type')
    {
      setProductType(value);
    }
    else if(id == 'product_Img')
    {
        var fileReader = new FileReader();
        fileReader.onload = function(){
        setProductImgSrc(fileReader.result);
    };
    fileReader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0]);
    }
  }
  const addProduct = () =>
  {
    localStorage.setItem('productName', productName);
    localStorage.setItem('productDiscription', productDiscription);
    localStorage.setItem('productQuantityLimit', productQuantityLimit);
    localStorage.setItem('productFinalPrice', productFinalPrice);
    localStorage.setItem('productDiscountType', productDiscountType);
    localStorage.setItem('productOrginalPrice', productOrginalPrice);
    localStorage.setItem('productDiscount', productDiscount);
    localStorage.setItem('productImgSrc', productImgSrc);
    
  var data = localStorage.getItem('data');
  var productData = data ? JSON.parse(data): [];
  
  const temp_data = {
      id : data.length,
      productName: productName,
      productDiscription: productDiscription,
      productQuantityLimit: productQuantityLimit,
      productFinalPrice: productFinalPrice,
      productDiscountType: productDiscountType,
      productOrginalPrice: productOrginalPrice,
      productDiscount: productDiscount,
      productImgSrc: productImgSrc,
    }
  productData.push(temp_data)
  localStorage.setItem('data', JSON.stringify(productData));
  nav("/", {replace: true})                                                                                                                                                                                     
}
  
  return (
    <div className="container">

    <pre>{data != undefined ? data.product1.productDescription : ''}</pre>
    <Form className="d-grid" onSubmit={addProduct} style={{gridTemplateColumns : 'auto auto'}} method="post">
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label>Product Name <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="text" required placeholder="Product Name" id="product_Name" onInput={inp} value={productName}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label>Product Discription <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="text" required placeholder="Product Discription" id="product_Discription" onInput={inp} value={productDiscription}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label>Product Orginal Price <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="number" required placeholder="Product Orginal Price" id="product_Orginal_Price" onInput={inp} value={productOrginalPrice}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label className="w-100">Product Discount Type <span className="text-danger">*</span></Form.Label>
        <select type="text" className="w-100 text-center" style={{height : '37.3px'}} id="product_Discount_Type" onInput={inp} value={productDiscountType}>
          <option value='-1'>No Discount</option>
          <option value='%'>Percentage %</option>
          <option value='flat'>Flat</option>
        </select>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label>Product Discount {productDiscountManditary?<span className="text-danger">*</span>:''}</Form.Label>
        <Form.Control  type="number" required placeholder="Product Discount" id="product_Discount" onInput={inp} {...(productDiscountManditary?{}:{disabled:true})} value={productDiscount}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label>Product Final Price <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="number" required placeholder="Product Final Price" id="product_Final_Price" onInput={inp} readOnly value={productFinalPrice}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label>Product Quantity Limit <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="number" required placeholder="Product Quantity Limit" id="product_Quantity_Limit" onInput={inp} value={productQuantityLimit}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label>Product Type <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="text" required placeholder="What Type of Product" id="product_Type" onInput={inp} value={productType}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label for="file">Product Image <span className="text-danger">*</span></Form.Label>
        <Form.Control  name="file" required type="file" placeholder="product Image" id="product_Img" onInput={inp} />
      </Form.Group>
      
      <div className="d-inline-block px-1 m-auto pb-2">
        <img src={productImgSrc} title="Photo" alt="Photo" id="productImg" style={{height:"160px"}}/>
      </div>

      <Button variant="primary" className="w-100" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default AddProduct;