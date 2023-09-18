import { Students } from "./Components/data";
import { GetImageUrl } from "./utils";
import Profile from "./Components/Profile";

 export default function Home(){

    return(
        <div>
            <div className="students">
                <h1>Students Details</h1>
                {Students.map(stud=> 
                    <div key={stud.sId}>
                        <h1>{stud.sName}</h1>
                        <img src={GetImageUrl(stud)} alt={stud.sName}/>
                        <p>{stud.sProfession}</p>
                        <ul>
                            {stud.sNobels.map(nob=>
                            
                                <li key={nob}>{nob}</li>
                            )}
                        </ul>
                    </div>)} 
                </div>

                <div className="pureFunctions">
                    <Profile 
                        person={{
                            imageId:'lrWQx8l',
                            name: "Sejal"
                        }}
                    />

                    <Profile 
                        person={{
                            imageId:'MK3eW3Al',
                            name: "Bhenta Ram"
                        }}
                    />
                </div>

            </div>
    );
 };