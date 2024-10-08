import { Link } from "react-router-dom";


function MenuBar()
{
  
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <Link class="navbar-brand" to={"/"}>Shopping</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <span class="nav-item ml-auto">
            <Link className='text-white d-flex align-items-center' to={"/AddProduct"}><i className='bi bi-plus-circle-dotted mr-1'></i><span>Add Product</span></Link>
            </span>
        </div>
      </nav>
    );
}

export default MenuBar;