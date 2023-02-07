

import Slider from "../Slider/Slider";
import Section from "../section/Section";
import { sectionContent } from "../data/data";



function Main() {
    return (
        <div>
            
            <Slider />
            {
                sectionContent.map((sectionContent) => {
                    return (
                        <Section sectionContent={sectionContent} />
                    )
                })
            }
            


        </div>
    );
}

export default Main;
