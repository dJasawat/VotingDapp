import { createBrowserRouter } from "react-router-dom";
import GetVoterList from "../Pages/Voters/GetVoterList";
import GetCandidateList from "../Pages/Candidates/GetCandidatesList";
import RegisterCandidate from "../Pages/Candidates/RegisterCandidate";
import RegisterVoter from "../Pages/Voters/RegisterVoter"
import ElectionCommision from "../Pages/ElectionCommission/ElectionCommission";
import Wallet from "../Components/Wallet/Wallet";
import Navigation from "../Components/Navigation/Navigation";

export const routes = createBrowserRouter(
    [
    {path:'/', element:(
    <div>
        <Navigation></Navigation>
        <Wallet></Wallet>
    </div>)},
    {path:'register-voter',element:(<div>
        <Navigation></Navigation>
        <RegisterVoter></RegisterVoter>
    </div>)},
    {path:'register-candidate',element:
    (<div>
        <Navigation></Navigation>
        <RegisterCandidate></RegisterCandidate>
        </div>)
        },
    {path:'voter-list',element:(<div>
        <Navigation></Navigation>
        <GetVoterList></GetVoterList>
        </div>)
        },
    {path:'candidate-list',element: (<div>
        <Navigation></Navigation>
        <GetCandidateList></GetCandidateList>
        </div>)
        },
    {path:'election-commision',element:(<div>
        <Navigation></Navigation>
        <ElectionCommision></ElectionCommision>
        </div>)
        },

])