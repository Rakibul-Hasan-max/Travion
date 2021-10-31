import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://mighty-hamlet-29284.herokuapp.com/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])



    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h2>This is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;



// import React from 'react';
// import { useForm } from 'react-hook-form';
// import useAuth from '../../hooks/useAuth';
// import './Shipping.css'

// const Shipping = () => {

//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const {user} = useAuth();
//     const onSubmit = data => {console.log(data)};

//     return (
//         <div>
//             <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
//                 <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
//                 <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
//                 {errors.email && <span className="error">This field is required</span>}
//                 <input placeholder="Phone number" defaultValue="" {...register("phone")} />
//                 <input placeholder="Address" defaultValue="" {...register("address")} />
//                 <input placeholder="Zip code" defaultValue="" {...register("zip code")} />
//                 <input className="submit" type="submit" />
//             </form>
//         </div>
//     );
// };

// export default Shipping;