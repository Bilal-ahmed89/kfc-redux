import styles from './Section.module.css'




function Section({ sectionContent}) {
    return (
        <div className={`container text-white ps-4 mb-5`}>
            <div className={styles.sectionHeading}>
                <h1 className={`fs-3 fw-bold ${styles.jss97}`}>{sectionContent.title}</h1>
            </div>
            
            <div>{sectionContent.content}</div>

            
        </div>
    );
}

export default Section;