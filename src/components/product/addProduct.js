import { createBrowserHistory } from "history";
import { useState } from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function AddProduct() {

      const nav = useNavigate();
      const his = createBrowserHistory();
  
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
    if(parseInt(productDiscount) > 0)
    {
      if(productDiscountType == '%')
      {
        if(productDiscount < 100){

          setProductDiscountManditary(true)
              var d = (parseInt(data) * (parseInt(productDiscount)/100));
        setProductFinalPrice(Math.round(d))
        } else {
          setProductDiscount(99);
          var d = (parseInt(data) * (99/100));
        setProductFinalPrice(Math.round(d))
      }
      }
      else if(productDiscountType == 'flat')
      {
        setProductDiscountManditary(true)
              var d = parseInt(data) - parseInt(productDiscount);
              console.log('Flat', d);
              setProductFinalPrice(Math.round(d));
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
        var value = productDiscount;
          setProductDiscountManditary(true)
          if(productDiscount > 99) {
            setProductDiscount(99)
            value = 99;
          }
          if(productDiscount)
          {
              var d = parseInt(productOrginalPrice) - (parseInt(productOrginalPrice) * (parseInt(value)/100));
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
      // if(data.length > 0)
      // {
        if(productDiscountType == '%')
        {
            var d = parseInt(productOrginalPrice) - (parseInt(productOrginalPrice) * (parseInt(data)/100));
            if(d > 0)
            {
              setProductFinalPrice(Math.round(d));                  
            }
            else
            {
              setProductFinalPrice('');
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
        
      // }
      // else
      // {
        // setProductFinalPrice(productOrginalPrice)
      // }
    }
    const discountControl = (value) => {
      setProductDiscount(value.toString());
        disPriceCount(value);
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
      value = parseInt(value, 10)
        // if(numberRegex.test(value))
        setProductOrginalPrice(value.toString());
        productOrgPrice(value);
    }
    else if(id == 'product_Discount_Type')
    {
        setProductDiscountType(value);
        disTypeSelect(value);
        if(value == '-1') {
          setProductDiscountManditary(false)
        } else {
          setProductDiscountManditary(true)
        }
    }
    else if(id == 'product_Discount')
    {
      console.log('dis')
      if(numberRegex.test(value))
      {
        value = parseInt(value, 10)
        if(productDiscountType == "%") {
          if(parseInt(value) > 99) {
            discountControl(99);
          } else {
            discountControl(value);
          }
        } 
        else if(productDiscountType == "flat") {
          discountControl(value);
        }
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
  const addProduct = (event) =>
  {
    event.preventDefault()
    var data = localStorage.getItem('data');
    var productData = data ? JSON.parse(data): [];
    const { v4: uuidv4 } = require('uuid');
  const temp_data = {
      id : uuidv4(),
      productName: productName.toUpperCase(),
      productDiscription: productDiscription,
      productQuantityLimit: productQuantityLimit,
      productFinalPrice: productFinalPrice,
      productDiscountType: productDiscountType,
      productOrginalPrice: productOrginalPrice,
      productDiscount: productDiscount,
      productImgSrc: productImgSrc,
    }
    productData.push(temp_data)
try {
      localStorage.setItem('data', JSON.stringify(productData));
      swal('Success', 'Product Added Successfully', 'success');
      nav("/", {replace: true})
    }
    catch(e) {
      swal('Sorry !', 'try again later', 'warning');    
    }
}
  
  return (
    <div className="container add-product">
    <Breadcrumb className='mt-3'>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="">Add Product</Link></Breadcrumb.Item>
    </Breadcrumb>
    <Form className="d-grid mt-5" onSubmit={addProduct} style={{gridTemplateColumns : 'auto auto'}} method="post">
      <Form.Group className="mb-3 px-1" controlId="">
        <Form.Label>Product Name <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="text" required placeholder="Product Name" id="product_Name" onChange={inp} value={productName}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="c1">
        <Form.Label>Product Discription <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="text" required placeholder="Product Discription" id="product_Discription" onChange={inp} value={productDiscription}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="c2">
        <Form.Label>Product Orginal Price <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="number" required placeholder="Product Orginal Price" id="product_Orginal_Price" min={1} onChange={inp} value={productOrginalPrice}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="c3">
        <Form.Label className="w-100">Product Discount Type <span className="text-danger">*</span></Form.Label>
        <select type="text" className="w-100 text-center" style={{height : '37.3px'}} id="product_Discount_Type" onChange={inp} value={productDiscountType}>
          <option value='-1'>No Discount</option>
          <option value='%'>Percentage %</option>
          <option value='flat'>Flat</option>
        </select>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="c4">
        <Form.Label>Product Discount {productDiscountManditary?<span className="text-danger">*</span>:''}</Form.Label>
        <Form.Control  type="number" required placeholder="Product Discount" id="product_Discount" onChange={inp} min={1} {...(productDiscountManditary?{}:{disabled:true})} {...(productDiscountType == "%" ? {max:99} : "")} value={productDiscount}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="c5">
        <Form.Label>Product Final Price <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="number" required placeholder="Product Final Price" id="product_Final_Price" onChange={inp} readOnly value={productFinalPrice}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="c6">
        <Form.Label>Product Quantity Limit <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="number" required placeholder="Product Quantity Limit" id="product_Quantity_Limit" onChange={inp} value={productQuantityLimit}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="c7">
        <Form.Label>Product Type <span className="text-danger">*</span></Form.Label>
        <Form.Control  type="text" required placeholder="What Type of Product" id="product_Type" onChange={inp} value={productType}/>
      </Form.Group>
      <Form.Group className="mb-3 px-1" controlId="c8">
        <Form.Label for="file">Product Image ( res : 300 * 300)<span className="text-danger">*</span></Form.Label>
        <Form.Control  name="file" required type="file" accept="image/*" placeholder="product Image" id="product_Img" onChange={inp} />
      </Form.Group>
      
      <div className="d-inline-block px-1 m-auto pb-2a">
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