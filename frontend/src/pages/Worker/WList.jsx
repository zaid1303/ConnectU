import { DashboardWorker } from "../../components/Dashboard-worker"
import { Clientlistcard } from "../../components/clientlistcard";
import { Workerlistcard } from "../../components/Workerlistcard";
import { workerList } from "../../hooks"

export const WList = () => {
    const {loding, list} = workerList();
    if (loding) {
        return <div>
            <DashboardWorker />
        </div>
    }
    else {
        return <div>
            <DashboardWorker />
            <div className="flex justify-center">
                <div className="max-w-3xl">
                        {/* {console.log(list)} */}
                    {list.map(l => <Workerlistcard
                        id={l._id}
                        name={l.name}
                        profession={l.profession}
                        charge_by_day={l.charge_by_day}
                        charge_by_hours={l.charge_by_hours}
                        rating={l.rating}
                    />)}
                </div>
            </div>
        </div>
    }
}
