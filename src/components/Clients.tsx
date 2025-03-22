import { clients } from "../constants";

const Clients = () => (
    <section className="flex justify-center items-center my-4">
        <div className="flex justify-center items-center flex-wrap w-full">
            {clients.map((client, i) => (
                <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]">
                    <img
                        src={client.logo}
                        alt={`client-${i + 1}`}
                        className="sm:w-[192px] w-[100px] object-contain hover:brightness-0 hover:invert transition ease-in-out duration-300"
                    />
                </div>
            ))}
        </div>
    </section>
);
export default Clients;