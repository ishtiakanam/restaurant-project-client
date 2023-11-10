import RecomendCard from "../../Components/RecomendCard";
import SectionTitle from "../Shared/SectionTitle";


const Recommend = () => {
    return (
        <div>
            <SectionTitle
                subHeading="---Should Try---"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>
            <RecomendCard />
        </div>
    );
};

export default Recommend;