
import styles from './everydayvalue.module.css';

function EverydayValue({ Tags, sectionContentEveryday }) {
    return (
        <>
            <div className={`container my-4 sticky-top ${styles.stickyTop}`}>
                <div className="row">
                    {
                        Tags.map((Tag) => {
                            return (
                                <div className="col-md-2 ps-0 ">
                                    <button className={`text-white border-0 px-2 py-1 rounded-3 fw-bold w-100 ${styles.bgRed}`} >{Tag.title}</button>
                                </div>

                            );
                        })
                    }

                    

                </div>
            </div>
          
           {
            sectionContentEveryday.map((sectionContentEveryday)=>{
                return (
                    <div className={`container text-white ps-4 mb-5`}>
                    <div className={styles.sectionHeading}>
                        <h1 className={`fs-3 fw-bold ${styles.jss97}`}>{sectionContentEveryday.title}</h1>
                    </div>
                    
                    <div>{sectionContentEveryday.content}</div>
        
                    
                </div>
                )
            })
           }
           
            
        </>
    );
}


export default EverydayValue;