import react, { useState, useEffect } from "react";
import Adminnavbar from "../Adminnavbar";
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';

const Vieworderbyadmin = () => {

    const { order_id } = useParams();


    let history = useHistory();




    const [orderlist, setOrderlist] = useState([]);


    //state for approval fields
    const [primary_sale, setPrimary_sale] = useState("");
    const [secondary_sale, setSecondary_sale] = useState("");
    const [unit_price, setUnit_price] = useState();
    const [discount, setDiscount] = useState();
    const [total_price, setTotal_price] = useState();
    const [updated_status, setUpdated_status] = useState("Approved");


    const [autoValue,setAutoValue] = useState(0);




    useEffect(() => {
        console.log(order_id)
        loadUser(order_id);
    }, [])

    const loadUser = (order_id) => {
        const url = "http://localhost:3005/adminhome/vieworderbyadmin/" + order_id;
        console.log(url)
        axios.get(url).
            then((response) => {
                console.log(response.data);
                setOrderlist(response.data);
            })


    }



    //function on submitting form
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(order_id);
        console.log(primary_sale)
        axios.post(`http://localhost:3005/approveorder/${order_id}`, {
            primary_sale: primary_sale,
            secondary_sale: secondary_sale,
            unit_price: unit_price,
            discount: discount,
            total_price: total_price,
            updated_status: updated_status

        }).then(() => {
            console.log("successful send to backend");
        });
        history.push("/adminhome");      //redirect to home page

    }

    // const totalValue = (e) =>{

    //     e.preventDefault();
    //     let uprice = document.querySelector('#unit_price').value;
    //     let quant = document.querySelector('#discount').value;
    //     let dis = document.querySelector('#discount').value;

    //     let tprice = autoValue + (parseInt(quant)*((parseInt(uprice)) * (100-parseInt(dis))/100))
    //     // setAutoValue(tprice);
    //     console.log(tprice);
    // }


    return (
        <>
            <style type="text/css">
                {`.mainnav {display: none}`}
            </style>
            <Adminnavbar />

            
            <div className="container">
                <Link className="btn btn-dark" to="/adminhome">DashBoard</Link>

                <h3 style={{ fontWeight: "bold", marginTop: "25px" }}><b>Customer Order</b></h3>
                <div>
                    <h4 className="display-4">Order Id : {order_id}</h4>
                    <hr />

                    {orderlist.map((val) => (

                        <ul className="list-group w-50 py-4">
                            <li className="list-group-item"><b>Item Name : </b>{val.item_name}</li>
                            <li className="list-group-item"><b>Customer Location : </b>{val.location}</li>
                            <li className="list-group-item" id="quantity"><b>Item Quantity : </b>{val.quantity}</li>
                            <li className="list-group-item"><b>Item Desscription : </b>{val.description}</li>
                            <li className="list-group-item"><b>Order Status : </b>{val.status}</li>


                        </ul>
                    ))}
                </div>

                <hr />
                <h3 style={{ fontWeight: "bold", marginTop: "25px", marginBottom: "25px" }}><b>For Approver</b></h3>
                <div>
                    <form onSubmit={(event) => { onSubmit(event) }}>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="item name">Primary Sales Personnel</label>
                                <select className="form-control" id="exampleFormControlSelect1"
                                    name="primary_sale" value={primary_sale} onChange={(e) => {
                                        setPrimary_sale(e.target.value)
                                    }}>
                                    <option value="" disabled defaultValue>Choose Primary Sales Personnel from the options</option>
                                    <option>Shree Packers</option>
                                    <option>P & G</option>
                                    <option>GP Limited</option>
                                    <option>Indore Industries</option>


                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="item name">Secondary Sales Personnel</label>
                                <select className="form-control" id="exampleFormControlSelect1"
                                    name="secondary_sale" value={secondary_sale} onChange={(e) => {
                                        setSecondary_sale(e.target.value)
                                    }}>
                                    <option value="" disabled defaultValue>Choose Secondary Sales Personnel from the options</option>
                                    <option>Shree Packers</option>
                                    <option>Bombay Sales</option>
                                    <option>Dewas Deliveries</option>
                                    <option>Indore Sales</option>
                                    <option>ABC Sales</option>


                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Unit Price</label>
                                <input type="number" min="100" className="form-control" required id="unit_price" placeholder="enter unit price"
                                    name="unit_price" value={unit_price} onChange={(e) => {
                                        setUnit_price(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Discount %</label>
                                <input type="number" min="0" step="0.01" id="discount" className="form-control" placeholder="enter discount (if any)"
                                    name="discount" value={discount} onChange={(e) => {
                                        setDiscount(e.target.value)
                                    }}
                                />
                            </div>

                        </div>
                        {/* quantity*((unit_price)*(100-discount)/100 */}
                        <div className="form-group">
                            <label>Total Price in ₹</label>
                            <input type="number" min="1" className="form-control" required id="total_price" placeholder="₹ total price"
                                name="total_price" value={total_price} onChange={(e) => {
                                    setTotal_price(e.target.value)
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="item name">Order Status</label>
                            <select className="form-control" id="exampleFormControlSelect1"
                                name="updated_status" value={updated_status} onChange={(e) => {
                                    setUpdated_status(e.target.value)
                                }}>
                                <option value="" disabled defaultValue>Choose Order Status</option>
                                <option>Approved</option>
                                <option>Cancelled</option>
                                <option>Duplicate</option>
                                <option>In Progress</option>


                            </select>
                        </div>

                        <br />
                        <button className="btn btn-dark btn-block">Approve Order</button>

                    </form>

                </div>
            </div>

        </>
    )
}


export default Vieworderbyadmin;