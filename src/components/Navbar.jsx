import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <section className="row">
        <div className="col-md-12">
          <div className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to="/" className="navbar-brand text-warning">GLAMOUR JEWELLERIES</Link>
            <button className="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
              <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="#navbar collapse"> 
              <div className="navbar-nav ">
                <Link to="/" className="nav-link text-warning">Home</Link>
                <Link to="/addproduct" className="nav-link text-warning">additons</Link>
                
              </div>

              <div className="navbar-nav ms-auto">
                <Link to="/signin" className="nav-link text-warning">Sign IN</Link>
                <Link to="/signup" className="nav-link text-warning">Sign UP</Link>
              </div>
             </div>
            
          </div>
        </div>
       </section>
      );
}
 
export default Navbar;