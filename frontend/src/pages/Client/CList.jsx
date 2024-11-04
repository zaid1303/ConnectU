import { DashboardClient } from "../../components/Dashboard-client"
import { Clientlistcard } from "../../components/clientlistcard";
import { clientList } from "../../hooks"

export const CList = () => {
    const { loding, list} = clientList();
    if (loding) {
        return <div>
            <DashboardClient />
        </div>
    }
    else {
        return <div>
            <DashboardClient />
            <div className="flex justify-center">
                <div className="max-w-3xl">
                    {list.map(l => <Clientlistcard
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
