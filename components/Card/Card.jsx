import styles from './Card.module.css'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useEffect } from 'react';
import { products } from '../../redux/middleware/thunk';




function Card({ cardContent }) {
 
    const dispatch = useDispatch()


    const handleCart = ()=>{
        dispatch({type : 'ADD'})
    }


    useEffect(()=>{
      dispatch(products());
    },[])

    

    return (
        <div className="row justify-content-between">
            {
                cardContent.map((cardContent) => {
                    return (
                        <div className={`col-md-4 col-sm-6 col-lg-3 px-3 mb-3  ${styles.bgCard}`}>
                            <div className="card border-0 m-0" style={{backgroundColor: '#1C1816', paddingTop: '30px' }}>
                                <img src={cardContent.img} className="card-img-top" alt="..." />
                                <div className="card-body py-3 ps-1">
                                    <h5 className="card-title fw-bold ">{cardContent.title}</h5>
                                    <p className="card-text" style={{ color: '#D4D4D4', height : '60px', fontSize : '14px' }}>{cardContent.description}</p>
                                    <span className={`d-flex justify-content-between align-items-center pt-2`}>
                                        <h4 className='fw-bold m-0'>Rs {cardContent.price} </h4>
                                        <button className={`text-white border-0 px-3 py-1 rounded-3 ${styles.bgRed}`} onClick={handleCart} >Add to Bucket</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    );
}

export default Card;