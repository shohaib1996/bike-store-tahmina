import { Bike } from "@/types/bike"
import Image from "next/image"


const AllBikes = async () => {
    const res = await fetch('https://bike-store-backend-steel.vercel.app/displayProduct')
    const data = await res.json()
    const bikes = data.data
    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-4xl">All Bikes</h1>
                <p>All the bike is showing bellow</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {bikes.map((bike: Bike) => <div key={bike._id} className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <Image
                            width={300}
                            height={300}
                            src={bike?.photo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{bike.title}</h2>
                        <p>{bike.description}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">See details</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default AllBikes
